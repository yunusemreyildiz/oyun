// Ses Yöneticisi
class AudioManager {
    constructor() {
        this.audioContext = null;
        this.sounds = {};
        this.musicVolume = 0.3;
        this.soundVolume = 0.5;
        this.isMuted = false;
        this.backgroundMusic = null;
        this.currentTrack = null;
        
        // Ses verilerini yükle
        this.initializeAudio();
        this.generateSounds();
    }
    
    async initializeAudio() {
        try {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        } catch (e) {
            console.warn('Web Audio API desteklenmiyor:', e);
        }
    }
    
    // Procedural ses efektleri oluştur (sprite'lar olmadığı için)
    generateSounds() {
        if (!this.audioContext) return;
        
        this.sounds = {
            jump: this.generateJumpSound(),
            collect: this.generateCollectSound(),
            enemyKill: this.generateEnemyKillSound(),
            damage: this.generateDamageSound(),
            victory: this.generateVictorySound(),
            gameComplete: this.generateGameCompleteSound()
        };
    }
    
    generateJumpSound() {
        return () => {
            if (!this.audioContext || this.isMuted) return;
            
            const oscillator = this.audioContext.createOscillator();
            const gainNode = this.audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(this.audioContext.destination);
            
            oscillator.frequency.setValueAtTime(300, this.audioContext.currentTime);
            oscillator.frequency.exponentialRampToValueAtTime(600, this.audioContext.currentTime + 0.1);
            oscillator.frequency.exponentialRampToValueAtTime(200, this.audioContext.currentTime + 0.2);
            
            gainNode.gain.setValueAtTime(this.soundVolume * 0.3, this.audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.2);
            
            oscillator.type = 'square';
            oscillator.start(this.audioContext.currentTime);
            oscillator.stop(this.audioContext.currentTime + 0.2);
        };
    }
    
    generateCollectSound() {
        return () => {
            if (!this.audioContext || this.isMuted) return;
            
            const oscillator = this.audioContext.createOscillator();
            const gainNode = this.audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(this.audioContext.destination);
            
            oscillator.frequency.setValueAtTime(400, this.audioContext.currentTime);
            oscillator.frequency.exponentialRampToValueAtTime(800, this.audioContext.currentTime + 0.1);
            oscillator.frequency.exponentialRampToValueAtTime(1200, this.audioContext.currentTime + 0.15);
            
            gainNode.gain.setValueAtTime(this.soundVolume * 0.4, this.audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.3);
            
            oscillator.type = 'sine';
            oscillator.start(this.audioContext.currentTime);
            oscillator.stop(this.audioContext.currentTime + 0.3);
        };
    }
    
    generateEnemyKillSound() {
        return () => {
            if (!this.audioContext || this.isMuted) return;
            
            const oscillator = this.audioContext.createOscillator();
            const gainNode = this.audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(this.audioContext.destination);
            
            oscillator.frequency.setValueAtTime(200, this.audioContext.currentTime);
            oscillator.frequency.exponentialRampToValueAtTime(50, this.audioContext.currentTime + 0.3);
            
            gainNode.gain.setValueAtTime(this.soundVolume * 0.5, this.audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.3);
            
            oscillator.type = 'sawtooth';
            oscillator.start(this.audioContext.currentTime);
            oscillator.stop(this.audioContext.currentTime + 0.3);
        };
    }
    
    generateDamageSound() {
        return () => {
            if (!this.audioContext || this.isMuted) return;
            
            const oscillator = this.audioContext.createOscillator();
            const gainNode = this.audioContext.createGain();
            const filter = this.audioContext.createBiquadFilter();
            
            oscillator.connect(filter);
            filter.connect(gainNode);
            gainNode.connect(this.audioContext.destination);
            
            oscillator.frequency.setValueAtTime(150, this.audioContext.currentTime);
            filter.frequency.setValueAtTime(500, this.audioContext.currentTime);
            filter.Q.setValueAtTime(30, this.audioContext.currentTime);
            
            gainNode.gain.setValueAtTime(this.soundVolume * 0.6, this.audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.5);
            
            oscillator.type = 'square';
            oscillator.start(this.audioContext.currentTime);
            oscillator.stop(this.audioContext.currentTime + 0.5);
        };
    }
    
    generateVictorySound() {
        return () => {
            if (!this.audioContext || this.isMuted) return;
            
            // Melodik victory sound
            const frequencies = [261.63, 329.63, 392.00, 523.25]; // C, E, G, C oktav
            
            frequencies.forEach((freq, index) => {
                const oscillator = this.audioContext.createOscillator();
                const gainNode = this.audioContext.createGain();
                
                oscillator.connect(gainNode);
                gainNode.connect(this.audioContext.destination);
                
                oscillator.frequency.setValueAtTime(freq, this.audioContext.currentTime + index * 0.15);
                gainNode.gain.setValueAtTime(this.soundVolume * 0.4, this.audioContext.currentTime + index * 0.15);
                gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + index * 0.15 + 0.3);
                
                oscillator.type = 'triangle';
                oscillator.start(this.audioContext.currentTime + index * 0.15);
                oscillator.stop(this.audioContext.currentTime + index * 0.15 + 0.3);
            });
        };
    }
    
    generateGameCompleteSound() {
        return () => {
            if (!this.audioContext || this.isMuted) return;
            
            // Epic finale sound
            const sequence = [
                { freq: 261.63, time: 0.0 },
                { freq: 329.63, time: 0.2 },
                { freq: 392.00, time: 0.4 },
                { freq: 523.25, time: 0.6 },
                { freq: 659.25, time: 0.8 },
                { freq: 783.99, time: 1.0 },
                { freq: 1046.50, time: 1.2 }
            ];
            
            sequence.forEach(note => {
                const oscillator = this.audioContext.createOscillator();
                const gainNode = this.audioContext.createGain();
                
                oscillator.connect(gainNode);
                gainNode.connect(this.audioContext.destination);
                
                oscillator.frequency.setValueAtTime(note.freq, this.audioContext.currentTime + note.time);
                gainNode.gain.setValueAtTime(this.soundVolume * 0.5, this.audioContext.currentTime + note.time);
                gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + note.time + 0.4);
                
                oscillator.type = 'sine';
                oscillator.start(this.audioContext.currentTime + note.time);
                oscillator.stop(this.audioContext.currentTime + note.time + 0.4);
            });
        };
    }
    
    playSound(soundName) {
        if (this.sounds[soundName] && !this.isMuted) {
            this.sounds[soundName]();
        }
    }
    
    playBackgroundMusic() {
        if (!this.audioContext || this.isMuted) return;
        
        this.stopBackgroundMusic();
        this.generateBackgroundMusic();
    }
    
    generateBackgroundMusic() {
        if (!this.audioContext) return;
        
        // Basit arka plan müziği - sürekli döngü
        const playMelody = () => {
            if (this.isMuted) return;
            
            const melody = [
                { freq: 261.63, duration: 0.5 }, // C
                { freq: 293.66, duration: 0.5 }, // D
                { freq: 329.63, duration: 0.5 }, // E
                { freq: 261.63, duration: 0.5 }, // C
                { freq: 392.00, duration: 1.0 }, // G
                { freq: 329.63, duration: 1.0 }, // E
                { freq: 261.63, duration: 0.5 }, // C
                { freq: 293.66, duration: 0.5 }, // D
                { freq: 329.63, duration: 0.5 }, // E
                { freq: 261.63, duration: 0.5 }, // C
                { freq: 349.23, duration: 1.0 }, // F
                { freq: 392.00, duration: 1.0 }  // G
            ];
            
            let currentTime = 0;
            melody.forEach(note => {
                const oscillator = this.audioContext.createOscillator();
                const gainNode = this.audioContext.createGain();
                
                oscillator.connect(gainNode);
                gainNode.connect(this.audioContext.destination);
                
                oscillator.frequency.setValueAtTime(note.freq, this.audioContext.currentTime + currentTime);
                gainNode.gain.setValueAtTime(this.musicVolume * 0.1, this.audioContext.currentTime + currentTime);
                gainNode.gain.setValueAtTime(this.musicVolume * 0.1, this.audioContext.currentTime + currentTime + note.duration - 0.1);
                gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + currentTime + note.duration);
                
                oscillator.type = 'triangle';
                oscillator.start(this.audioContext.currentTime + currentTime);
                oscillator.stop(this.audioContext.currentTime + currentTime + note.duration);
                
                currentTime += note.duration;
            });
            
            // 8 saniye sonra tekrarla
            this.musicTimeout = setTimeout(playMelody, 8000);
        };
        
        playMelody();
    }
    
    stopBackgroundMusic() {
        if (this.musicTimeout) {
            clearTimeout(this.musicTimeout);
            this.musicTimeout = null;
        }
    }
    
    setMusicVolume(volume) {
        this.musicVolume = Math.max(0, Math.min(1, volume));
    }
    
    setSoundVolume(volume) {
        this.soundVolume = Math.max(0, Math.min(1, volume));
    }
    
    toggleMute() {
        this.isMuted = !this.isMuted;
        if (this.isMuted) {
            this.stopBackgroundMusic();
        } else {
            this.playBackgroundMusic();
        }
        return this.isMuted;
    }
    
    // Romantik ses efektleri
    playHeartbeat() {
        if (!this.audioContext || this.isMuted) return;
        
        const beatPattern = [0, 0.1, 0.6, 0.7]; // Kalp atışı ritmi
        
        beatPattern.forEach(timing => {
            const oscillator = this.audioContext.createOscillator();
            const gainNode = this.audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(this.audioContext.destination);
            
            oscillator.frequency.setValueAtTime(60, this.audioContext.currentTime + timing);
            gainNode.gain.setValueAtTime(this.soundVolume * 0.2, this.audioContext.currentTime + timing);
            gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + timing + 0.1);
            
            oscillator.type = 'sine';
            oscillator.start(this.audioContext.currentTime + timing);
            oscillator.stop(this.audioContext.currentTime + timing + 0.1);
        });
    }
    
    playLoveSound() {
        if (!this.audioContext || this.isMuted) return;
        
        // Romantik arpej
        const loveChord = [261.63, 329.63, 392.00, 523.25, 659.25]; // C major arpeggio
        
        loveChord.forEach((freq, index) => {
            const oscillator = this.audioContext.createOscillator();
            const gainNode = this.audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(this.audioContext.destination);
            
            oscillator.frequency.setValueAtTime(freq, this.audioContext.currentTime + index * 0.1);
            gainNode.gain.setValueAtTime(this.soundVolume * 0.3, this.audioContext.currentTime + index * 0.1);
            gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + index * 0.1 + 1.0);
            
            oscillator.type = 'sine';
            oscillator.start(this.audioContext.currentTime + index * 0.1);
            oscillator.stop(this.audioContext.currentTime + index * 0.1 + 1.0);
        });
    }
    
    // Level temalarına göre müzik
    playLevelMusic(levelNumber) {
        this.stopBackgroundMusic();
        
        switch (levelNumber) {
            case 1:
                this.playSchoolMusic();
                break;
            case 2:
                this.playDigitalMusic();
                break;
            case 3:
                this.playRomanceMusic();
                break;
            default:
                this.playBackgroundMusic();
        }
    }
    
    playSchoolMusic() {
        // Nostaljik okul müziği
        if (!this.audioContext || this.isMuted) return;
        
        const playSchoolMelody = () => {
            const schoolMelody = [
                { freq: 392.00, duration: 0.4 }, // G
                { freq: 440.00, duration: 0.4 }, // A
                { freq: 392.00, duration: 0.4 }, // G
                { freq: 329.63, duration: 0.4 }, // E
                { freq: 293.66, duration: 0.8 }, // D
                { freq: 329.63, duration: 0.4 }, // E
                { freq: 392.00, duration: 0.8 }  // G
            ];
            
            let currentTime = 0;
            schoolMelody.forEach(note => {
                const oscillator = this.audioContext.createOscillator();
                const gainNode = this.audioContext.createGain();
                
                oscillator.connect(gainNode);
                gainNode.connect(this.audioContext.destination);
                
                oscillator.frequency.setValueAtTime(note.freq, this.audioContext.currentTime + currentTime);
                gainNode.gain.setValueAtTime(this.musicVolume * 0.08, this.audioContext.currentTime + currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + currentTime + note.duration);
                
                oscillator.type = 'square';
                oscillator.start(this.audioContext.currentTime + currentTime);
                oscillator.stop(this.audioContext.currentTime + currentTime + note.duration);
                
                currentTime += note.duration;
            });
            
            this.musicTimeout = setTimeout(playSchoolMelody, 4000);
        };
        
        playSchoolMelody();
    }
    
    playDigitalMusic() {
        // Elektronik müzik
        if (!this.audioContext || this.isMuted) return;
        
        const playDigitalBeat = () => {
            // Basit elektronik beat
            for (let i = 0; i < 8; i++) {
                const oscillator = this.audioContext.createOscillator();
                const gainNode = this.audioContext.createGain();
                const filter = this.audioContext.createBiquadFilter();
                
                oscillator.connect(filter);
                filter.connect(gainNode);
                gainNode.connect(this.audioContext.destination);
                
                oscillator.frequency.setValueAtTime(80 + (i % 2) * 40, this.audioContext.currentTime + i * 0.25);
                filter.frequency.setValueAtTime(1000 + Math.sin(i) * 500, this.audioContext.currentTime + i * 0.25);
                gainNode.gain.setValueAtTime(this.musicVolume * 0.1, this.audioContext.currentTime + i * 0.25);
                gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + i * 0.25 + 0.2);
                
                oscillator.type = 'sawtooth';
                oscillator.start(this.audioContext.currentTime + i * 0.25);
                oscillator.stop(this.audioContext.currentTime + i * 0.25 + 0.2);
            }
            
            this.musicTimeout = setTimeout(playDigitalBeat, 2000);
        };
        
        playDigitalBeat();
    }
    
    playRomanceMusic() {
        // Romantik müzik
        if (!this.audioContext || this.isMuted) return;
        
        const playRomanceMelody = () => {
            const romanceMelody = [
                { freq: 523.25, duration: 1.0 }, // C5
                { freq: 493.88, duration: 0.5 }, // B4
                { freq: 440.00, duration: 0.5 }, // A4
                { freq: 392.00, duration: 1.0 }, // G4
                { freq: 329.63, duration: 1.0 }, // E4
                { freq: 392.00, duration: 0.5 }, // G4
                { freq: 440.00, duration: 0.5 }, // A4
                { freq: 523.25, duration: 2.0 }  // C5
            ];
            
            let currentTime = 0;
            romanceMelody.forEach(note => {
                const oscillator = this.audioContext.createOscillator();
                const gainNode = this.audioContext.createGain();
                
                oscillator.connect(gainNode);
                gainNode.connect(this.audioContext.destination);
                
                oscillator.frequency.setValueAtTime(note.freq, this.audioContext.currentTime + currentTime);
                gainNode.gain.setValueAtTime(0, this.audioContext.currentTime + currentTime);
                gainNode.gain.linearRampToValueAtTime(this.musicVolume * 0.15, this.audioContext.currentTime + currentTime + 0.1);
                gainNode.gain.setValueAtTime(this.musicVolume * 0.15, this.audioContext.currentTime + currentTime + note.duration - 0.1);
                gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + currentTime + note.duration);
                
                oscillator.type = 'sine';
                oscillator.start(this.audioContext.currentTime + currentTime);
                oscillator.stop(this.audioContext.currentTime + currentTime + note.duration);
                
                currentTime += note.duration;
            });
            
            this.musicTimeout = setTimeout(playRomanceMelody, 7000);
        };
        
        playRomanceMelody();
    }
} 