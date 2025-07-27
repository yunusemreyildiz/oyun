// Level Yöneticisi
class LevelManager {
    static levels = {
        1: {
            name: "Lise Koridorları",
            description: "Yunus, lisede Hale'yi ilk gördüğü anı yaşıyor...",
            theme: "school",
            playerStart: { x: 50, y: 400 },
            goal: { x: 1800, y: 350 },
            platforms: [
                // Zemin platformları
                { x: 0, y: 450, width: 300, height: 50, type: 'stone' },
                { x: 350, y: 450, width: 200, height: 50, type: 'stone' },
                { x: 600, y: 450, width: 300, height: 50, type: 'stone' },
                { x: 950, y: 450, width: 150, height: 50, type: 'stone' },
                { x: 1150, y: 450, width: 200, height: 50, type: 'stone' },
                { x: 1400, y: 450, width: 300, height: 50, type: 'stone' },
                { x: 1750, y: 450, width: 300, height: 50, type: 'stone' },
                
                // Yüksek platformlar (lise sıralar)
                { x: 200, y: 350, width: 100, height: 20, type: 'stone' },
                { x: 450, y: 300, width: 100, height: 20, type: 'stone' },
                { x: 700, y: 250, width: 100, height: 20, type: 'stone' },
                { x: 900, y: 300, width: 100, height: 20, type: 'stone' },
                { x: 1200, y: 350, width: 100, height: 20, type: 'stone' },
                { x: 1500, y: 300, width: 100, height: 20, type: 'stone' },
                
                // Üst kata çıkış
                { x: 1650, y: 400, width: 50, height: 20, type: 'stone' },
                { x: 1750, y: 350, width: 50, height: 20, type: 'stone' },
            ],
            enemies: [
                { x: 250, y: 420, type: 'student' },
                { x: 500, y: 420, type: 'student' },
                { x: 800, y: 420, type: 'student' },
                { x: 1100, y: 420, type: 'student' },
                { x: 1300, y: 420, type: 'student' },
            ],
            collectibles: [
                { x: 150, y: 420, type: 'heart' },
                { x: 250, y: 320, type: 'heart' },
                { x: 500, y: 270, type: 'star' },
                { x: 750, y: 220, type: 'heart' },
                { x: 950, y: 270, type: 'heart' },
                { x: 1250, y: 320, type: 'star' },
                { x: 1550, y: 270, type: 'heart' },
            ]
        },
        
        2: {
            name: "Sosyal Medya Dünyası",
            description: "Yıllar sonra Yunus, Hale'yi sosyal medyada buldu...",
            theme: "digital",
            playerStart: { x: 50, y: 400 },
            goal: { x: 1900, y: 200 },
            platforms: [
                // Ana zemin
                { x: 0, y: 450, width: 200, height: 50, type: 'grass' },
                { x: 250, y: 450, width: 150, height: 50, type: 'cloud' },
                { x: 450, y: 450, width: 200, height: 50, type: 'grass' },
                { x: 700, y: 450, width: 150, height: 50, type: 'cloud' },
                { x: 900, y: 450, width: 200, height: 50, type: 'grass' },
                
                // Bulut platformları (sosyal medya posts)
                { x: 150, y: 350, width: 80, height: 20, type: 'cloud' },
                { x: 300, y: 300, width: 80, height: 20, type: 'cloud' },
                { x: 500, y: 250, width: 80, height: 20, type: 'cloud' },
                { x: 650, y: 200, width: 80, height: 20, type: 'cloud' },
                { x: 800, y: 150, width: 80, height: 20, type: 'cloud' },
                { x: 950, y: 200, width: 80, height: 20, type: 'cloud' },
                { x: 1100, y: 250, width: 80, height: 20, type: 'cloud' },
                { x: 1250, y: 200, width: 80, height: 20, type: 'cloud' },
                { x: 1400, y: 150, width: 80, height: 20, type: 'cloud' },
                { x: 1550, y: 200, width: 80, height: 20, type: 'cloud' },
                { x: 1700, y: 250, width: 80, height: 20, type: 'cloud' },
                { x: 1850, y: 300, width: 100, height: 20, type: 'cloud' },
                
                // Yüksek platform (Hale'nin profili)
                { x: 1800, y: 200, width: 200, height: 30, type: 'cloud' },
            ],
            enemies: [
                { x: 200, y: 420, type: 'troll' },
                { x: 400, y: 420, type: 'spam' },
                { x: 600, y: 420, type: 'troll' },
                { x: 850, y: 420, type: 'spam' },
            ],
            collectibles: [
                { x: 100, y: 420, type: 'heart' },
                { x: 180, y: 320, type: 'heart' },
                { x: 330, y: 270, type: 'star' },
                { x: 530, y: 220, type: 'heart' },
                { x: 680, y: 170, type: 'star' },
                { x: 830, y: 120, type: 'heart' },
                { x: 980, y: 170, type: 'heart' },
                { x: 1130, y: 220, type: 'star' },
                { x: 1280, y: 170, type: 'heart' },
                { x: 1430, y: 120, type: 'heart' },
                { x: 1580, y: 170, type: 'star' },
                { x: 1730, y: 220, type: 'heart' },
            ]
        },
        
        3: {
            name: "Aşkın Zaferi",
            description: "Sonunda bir araya geldiler! Mutlu son...",
            theme: "romance",
            playerStart: { x: 50, y: 400 },
            goal: { x: 1700, y: 100 },
            platforms: [
                // Romantik bahçe zemini
                { x: 0, y: 450, width: 300, height: 50, type: 'grass' },
                { x: 350, y: 450, width: 200, height: 50, type: 'grass' },
                { x: 600, y: 450, width: 250, height: 50, type: 'grass' },
                { x: 900, y: 450, width: 200, height: 50, type: 'grass' },
                { x: 1150, y: 450, width: 300, height: 50, type: 'grass' },
                { x: 1500, y: 450, width: 250, height: 50, type: 'grass' },
                
                // Kalp şeklinde platformlar
                { x: 200, y: 380, width: 60, height: 15, type: 'cloud' },
                { x: 280, y: 380, width: 60, height: 15, type: 'cloud' },
                { x: 240, y: 350, width: 40, height: 15, type: 'cloud' },
                
                { x: 500, y: 350, width: 60, height: 15, type: 'cloud' },
                { x: 580, y: 350, width: 60, height: 15, type: 'cloud' },
                { x: 540, y: 320, width: 40, height: 15, type: 'cloud' },
                
                { x: 800, y: 320, width: 60, height: 15, type: 'cloud' },
                { x: 880, y: 320, width: 60, height: 15, type: 'cloud' },
                { x: 840, y: 290, width: 40, height: 15, type: 'cloud' },
                
                // Çiçek platformları
                { x: 1000, y: 350, width: 80, height: 20, type: 'grass' },
                { x: 1200, y: 300, width: 80, height: 20, type: 'grass' },
                { x: 1400, y: 250, width: 80, height: 20, type: 'grass' },
                { x: 1600, y: 200, width: 80, height: 20, type: 'grass' },
                
                // Final platform (altar)
                { x: 1650, y: 100, width: 150, height: 30, type: 'cloud' },
            ],
            enemies: [
                // Daha az düşman, daha çok aşk temalı
                { x: 300, y: 420, type: 'jealousy' },
                { x: 700, y: 420, type: 'jealousy' },
                { x: 1000, y: 420, type: 'jealousy' },
            ],
            collectibles: [
                // Çok kalp!
                { x: 120, y: 420, type: 'heart' },
                { x: 220, y: 350, type: 'heart' },
                { x: 300, y: 350, type: 'heart' },
                { x: 260, y: 320, type: 'star' },
                { x: 520, y: 320, type: 'heart' },
                { x: 600, y: 320, type: 'heart' },
                { x: 560, y: 290, type: 'star' },
                { x: 820, y: 290, type: 'heart' },
                { x: 900, y: 290, type: 'heart' },
                { x: 860, y: 260, type: 'star' },
                { x: 1040, y: 320, type: 'heart' },
                { x: 1240, y: 270, type: 'heart' },
                { x: 1440, y: 220, type: 'star' },
                { x: 1640, y: 170, type: 'heart' },
                { x: 1720, y: 70, type: 'star' }, // Final ödül
            ]
        }
    };
    
    static getLevel(levelNumber) {
        return this.levels[levelNumber] || this.levels[1];
    }
    
    static getTotalLevels() {
        return Object.keys(this.levels).length;
    }
    
    static getLevelTheme(levelNumber) {
        const level = this.getLevel(levelNumber);
        return level.theme;
    }
    
    static getLevelDescription(levelNumber) {
        const level = this.getLevel(levelNumber);
        return level.description;
    }
    
    // Level background çizimi
    static renderBackground(ctx, levelNumber, camera) {
        const theme = this.getLevelTheme(levelNumber);
        
        switch (theme) {
            case 'school':
                this.renderSchoolBackground(ctx, camera);
                break;
            case 'digital':
                this.renderDigitalBackground(ctx, camera);
                break;
            case 'romance':
                this.renderRomanceBackground(ctx, camera);
                break;
            default:
                this.renderDefaultBackground(ctx, camera);
        }
    }
    
    static renderSchoolBackground(ctx, camera) {
        // Lise koridoru arka planı
        ctx.fillStyle = '#F5F5DC'; // Bej renk
        ctx.fillRect(-camera.x, -camera.y, 2048, 576);
        
        // Sınıf kapıları
        ctx.fillStyle = '#8B4513';
        for (let i = 0; i < 5; i++) {
            const x = 200 + i * 400 - camera.x;
            const y = 250 - camera.y;
            ctx.fillRect(x, y, 60, 120);
            
            // Kapı kolu
            ctx.fillStyle = '#FFD700';
            ctx.fillRect(x + 50, y + 60, 8, 8);
            ctx.fillStyle = '#8B4513';
        }
        
        // Okul panoları
        ctx.fillStyle = '#FFFFFF';
        for (let i = 0; i < 3; i++) {
            const x = 100 + i * 600 - camera.x;
            const y = 200 - camera.y;
            ctx.fillRect(x, y, 80, 60);
            ctx.strokeStyle = '#000';
            ctx.strokeRect(x, y, 80, 60);
        }
    }
    
    static renderDigitalBackground(ctx, camera) {
        // Dijital sosyal medya arka planı
        const gradient = ctx.createLinearGradient(0, 0, 0, 576);
        gradient.addColorStop(0, '#1a1a2e');
        gradient.addColorStop(0.5, '#16213e');
        gradient.addColorStop(1, '#0f3460');
        ctx.fillStyle = gradient;
        ctx.fillRect(-camera.x, -camera.y, 2048, 576);
        
        // Dijital grid pattern
        ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)';
        ctx.lineWidth = 1;
        for (let x = 0; x < 2048; x += 50) {
            ctx.beginPath();
            ctx.moveTo(x - camera.x, 0 - camera.y);
            ctx.lineTo(x - camera.x, 576 - camera.y);
            ctx.stroke();
        }
        for (let y = 0; y < 576; y += 50) {
            ctx.beginPath();
            ctx.moveTo(0 - camera.x, y - camera.y);
            ctx.lineTo(2048 - camera.x, y - camera.y);
            ctx.stroke();
        }
        
        // Sosyal medya ikonları
        ctx.font = '24px Arial';
        const icons = ['📱', '💬', '👍', '❤️', '📷', '🌐'];
        for (let i = 0; i < 20; i++) {
            const x = Math.random() * 1800 - camera.x * 0.5;
            const y = Math.random() * 400 - camera.y * 0.5;
            const icon = icons[Math.floor(Math.random() * icons.length)];
            ctx.fillStyle = `rgba(0, 255, 255, ${0.1 + Math.random() * 0.2})`;
            ctx.fillText(icon, x, y);
        }
    }
    
    static renderRomanceBackground(ctx, camera) {
        // Romantik bahçe arka planı
        const gradient = ctx.createLinearGradient(0, 0, 0, 576);
        gradient.addColorStop(0, '#FFB6C1'); // Açık pembe
        gradient.addColorStop(0.3, '#FFC0CB'); // Pembe
        gradient.addColorStop(0.7, '#98FB98'); // Açık yeşil
        gradient.addColorStop(1, '#90EE90'); // Yeşil
        ctx.fillStyle = gradient;
        ctx.fillRect(-camera.x, -camera.y, 2048, 576);
        
        // Çiçekler
        ctx.font = '20px Arial';
        const flowers = ['🌸', '🌺', '🌻', '🌷', '🌹', '💐'];
        for (let i = 0; i < 30; i++) {
            const x = (i * 60 + Math.sin(i) * 30) - camera.x * 0.3;
            const y = 350 + Math.sin(i * 0.5) * 50 - camera.y * 0.3;
            const flower = flowers[i % flowers.length];
            ctx.fillText(flower, x, y);
        }
        
        // Kalpler
        ctx.font = '16px Arial';
        for (let i = 0; i < 15; i++) {
            const x = Math.random() * 1800 - camera.x * 0.2;
            const y = Math.random() * 200 + 50 - camera.y * 0.2;
            ctx.fillStyle = `rgba(255, 105, 180, ${0.3 + Math.random() * 0.4})`;
            ctx.fillText('💕', x, y);
        }
        
        // Bulutlar
        ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
        for (let i = 0; i < 8; i++) {
            const x = i * 250 - camera.x * 0.1;
            const y = 80 + Math.sin(i * 0.8) * 30 - camera.y * 0.1;
            this.drawCloud(ctx, x, y, 40);
        }
    }
    
    static renderDefaultBackground(ctx, camera) {
        const gradient = ctx.createLinearGradient(0, 0, 0, 576);
        gradient.addColorStop(0, '#87CEEB');
        gradient.addColorStop(0.7, '#98FB98');
        gradient.addColorStop(1, '#228B22');
        ctx.fillStyle = gradient;
        ctx.fillRect(-camera.x, -camera.y, 2048, 576);
    }
    
    static drawCloud(ctx, x, y, size = 30) {
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.arc(x + size * 0.8, y, size * 1.2, 0, Math.PI * 2);
        ctx.arc(x + size * 1.6, y, size, 0, Math.PI * 2);
        ctx.arc(x + size * 0.8, y - size * 0.7, size * 0.8, 0, Math.PI * 2);
        ctx.fill();
    }
    
    // Level geçiş animasyonu
    static showLevelTransition(ctx, levelNumber, progress = 0) {
        const level = this.getLevel(levelNumber);
        
        // Yarı saydam overlay
        ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
        ctx.fillRect(0, 0, 1024, 576);
        
        // Level başlığı
        ctx.fillStyle = '#FFD700';
        ctx.font = 'bold 32px "Press Start 2P"';
        ctx.textAlign = 'center';
        ctx.fillText(`LEVEL ${levelNumber}`, 512, 200);
        
        // Level adı
        ctx.fillStyle = '#FFFFFF';
        ctx.font = '20px "Press Start 2P"';
        ctx.fillText(level.name, 512, 250);
        
        // Açıklama
        ctx.font = '14px "Press Start 2P"';
        ctx.fillStyle = '#CCCCCC';
        const words = level.description.split(' ');
        let line = '';
        let y = 300;
        words.forEach(word => {
            const testLine = line + word + ' ';
            const metrics = ctx.measureText(testLine);
            if (metrics.width > 600 && line !== '') {
                ctx.fillText(line, 512, y);
                line = word + ' ';
                y += 25;
            } else {
                line = testLine;
            }
        });
        ctx.fillText(line, 512, y);
        
        // Yükleme çubuğu
        if (progress > 0) {
            const barWidth = 400;
            const barHeight = 20;
            const barX = 312;
            const barY = 400;
            
            ctx.fillStyle = '#333';
            ctx.fillRect(barX, barY, barWidth, barHeight);
            
            ctx.fillStyle = '#FF69B4';
            ctx.fillRect(barX, barY, barWidth * progress, barHeight);
            
            ctx.strokeStyle = '#FFF';
            ctx.strokeRect(barX, barY, barWidth, barHeight);
            
            ctx.fillStyle = '#FFF';
            ctx.font = '12px "Press Start 2P"';
            ctx.fillText('Yükleniyor...', 512, 440);
        }
    }
} 