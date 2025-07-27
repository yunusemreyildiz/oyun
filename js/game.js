// Ana Oyun Motoru
class Game {
    constructor() {
        this.canvas = document.getElementById('gameCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.gameState = 'menu'; // menu, playing, paused, gameOver, victory
        this.score = 0;
        this.lives = 3;
        this.currentLevel = 1;
        this.maxLevel = 13;
        console.log('🎮 OYUN BAŞLADI! maxLevel:', this.maxLevel);
        console.log('🔥 CACHE BYPASS AKTIF - VERSION 1.2');
        console.log('📊 Tüm 13 seviye yüklendi!');
        
        // Oyun nesneleri
        this.player = null;
        this.platforms = [];
        this.enemies = [];
        this.collectibles = [];
        this.goal = null;
        
        // Kamera
        this.camera = { x: 0, y: 0 };
        
        // Input yönetimi
        this.keys = {};
        this.setupInputListeners();
        
        // Oyun döngüsü
        this.lastTime = 0;
        this.gameLoop = this.gameLoop.bind(this);
        
        // Ses yöneticisi
        this.audio = new AudioManager();
        
        console.log('Oyun başlatıldı!');
    }
    
    setupInputListeners() {
        // Klavye olayları
        document.addEventListener('keydown', (e) => {
            this.keys[e.code] = true;
            
            // ESC ile menüye dön
            if (e.code === 'Escape') {
                if (this.gameState === 'playing') {
                    this.pauseGame();
                } else if (this.gameState === 'paused') {
                    this.resumeGame();
                }
            }
            
            // Menüde Enter ile oyun başlat
            if (e.code === 'Enter' && this.gameState === 'menu') {
                startGame();
            }
        });
        
        document.addEventListener('keyup', (e) => {
            this.keys[e.code] = false;
        });
        
        // Touch kontrolleri mobil için
        this.setupTouchControls();
    }
    
    setupTouchControls() {
        let touchStartX = 0;
        let touchStartY = 0;
        
        this.canvas.addEventListener('touchstart', (e) => {
            e.preventDefault();
            const touch = e.touches[0];
            touchStartX = touch.clientX;
            touchStartY = touch.clientY;
        });
        
        this.canvas.addEventListener('touchmove', (e) => {
            e.preventDefault();
        });
        
        this.canvas.addEventListener('touchend', (e) => {
            e.preventDefault();
            const touch = e.changedTouches[0];
            const deltaX = touch.clientX - touchStartX;
            const deltaY = touch.clientY - touchStartY;
            
            // Zıplama (yukarı swipe)
            if (deltaY < -30 && Math.abs(deltaX) < 50) {
                this.keys['Space'] = true;
                setTimeout(() => this.keys['Space'] = false, 100);
            }
            // Sağa hareket
            else if (deltaX > 30) {
                this.keys['ArrowRight'] = true;
                setTimeout(() => this.keys['ArrowRight'] = false, 200);
            }
            // Sola hareket
            else if (deltaX < -30) {
                this.keys['ArrowLeft'] = true;
                setTimeout(() => this.keys['ArrowLeft'] = false, 200);
            }
        });
    }
    
    startGame() {
        this.gameState = 'playing';
        this.score = 0;
        this.lives = 3;
        this.currentLevel = 1;
        
        // Oyun nesnelerini yükle
        this.loadLevel(this.currentLevel);
        
        // UI güncelle
        this.updateUI();
        
        // Menüleri gizle
        document.getElementById('menu').classList.add('hidden');
        document.getElementById('storyMenu').classList.add('hidden');
        
        // Oyun döngüsünü başlat
        requestAnimationFrame(this.gameLoop);
        
        // Level müziği başlat
        this.audio.playLevelMusic(this.currentLevel);
        
        console.log('Oyun başladı! Level:', this.currentLevel);
    }
    
    loadLevel(levelNumber) {
        // Level verilerini yükle
        const levelData = LevelManager.getLevel(levelNumber);
        
        // Oyuncu oluştur
        this.player = new Player(levelData.playerStart.x, levelData.playerStart.y);
        
        // Platform ve nesneleri yükle
        this.platforms = levelData.platforms.map(p => new Platform(p.x, p.y, p.width, p.height, p.type));
        this.enemies = levelData.enemies.map(e => new Enemy(e.x, e.y, e.type));
        this.collectibles = levelData.collectibles.map(c => new Collectible(c.x, c.y, c.type));
        
        // Hedef (Hale) oluştur
        this.goal = new Goal(levelData.goal.x, levelData.goal.y);
        
        // Kamera sıfırla
        this.camera.x = 0;
        this.camera.y = 0;
    }
    
    gameLoop(currentTime) {
        if (this.gameState !== 'playing') return;
        
        const deltaTime = (currentTime - this.lastTime) / 1000;
        this.lastTime = currentTime;
        
        // Oyun güncellemeleri
        this.update(deltaTime);
        
        // Çizim
        this.render();
        
        // Döngüyü devam ettir
        requestAnimationFrame(this.gameLoop);
    }
    
    update(deltaTime) {
        // Oyuncu güncelle
        this.player.update(deltaTime, this.keys, this.platforms);
        
        // Düşmanları güncelle
        this.enemies.forEach(enemy => enemy.update(deltaTime, this.platforms));
        
        // Kamera oyuncuyu takip etsin
        this.updateCamera();
        
        // Çarpışma kontrolleri
        this.checkCollisions();
        
        // Oyun durumu kontrolleri
        this.checkGameState();
    }
    
    updateCamera() {
        // Kamera oyuncuyu takip eder ama sınırlar içinde kalır
        const targetX = this.player.x - this.canvas.width / 2;
        const targetY = this.player.y - this.canvas.height / 2;
        
        this.camera.x = Math.max(0, Math.min(targetX, 2048 - this.canvas.width));
        this.camera.y = Math.max(0, Math.min(targetY, 1152 - this.canvas.height));
    }
    
    checkCollisions() {
        // Oyuncu vs Düşmanlar
        this.enemies.forEach((enemy, index) => {
            if (this.player.checkCollision(enemy)) {
                if (this.player.velocityY > 0 && this.player.y < enemy.y) {
                    // Düşmanın üstüne zıpladı
                    this.enemies.splice(index, 1);
                    this.player.velocityY = -300;
                    this.score += 100;
                    this.audio.playSound('enemyKill');
                } else {
                    // Hasar aldı
                    this.playerTakeDamage();
                }
            }
        });
        
        // Oyuncu vs Toplanabilir objeler
        this.collectibles.forEach((collectible, index) => {
            if (this.player.checkCollision(collectible)) {
                this.collectibles.splice(index, 1);
                this.score += collectible.value;
                this.audio.playSound('collect');
            }
        });
        
        // Oyuncu vs Hedef (Hale)
        if (this.goal && this.player.checkCollision(this.goal)) {
            this.completeLevel();
        }
        
        // Özel level mekanikleri
        this.checkLevelSpecificMechanics();
    }
    
    checkGameState() {
        // Oyuncu düştü mü?
        if (this.player.y > 1200) {
            this.playerTakeDamage();
        }
    }
    
    playerTakeDamage() {
        this.lives--;
        this.audio.playSound('damage');
        console.log(`💔 HASAR ALDIN! Kalan can: ${this.lives}`);
        
        if (this.lives <= 0) {
            console.log(`☠️ TÜM CANLAR BİTTİ! OYUN BİTİYOR!`);
            this.gameOver();
        } else {
            // Oyuncuyu başlangıç pozisyonuna geri götür
            const levelData = LevelManager.getLevel(this.currentLevel);
            this.player.x = levelData.playerStart.x;
            this.player.y = levelData.playerStart.y;
            this.player.velocityX = 0;
            this.player.velocityY = 0;
        }
        
        this.updateUI();
    }
    
    completeLevel() {
        this.audio.playSound('victory');
        this.audio.playLoveSound(); // Romantik ses ekle
        this.score += 1000;
        
        console.log(`🏆 LEVEL ${this.currentLevel} TAMAMLANDI! Max level: ${this.maxLevel}`);
        console.log(`🎯 Şu anki seviye: ${this.currentLevel}, Max seviye: ${this.maxLevel}`);
        console.log(`🔍 KONTROL: ${this.currentLevel} >= ${this.maxLevel} = ${this.currentLevel >= this.maxLevel}`);
        
        if (this.currentLevel >= this.maxLevel) {
            console.log('Oyun tamamlandı!');
            this.gameComplete();
        } else {
            console.log(`Sonraki level: ${this.currentLevel + 1}`);
            // Level geçiş animasyonu göster
            this.showLevelTransition(() => {
                this.currentLevel++;
                this.loadLevel(this.currentLevel);
                this.updateUI();
                this.audio.playLevelMusic(this.currentLevel);
            });
        }
    }
    
    showLevelTransition(callback) {
        this.gameState = 'transition';
        let progress = 0;
        
        const transitionAnimation = () => {
            progress += 0.02;
            
            // Geçiş ekranını çiz
            this.ctx.save();
            this.ctx.setTransform(1, 0, 0, 1, 0, 0); // Kamera resetle
            LevelManager.showLevelTransition(this.ctx, this.currentLevel + 1, progress);
            this.ctx.restore();
            
            if (progress >= 1) {
                setTimeout(() => {
                    this.gameState = 'playing';
                    callback();
                    requestAnimationFrame(this.gameLoop);
                }, 1000);
            } else {
                requestAnimationFrame(transitionAnimation);
            }
        };
        
        requestAnimationFrame(transitionAnimation);
    }
    
    checkLevelSpecificMechanics() {
        // Level 8: Hacker seviyesi - özel efektler
        if (this.currentLevel === 8) {
            // Matrix efekti
            this.addMatrixEffect();
        }
        
        // Level 11: Çıldırma seviyesi - ekran sarsıntısı
        if (this.currentLevel === 11) {
            this.addScreenShake();
        }
        
        // Level 13: Trabzon seviyesi - uçak efekti
        if (this.currentLevel === 13) {
            this.addPlaneEffect();
        }
    }
    
    addMatrixEffect() {
        // Basit matrix efekti - yeşil parçacıklar
        if (Math.random() < 0.1) {
            for (let i = 0; i < 5; i++) {
                const x = Math.random() * this.canvas.width + this.camera.x;
                const y = this.camera.y - 10;
                // Matrix karakterleri efekti burada olacak
            }
        }
    }
    
    addScreenShake() {
        // Ekran sarsıntısı efekti
        if (this.enemies.length > 0) {
            this.camera.x += (Math.random() - 0.5) * 4;
            this.camera.y += (Math.random() - 0.5) * 4;
        }
    }
    
    addPlaneEffect() {
        // Uçak ve bulut efektleri
        // Bu level'de ek görsel efektler
    }
    
    gameOver() {
        this.gameState = 'gameOver';
        this.audio.stopBackgroundMusic();
        
        setTimeout(() => {
            alert(`Oyun Bitti! 💔\nSkor: ${this.score}\n\nTekrar denemek ister misin?`);
            this.backToMenu();
        }, 1000);
    }
    
    gameComplete() {
        this.gameState = 'victory';
        this.audio.stopBackgroundMusic();
        this.audio.playSound('gameComplete');
        
        setTimeout(() => {
            alert(`Tebrikler! 💕\nYunus ve Hale sonunda buluştular!\nFinal Skor: ${this.score}`);
            this.backToMenu();
        }, 1500);
    }
    
    pauseGame() {
        this.gameState = 'paused';
        document.getElementById('menu').classList.remove('hidden');
    }
    
    resumeGame() {
        this.gameState = 'playing';
        document.getElementById('menu').classList.add('hidden');
        requestAnimationFrame(this.gameLoop);
    }
    
    backToMenu() {
        this.gameState = 'menu';
        document.getElementById('menu').classList.remove('hidden');
        document.getElementById('storyMenu').classList.add('hidden');
        this.audio.stopBackgroundMusic();
    }
    
    updateUI() {
        document.getElementById('score').textContent = this.score;
        document.getElementById('lives').textContent = this.lives;
        document.getElementById('level').textContent = this.currentLevel;
    }
    
    render() {
        // Level temasına göre arka plan çiz
        LevelManager.renderBackground(this.ctx, this.currentLevel, this.camera);
        
        // Kamera transformasyonu uygula
        this.ctx.save();
        this.ctx.translate(-this.camera.x, -this.camera.y);
        
        // Platform ve nesneleri çiz
        this.platforms.forEach(platform => platform.render(this.ctx));
        this.enemies.forEach(enemy => enemy.render(this.ctx));
        this.collectibles.forEach(collectible => {
            collectible.update(0.016); // Delta time yaklaşımı
            collectible.render(this.ctx);
        });
        
        // Hedef çiz
        if (this.goal) {
            this.goal.update(0.016);
            this.goal.render(this.ctx);
        }
        
        // Oyuncu çiz
        this.player.render(this.ctx);
        
        this.ctx.restore();
    }
    
    drawClouds() {
        // Basit bulut çizimi
        this.ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        for (let i = 0; i < 5; i++) {
            const x = (i * 400 - this.camera.x * 0.3) % (this.canvas.width + 200);
            const y = 100 + i * 30;
            this.drawCloud(x, y);
        }
    }
    
    drawCloud(x, y) {
        this.ctx.beginPath();
        this.ctx.arc(x, y, 30, 0, Math.PI * 2);
        this.ctx.arc(x + 25, y, 35, 0, Math.PI * 2);
        this.ctx.arc(x + 50, y, 30, 0, Math.PI * 2);
        this.ctx.arc(x + 25, y - 20, 25, 0, Math.PI * 2);
        this.ctx.fill();
    }
}

// Global oyun nesnesi
let game = null;

// Menü fonksiyonları
function startGame() {
    if (!game) {
        game = new Game();
    }
    game.startGame();
}

function showStory() {
    document.getElementById('menu').classList.add('hidden');
    document.getElementById('storyMenu').classList.remove('hidden');
}

function backToMenu() {
    document.getElementById('menu').classList.remove('hidden');
    document.getElementById('storyMenu').classList.add('hidden');
    if (game) {
        game.backToMenu();
    }
}

// Sayfa yüklendiğinde oyunu başlat
window.addEventListener('load', () => {
    console.log('Yunus & Hale: Aşk Macerası yüklendi!');
}); 