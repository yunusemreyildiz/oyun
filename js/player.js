// Yunus (Oyuncu) Sınıfı
class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 32;
        this.height = 48;
        this.velocityX = 0;
        this.velocityY = 0;
        this.speed = 250;
        this.jumpPower = 400;
        this.isGrounded = false;
        this.isJumping = false;
        this.direction = 1; // 1 = sağ, -1 = sol
        
        // Animasyon
        this.animationFrame = 0;
        this.animationTimer = 0;
        this.state = 'idle'; // idle, walking, jumping, falling
        
        // Sprite efektleri
        this.hearts = []; // Kalp partikülleri
        this.heartTimer = 0;
    }
    
    update(deltaTime, keys, platforms) {
        this.handleInput(keys);
        this.updatePhysics(deltaTime);
        this.checkPlatformCollisions(platforms);
        this.updateAnimation(deltaTime);
        this.updateHearts(deltaTime);
        
        // Kalp partikülleri ekle
        this.heartTimer += deltaTime;
        if (this.heartTimer > 0.5) {
            this.addHeart();
            this.heartTimer = 0;
        }
    }
    
    handleInput(keys) {
        // Yatay hareket
        if (keys['KeyA'] || keys['ArrowLeft']) {
            this.velocityX = -this.speed;
            this.direction = -1;
            this.state = 'walking';
        } else if (keys['KeyD'] || keys['ArrowRight']) {
            this.velocityX = this.speed;
            this.direction = 1;
            this.state = 'walking';
        } else {
            this.velocityX *= 0.8; // Sürtünme
            if (Math.abs(this.velocityX) < 5) {
                this.velocityX = 0;
                if (this.isGrounded) this.state = 'idle';
            }
        }
        
        // Zıplama
        if ((keys['KeyW'] || keys['ArrowUp'] || keys['Space']) && this.isGrounded && !this.isJumping) {
            this.velocityY = -this.jumpPower;
            this.isJumping = true;
            this.isGrounded = false;
            this.state = 'jumping';
        }
        
        // Zıplama tuşu bırakıldığında
        if (!(keys['KeyW'] || keys['ArrowUp'] || keys['Space'])) {
            this.isJumping = false;
        }
    }
    
    updatePhysics(deltaTime) {
        // Yerçekimi
        if (!this.isGrounded) {
            this.velocityY += 980 * deltaTime; // Yerçekimi hızlandırması
            this.state = this.velocityY > 0 ? 'falling' : 'jumping';
        }
        
        // Pozisyon güncellemesi
        this.x += this.velocityX * deltaTime;
        this.y += this.velocityY * deltaTime;
        
        // Hız sınırları
        this.velocityX = Math.max(-400, Math.min(400, this.velocityX));
        this.velocityY = Math.max(-600, Math.min(800, this.velocityY));
    }
    
    checkPlatformCollisions(platforms) {
        this.isGrounded = false;
        
        platforms.forEach(platform => {
            if (this.checkCollision(platform)) {
                // Yukarıdan çarpışma (yere inme)
                if (this.velocityY > 0 && this.y < platform.y + platform.height / 2) {
                    this.y = platform.y - this.height;
                    this.velocityY = 0;
                    this.isGrounded = true;
                    this.isJumping = false;
                }
                // Alttan çarpışma (tavana çarpma)
                else if (this.velocityY < 0 && this.y > platform.y) {
                    this.y = platform.y + platform.height;
                    this.velocityY = 0;
                }
                // Yanlarda çarpışma
                else if (this.velocityY === 0 || Math.abs(this.velocityY) < 50) {
                    if (this.x < platform.x) {
                        this.x = platform.x - this.width;
                    } else {
                        this.x = platform.x + platform.width;
                    }
                    this.velocityX = 0;
                }
            }
        });
    }
    
    checkCollision(other) {
        return this.x < other.x + other.width &&
               this.x + this.width > other.x &&
               this.y < other.y + other.height &&
               this.y + this.height > other.y;
    }
    
    updateAnimation(deltaTime) {
        this.animationTimer += deltaTime;
        
        if (this.animationTimer > 0.1) {
            this.animationFrame = (this.animationFrame + 1) % 4;
            this.animationTimer = 0;
        }
    }
    
    addHeart() {
        this.hearts.push({
            x: this.x + this.width / 2,
            y: this.y + this.height / 2,
            velocityX: (Math.random() - 0.5) * 100,
            velocityY: -Math.random() * 50 - 30,
            life: 1.0,
            size: Math.random() * 8 + 4
        });
        
        // Maksimum 10 kalp
        if (this.hearts.length > 10) {
            this.hearts.shift();
        }
    }
    
    updateHearts(deltaTime) {
        this.hearts.forEach((heart, index) => {
            heart.x += heart.velocityX * deltaTime;
            heart.y += heart.velocityY * deltaTime;
            heart.velocityY += 200 * deltaTime; // Yerçekimi
            heart.life -= deltaTime * 2;
            
            if (heart.life <= 0) {
                this.hearts.splice(index, 1);
            }
        });
    }
    
    render(ctx) {
        // Kalpleri çiz
        this.hearts.forEach(heart => {
            ctx.save();
            ctx.globalAlpha = heart.life;
            ctx.fillStyle = '#FF69B4';
            ctx.font = `${heart.size}px Arial`;
            ctx.textAlign = 'center';
            ctx.fillText('💖', heart.x, heart.y);
            ctx.restore();
        });
        
        // Oyuncu sprite'ını çiz
        ctx.save();
        
        // Yön (aynalama)
        if (this.direction === -1) {
            ctx.scale(-1, 1);
            ctx.translate(-this.x - this.width, 0);
        } else {
            ctx.translate(this.x, 0);
        }
        
        // Yunus karakterini çiz
        this.drawYunus(ctx);
        
        ctx.restore();
        
        // Debug: Çarpışma kutusunu çiz
        if (false) { // Debug için true yap
            ctx.strokeStyle = 'red';
            ctx.strokeRect(this.x, this.y, this.width, this.height);
        }
    }
    
    drawYunus(ctx) {
        const frameOffset = this.animationFrame * 8;
        
        // Gölge
        ctx.fillStyle = 'rgba(0,0,0,0.3)';
        ctx.fillRect(4, this.y + this.height - 4, this.width - 8, 8);
        
        // Vücut
        ctx.fillStyle = '#8B4513'; // Kahverengi ten
        ctx.fillRect(8, this.y + 16, 16, 20);
        
        // Kafa
        ctx.fillStyle = '#FDBCB4'; // Ten rengi
        ctx.fillRect(6, this.y + 4, 20, 16);
        
        // Saç
        ctx.fillStyle = '#4A4A4A'; // Koyu gri saç
        ctx.fillRect(4, this.y, 24, 8);
        
        // Gözler
        ctx.fillStyle = '#000';
        ctx.fillRect(10, this.y + 8, 2, 2);
        ctx.fillRect(18, this.y + 8, 2, 2);
        
        // Gülümseme
        if (this.state === 'idle' || this.animationFrame % 2 === 0) {
            ctx.fillStyle = '#FF0000';
            ctx.fillRect(12, this.y + 12, 8, 1);
        }
        
        // Tişört
        ctx.fillStyle = '#0066CC'; // Mavi tişört
        ctx.fillRect(6, this.y + 18, 20, 14);
        
        // Pantolon
        ctx.fillStyle = '#2F4F4F'; // Koyu gri pantolon
        ctx.fillRect(8, this.y + 30, 16, 12);
        
        // Ayaklar
        ctx.fillStyle = '#8B4513';
        if (this.state === 'walking') {
            // Yürüme animasyonu
            const legOffset = Math.sin(this.animationFrame) * 2;
            ctx.fillRect(8, this.y + 40 + legOffset, 6, 8);
            ctx.fillRect(18, this.y + 40 - legOffset, 6, 8);
        } else {
            ctx.fillRect(8, this.y + 40, 6, 8);
            ctx.fillRect(18, this.y + 40, 6, 8);
        }
        
        // Ayakkabılar
        ctx.fillStyle = '#000';
        ctx.fillRect(6, this.y + 46, 10, 4);
        ctx.fillRect(16, this.y + 46, 10, 4);
        
        // Düşünce balonu (idle durumunda)
        if (this.state === 'idle' && this.animationFrame < 2) {
            ctx.fillStyle = 'rgba(255,255,255,0.9)';
            ctx.fillRect(this.width + 5, this.y - 20, 30, 15);
            ctx.fillStyle = '#FF69B4';
            ctx.font = '12px Arial';
            ctx.fillText('💕 Hale', this.width + 8, this.y - 8);
        }
    }
}

// Platform Sınıfı
class Platform {
    constructor(x, y, width, height, type = 'grass') {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.type = type;
    }
    
    render(ctx) {
        switch (this.type) {
            case 'grass':
                // Çim platform
                ctx.fillStyle = '#228B22';
                ctx.fillRect(this.x, this.y, this.width, this.height);
                ctx.fillStyle = '#32CD32';
                ctx.fillRect(this.x, this.y, this.width, 4);
                break;
                
            case 'stone':
                // Taş platform
                ctx.fillStyle = '#696969';
                ctx.fillRect(this.x, this.y, this.width, this.height);
                ctx.fillStyle = '#808080';
                for (let i = 0; i < this.width; i += 16) {
                    ctx.fillRect(this.x + i, this.y, 14, 2);
                }
                break;
                
            case 'cloud':
                // Bulut platform
                ctx.fillStyle = 'rgba(255,255,255,0.8)';
                ctx.fillRect(this.x, this.y, this.width, this.height);
                ctx.fillStyle = 'rgba(200,200,255,0.6)';
                ctx.fillRect(this.x, this.y + this.height - 4, this.width, 4);
                break;
                
            default:
                ctx.fillStyle = '#8B4513';
                ctx.fillRect(this.x, this.y, this.width, this.height);
        }
        
        // Debug: Platform sınırları
        if (false) { // Debug için true yap
            ctx.strokeStyle = 'blue';
            ctx.strokeRect(this.x, this.y, this.width, this.height);
        }
    }
}

// Düşman Sınıfı
class Enemy {
    constructor(x, y, type = 'basic') {
        this.x = x;
        this.y = y;
        this.width = 24;
        this.height = 24;
        this.velocityX = -60;
        this.velocityY = 0;
        this.type = type;
        this.direction = -1;
        this.animationFrame = 0;
        this.animationTimer = 0;
        this.isGrounded = false;
    }
    
    update(deltaTime, platforms) {
        // Temel AI - ileri geri hareket
        this.x += this.velocityX * deltaTime;
        
        // Yerçekimi
        if (!this.isGrounded) {
            this.velocityY += 980 * deltaTime;
        }
        this.y += this.velocityY * deltaTime;
        
        // Platform çarpışmaları
        this.checkPlatformCollisions(platforms);
        
        // Animasyon
        this.animationTimer += deltaTime;
        if (this.animationTimer > 0.2) {
            this.animationFrame = (this.animationFrame + 1) % 2;
            this.animationTimer = 0;
        }
    }
    
    checkPlatformCollisions(platforms) {
        this.isGrounded = false;
        
        platforms.forEach(platform => {
            if (this.checkCollision(platform)) {
                // Yukarıdan çarpışma
                if (this.velocityY > 0 && this.y < platform.y + platform.height / 2) {
                    this.y = platform.y - this.height;
                    this.velocityY = 0;
                    this.isGrounded = true;
                    
                    // Platform kenarına geldiğinde dön
                    if (this.x <= platform.x || this.x + this.width >= platform.x + platform.width) {
                        this.velocityX *= -1;
                        this.direction *= -1;
                    }
                }
            }
        });
    }
    
    checkCollision(other) {
        return this.x < other.x + other.width &&
               this.x + this.width > other.x &&
               this.y < other.y + other.height &&
               this.y + this.height > other.y;
    }
    
    render(ctx) {
        ctx.save();
        
        // Yön
        if (this.direction === 1) {
            ctx.scale(-1, 1);
            ctx.translate(-this.x - this.width, 0);
        } else {
            ctx.translate(this.x, 0);
        }
        
        // Gümba tarzı düşman
        ctx.fillStyle = '#8B4513';
        ctx.fillRect(0, this.y + 8, this.width, 16);
        
        // Kafa
        ctx.fillStyle = '#D2691E';
        ctx.fillRect(2, this.y, 20, 12);
        
        // Gözler
        ctx.fillStyle = '#000';
        ctx.fillRect(6, this.y + 3, 2, 2);
        ctx.fillRect(16, this.y + 3, 2, 2);
        
        // Ağız
        ctx.fillRect(10, this.y + 7, 4, 1);
        
        // Ayaklar
        if (this.animationFrame === 0) {
            ctx.fillStyle = '#654321';
            ctx.fillRect(2, this.y + 20, 4, 4);
            ctx.fillRect(18, this.y + 20, 4, 4);
        }
        
        ctx.restore();
    }
}

// Toplanabilir Obje Sınıfı
class Collectible {
    constructor(x, y, type = 'heart') {
        this.x = x;
        this.y = y;
        this.width = 16;
        this.height = 16;
        this.type = type;
        this.value = type === 'heart' ? 50 : 100;
        this.animationTimer = 0;
        this.floatOffset = 0;
    }
    
    update(deltaTime) {
        this.animationTimer += deltaTime;
        this.floatOffset = Math.sin(this.animationTimer * 3) * 4;
    }
    
    checkCollision(other) {
        return this.x < other.x + other.width &&
               this.x + this.width > other.x &&
               this.y < other.y + other.height &&
               this.y + this.height > other.y;
    }
    
    render(ctx) {
        const drawY = this.y + this.floatOffset;
        
        switch (this.type) {
            case 'heart':
                ctx.fillStyle = '#FF69B4';
                ctx.font = '20px Arial';
                ctx.textAlign = 'center';
                ctx.fillText('💕', this.x + this.width/2, drawY + this.height);
                break;
                
            case 'star':
                ctx.fillStyle = '#FFD700';
                ctx.font = '20px Arial';
                ctx.textAlign = 'center';
                ctx.fillText('⭐', this.x + this.width/2, drawY + this.height);
                break;
        }
    }
}

// Hedef (Hale) Sınıfı
class Goal {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 32;
        this.height = 48;
        this.animationTimer = 0;
        this.glowIntensity = 0;
    }
    
    update(deltaTime) {
        this.animationTimer += deltaTime;
        this.glowIntensity = (Math.sin(this.animationTimer * 2) + 1) / 2;
    }
    
    checkCollision(other) {
        return this.x < other.x + other.width &&
               this.x + this.width > other.x &&
               this.y < other.y + other.height &&
               this.y + this.height > other.y;
    }
    
    render(ctx) {
        // Işık halesi
        ctx.save();
        ctx.globalAlpha = 0.3 + this.glowIntensity * 0.4;
        const gradient = ctx.createRadialGradient(
            this.x + this.width/2, this.y + this.height/2, 0,
            this.x + this.width/2, this.y + this.height/2, 60
        );
        gradient.addColorStop(0, '#FFD700');
        gradient.addColorStop(1, 'rgba(255, 215, 0, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(this.x - 30, this.y - 30, this.width + 60, this.height + 60);
        ctx.restore();
        
        // Hale karakteri
        this.drawHale(ctx);
    }
    
    drawHale(ctx) {
        // Vücut
        ctx.fillStyle = '#FDBCB4'; // Ten rengi
        ctx.fillRect(this.x + 8, this.y + 16, 16, 20);
        
        // Kafa
        ctx.fillStyle = '#FDBCB4';
        ctx.fillRect(this.x + 6, this.y + 4, 20, 16);
        
        // Uzun saç
        ctx.fillStyle = '#8B4513'; // Kahverengi saç
        ctx.fillRect(this.x + 2, this.y, 28, 12);
        ctx.fillRect(this.x + 4, this.y + 12, 6, 8); // Yan saç
        ctx.fillRect(this.x + 22, this.y + 12, 6, 8);
        
        // Gözler
        ctx.fillStyle = '#000';
        ctx.fillRect(this.x + 10, this.y + 8, 2, 2);
        ctx.fillRect(this.x + 18, this.y + 8, 2, 2);
        
        // Gülümseme
        ctx.fillStyle = '#FF69B4';
        ctx.fillRect(this.x + 12, this.y + 12, 8, 1);
        
        // Elbise
        ctx.fillStyle = '#FF69B4'; // Pembe elbise
        ctx.fillRect(this.x + 6, this.y + 18, 20, 16);
        
        // Kollar
        ctx.fillStyle = '#FDBCB4';
        ctx.fillRect(this.x + 2, this.y + 20, 6, 12);
        ctx.fillRect(this.x + 24, this.y + 20, 6, 12);
        
        // Bacaklar
        ctx.fillStyle = '#FDBCB4';
        ctx.fillRect(this.x + 8, this.y + 32, 6, 12);
        ctx.fillRect(this.x + 18, this.y + 32, 6, 12);
        
        // Ayakkabılar
        ctx.fillStyle = '#FF1493';
        ctx.fillRect(this.x + 6, this.y + 42, 10, 4);
        ctx.fillRect(this.x + 16, this.y + 42, 10, 4);
        
        // Kalp çıkartması (animation)
        const heartScale = 1 + this.glowIntensity * 0.3;
        ctx.save();
        ctx.scale(heartScale, heartScale);
        ctx.fillStyle = '#FFD700';
        ctx.font = '16px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('💖', (this.x + this.width/2) / heartScale, (this.y - 10) / heartScale);
        ctx.restore();
    }
} 