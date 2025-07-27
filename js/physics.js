// Fizik ve Çarpışma Sistemi
class Physics {
    constructor() {
        this.gravity = 980; // px/s²
        this.terminalVelocity = 800;
        this.friction = 0.85;
        this.airFriction = 0.98;
    }
    
    // Temel fizik güncellemesi
    static updateEntity(entity, deltaTime, options = {}) {
        const gravity = options.gravity || 980;
        const maxVelocityY = options.maxVelocityY || 800;
        const friction = options.friction || 0.85;
        
        // Yerçekimi uygula
        if (!entity.isGrounded) {
            entity.velocityY += gravity * deltaTime;
            entity.velocityY = Math.min(entity.velocityY, maxVelocityY);
        }
        
        // Sürtünme uygula
        if (entity.isGrounded) {
            entity.velocityX *= friction;
        } else {
            entity.velocityX *= 0.98; // Hava sürtünmesi
        }
        
        // Pozisyon güncelle
        entity.x += entity.velocityX * deltaTime;
        entity.y += entity.velocityY * deltaTime;
    }
    
    // AABB (Axis-Aligned Bounding Box) çarpışma algılama
    static checkAABBCollision(rect1, rect2) {
        return rect1.x < rect2.x + rect2.width &&
               rect1.x + rect1.width > rect2.x &&
               rect1.y < rect2.y + rect2.height &&
               rect1.y + rect1.height > rect2.y;
    }
    
    // Çarpışma yönünü belirleme
    static getCollisionDirection(moving, stationary) {
        const centerX1 = moving.x + moving.width / 2;
        const centerY1 = moving.y + moving.height / 2;
        const centerX2 = stationary.x + stationary.width / 2;
        const centerY2 = stationary.y + stationary.height / 2;
        
        const deltaX = centerX1 - centerX2;
        const deltaY = centerY1 - centerY2;
        
        const overlapX = (moving.width + stationary.width) / 2 - Math.abs(deltaX);
        const overlapY = (moving.height + stationary.height) / 2 - Math.abs(deltaY);
        
        if (overlapX < overlapY) {
            return deltaX > 0 ? 'right' : 'left';
        } else {
            return deltaY > 0 ? 'bottom' : 'top';
        }
    }
    
    // Platform çarpışma çözümleme
    static resolvePlatformCollision(entity, platform) {
        const direction = Physics.getCollisionDirection(entity, platform);
        const buffer = 1; // Çarpışma tamponlama
        
        switch (direction) {
            case 'top':
                entity.y = platform.y - entity.height - buffer;
                entity.velocityY = 0;
                entity.isGrounded = true;
                break;
                
            case 'bottom':
                entity.y = platform.y + platform.height + buffer;
                entity.velocityY = 0;
                break;
                
            case 'left':
                entity.x = platform.x - entity.width - buffer;
                entity.velocityX = 0;
                break;
                
            case 'right':
                entity.x = platform.x + platform.width + buffer;
                entity.velocityX = 0;
                break;
        }
    }
    
    // Noktanın dikdörtgen içinde olup olmadığını kontrol et
    static pointInRect(pointX, pointY, rect) {
        return pointX >= rect.x &&
               pointX <= rect.x + rect.width &&
               pointY >= rect.y &&
               pointY <= rect.y + rect.height;
    }
    
    // İki nokta arasındaki mesafe
    static distance(x1, y1, x2, y2) {
        const dx = x2 - x1;
        const dy = y2 - y1;
        return Math.sqrt(dx * dx + dy * dy);
    }
    
    // Vektör normalizasyonu
    static normalize(x, y) {
        const length = Math.sqrt(x * x + y * y);
        if (length === 0) return { x: 0, y: 0 };
        return { x: x / length, y: y / length };
    }
    
    // Lineer interpolasyon
    static lerp(start, end, factor) {
        return start + (end - start) * factor;
    }
    
    // Değeri belirli aralığa sınırla
    static clamp(value, min, max) {
        return Math.max(min, Math.min(max, value));
    }
    
    // Rastgele değer aralığında
    static random(min, max) {
        return Math.random() * (max - min) + min;
    }
    
    // Daire çarpışması
    static checkCircleCollision(circle1, circle2) {
        const dx = circle1.x - circle2.x;
        const dy = circle1.y - circle2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        return distance < (circle1.radius + circle2.radius);
    }
    
    // Daire ve dikdörtgen çarpışması
    static checkCircleRectCollision(circle, rect) {
        const closestX = Physics.clamp(circle.x, rect.x, rect.x + rect.width);
        const closestY = Physics.clamp(circle.y, rect.y, rect.y + rect.height);
        
        const dx = circle.x - closestX;
        const dy = circle.y - closestY;
        
        return (dx * dx + dy * dy) < (circle.radius * circle.radius);
    }
}

// Parçacık Sistemi
class ParticleSystem {
    constructor() {
        this.particles = [];
    }
    
    addParticle(x, y, options = {}) {
        const particle = {
            x: x,
            y: y,
            velocityX: options.velocityX || Physics.random(-100, 100),
            velocityY: options.velocityY || Physics.random(-200, -50),
            life: options.life || 1.0,
            maxLife: options.life || 1.0,
            size: options.size || Physics.random(2, 6),
            color: options.color || '#FFD700',
            gravity: options.gravity || 200,
            fade: options.fade !== false
        };
        
        this.particles.push(particle);
    }
    
    addExplosion(x, y, count = 10, options = {}) {
        for (let i = 0; i < count; i++) {
            const angle = (Math.PI * 2 * i) / count;
            const speed = options.speed || Physics.random(50, 150);
            
            this.addParticle(x, y, {
                velocityX: Math.cos(angle) * speed,
                velocityY: Math.sin(angle) * speed,
                life: options.life || Physics.random(0.5, 1.5),
                size: options.size || Physics.random(3, 8),
                color: options.color || '#FFD700',
                gravity: options.gravity || 300
            });
        }
    }
    
    update(deltaTime) {
        this.particles.forEach((particle, index) => {
            // Fizik güncellemesi
            particle.x += particle.velocityX * deltaTime;
            particle.y += particle.velocityY * deltaTime;
            particle.velocityY += particle.gravity * deltaTime;
            
            // Yaşam süresi
            particle.life -= deltaTime;
            
            // Ölü parçacıkları kaldır
            if (particle.life <= 0) {
                this.particles.splice(index, 1);
            }
        });
    }
    
    render(ctx) {
        this.particles.forEach(particle => {
            ctx.save();
            
            if (particle.fade) {
                ctx.globalAlpha = particle.life / particle.maxLife;
            }
            
            ctx.fillStyle = particle.color;
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fill();
            
            ctx.restore();
        });
    }
    
    clear() {
        this.particles = [];
    }
}

// Tween (Animasyon) Sistemi
class Tween {
    static easeInOut(t) {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }
    
    static easeOut(t) {
        return 1 - Math.pow(1 - t, 3);
    }
    
    static easeIn(t) {
        return t * t * t;
    }
    
    static bounce(t) {
        if (t < (1 / 2.75)) {
            return 7.5625 * t * t;
        } else if (t < (2 / 2.75)) {
            return 7.5625 * (t -= (1.5 / 2.75)) * t + 0.75;
        } else if (t < (2.5 / 2.75)) {
            return 7.5625 * (t -= (2.25 / 2.75)) * t + 0.9375;
        } else {
            return 7.5625 * (t -= (2.625 / 2.75)) * t + 0.984375;
        }
    }
}

// Kamera Sistemi
class Camera {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
        this.targetX = x;
        this.targetY = y;
        this.smoothing = 0.1;
        this.bounds = null;
    }
    
    setBounds(x, y, width, height) {
        this.bounds = { x, y, width, height };
    }
    
    follow(target, canvasWidth, canvasHeight) {
        this.targetX = target.x - canvasWidth / 2;
        this.targetY = target.y - canvasHeight / 2;
        
        // Sınırları kontrol et
        if (this.bounds) {
            this.targetX = Physics.clamp(this.targetX, this.bounds.x, this.bounds.width - canvasWidth);
            this.targetY = Physics.clamp(this.targetY, this.bounds.y, this.bounds.height - canvasHeight);
        }
    }
    
    update() {
        this.x = Physics.lerp(this.x, this.targetX, this.smoothing);
        this.y = Physics.lerp(this.y, this.targetY, this.smoothing);
    }
    
    worldToScreen(worldX, worldY) {
        return {
            x: worldX - this.x,
            y: worldY - this.y
        };
    }
    
    screenToWorld(screenX, screenY) {
        return {
            x: screenX + this.x,
            y: screenY + this.y
        };
    }
} 