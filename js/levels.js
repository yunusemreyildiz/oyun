// Level Yöneticisi
class LevelManager {
    static levels = {
        1: {
            name: "Okul Bahçesinde İlk Görüş",
            description: "Teneffüs zili çaldı! Yunus bahçeye iniyor ve hayatını değiştirecek görüşle karşılaşacak...",
            theme: "school_garden",
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
            name: "Adını Öğrenme Mücadelesi",
            description: "Yunus arkadaşlarına soruyor: 'O kız kim?' Sonunda bir arkadaşı tanıyor ve adını öğreniyor...",
            theme: "school_corridor",
            playerStart: { x: 50, y: 400 },
            goal: { x: 1870, y: 340 },
            platforms: [
                // Ana zemin - okul koridoru
                { x: 0, y: 450, width: 300, height: 50, type: 'stone' },
                { x: 350, y: 450, width: 200, height: 50, type: 'stone' },
                { x: 600, y: 450, width: 250, height: 50, type: 'stone' },
                { x: 900, y: 450, width: 200, height: 50, type: 'stone' },
                { x: 1150, y: 450, width: 250, height: 50, type: 'stone' },
                { x: 1450, y: 450, width: 200, height: 50, type: 'stone' },
                { x: 1700, y: 450, width: 300, height: 50, type: 'stone' },
                
                // Ara platformlar (öğrenci masaları/sıralar)
                { x: 200, y: 380, width: 100, height: 20, type: 'stone' },
                { x: 400, y: 350, width: 100, height: 20, type: 'stone' },
                { x: 650, y: 380, width: 100, height: 20, type: 'stone' },
                { x: 850, y: 350, width: 100, height: 20, type: 'stone' },
                { x: 1000, y: 380, width: 100, height: 20, type: 'stone' },
                { x: 1200, y: 350, width: 100, height: 20, type: 'stone' },
                { x: 1400, y: 380, width: 100, height: 20, type: 'stone' },
                { x: 1600, y: 350, width: 100, height: 20, type: 'stone' },
                
                // Hale'ye ulaşım platformları (basamaklı çıkış)
                { x: 1650, y: 400, width: 80, height: 20, type: 'stone' },
                { x: 1750, y: 380, width: 80, height: 20, type: 'stone' },
                { x: 1850, y: 360, width: 100, height: 20, type: 'stone' }, // Hale'nin bulunduğu platform
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
            name: "Utangaçlığın Zaferi",
            description: "Yunus sosyal medyada Hale'yi buldu ama... Utangaçlık kazandı, istek atamadı.",
            theme: "social_fear",
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
         },
         
         4: {
             name: "Seneler Sonra: Yazılım Mühendisi Yunus",
             description: "Lise bitti, üniversite bitti... Yunus artık yazılım mühendisi! Ama Hale...",
             theme: "office",
             playerStart: { x: 50, y: 400 },
             goal: { x: 1600, y: 150 },
             platforms: [
                 // Ofis ortamı
                 { x: 0, y: 450, width: 200, height: 50, type: 'stone' },
                 { x: 250, y: 450, width: 200, height: 50, type: 'stone' },
                 { x: 500, y: 400, width: 150, height: 20, type: 'stone' }, // Masa
                 { x: 700, y: 450, width: 200, height: 50, type: 'stone' },
                 { x: 950, y: 350, width: 100, height: 20, type: 'stone' }, // Üst kat
                 { x: 1100, y: 300, width: 150, height: 20, type: 'stone' },
                 { x: 1300, y: 250, width: 100, height: 20, type: 'stone' },
                 { x: 1500, y: 150, width: 200, height: 30, type: 'stone' }, // Yunus'un masası
             ],
             enemies: [
                 { x: 300, y: 420, type: 'deadline' },
                 { x: 600, y: 420, type: 'bug' },
                 { x: 800, y: 420, type: 'meeting' },
             ],
             collectibles: [
                 { x: 150, y: 420, type: 'coffee' },
                 { x: 530, y: 370, type: 'code' },
                 { x: 980, y: 320, type: 'promotion' },
                 { x: 1130, y: 270, type: 'salary' },
                 { x: 1330, y: 220, type: 'experience' },
             ]
         },
         
         5: {
             name: "Sosyal Medyada Yeniden Keşif",
             description: "Yunus tesadüfen Hale'nin hesabını görür ve bu sefer... Takip eder!",
             theme: "social_media",
             playerStart: { x: 50, y: 400 },
             goal: { x: 1800, y: 200 },
             platforms: [
                 // Dijital dünya
                 { x: 0, y: 450, width: 150, height: 50, type: 'cloud' },
                 { x: 200, y: 400, width: 100, height: 20, type: 'cloud' },
                 { x: 350, y: 350, width: 100, height: 20, type: 'cloud' },
                 { x: 500, y: 300, width: 100, height: 20, type: 'cloud' },
                 { x: 650, y: 250, width: 100, height: 20, type: 'cloud' },
                 { x: 800, y: 200, width: 100, height: 20, type: 'cloud' },
                 { x: 950, y: 250, width: 100, height: 20, type: 'cloud' },
                 { x: 1100, y: 300, width: 100, height: 20, type: 'cloud' },
                 { x: 1250, y: 250, width: 100, height: 20, type: 'cloud' },
                 { x: 1400, y: 200, width: 100, height: 20, type: 'cloud' },
                 { x: 1750, y: 200, width: 150, height: 30, type: 'cloud' }, // Hale'nin profili
             ],
             enemies: [
                 { x: 250, y: 420, type: 'hesitation' },
                 { x: 400, y: 370, type: 'doubt' },
                 { x: 550, y: 320, type: 'fear' },
             ],
             collectibles: [
                 { x: 100, y: 420, type: 'courage' },
                 { x: 230, y: 370, type: 'hope' },
                 { x: 380, y: 320, type: 'memory' },
                 { x: 530, y: 270, type: 'recognition' },
                 { x: 680, y: 220, type: 'excitement' },
                 { x: 830, y: 170, type: 'butterflies' },
                 { x: 1780, y: 170, type: 'follow_button' },
             ]
         },
         
         6: {
             name: "İlk Konuşmalar ve Trabzon Keşfi",
             description: "Yunus ve Hale konuşmaya başladı! Trabzon tesadüfü de cabası...",
             theme: "chat",
             playerStart: { x: 50, y: 400 },
             goal: { x: 1700, y: 100 },
             platforms: [
                 // Chat baloncukları şeklinde platformlar
                 { x: 0, y: 450, width: 200, height: 50, type: 'grass' },
                 { x: 250, y: 380, width: 120, height: 30, type: 'cloud' }, // Mesaj balonu
                 { x: 420, y: 320, width: 100, height: 25, type: 'cloud' },
                 { x: 570, y: 280, width: 130, height: 35, type: 'cloud' },
                 { x: 750, y: 240, width: 110, height: 30, type: 'cloud' },
                 { x: 910, y: 200, width: 140, height: 35, type: 'cloud' },
                 { x: 1100, y: 160, width: 120, height: 30, type: 'cloud' },
                 { x: 1270, y: 120, width: 100, height: 25, type: 'cloud' },
                 { x: 1650, y: 100, width: 150, height: 40, type: 'cloud' }, // Trabzon
             ],
             enemies: [
                 { x: 300, y: 420, type: 'awkwardness' },
                 { x: 500, y: 420, type: 'misunderstanding' },
             ],
             collectibles: [
                 { x: 120, y: 420, type: 'hello' },
                 { x: 280, y: 350, type: 'smile' },
                 { x: 450, y: 290, type: 'laugh' },
                 { x: 600, y: 250, type: 'connection' },
                 { x: 780, y: 210, type: 'trabzon_flag' },
                 { x: 940, y: 170, type: 'coincidence' },
                 { x: 1130, y: 130, type: 'roots' },
                 { x: 1680, y: 70, type: 'destiny' },
             ]
         },
         
         7: {
             name: "Kıskançlık Krizi",
             description: "Hale'nin hesabındaki erkekler... Yunus mesafe koyuyor. Kıskançlık galip geldi.",
             theme: "jealousy",
             playerStart: { x: 50, y: 400 },
             goal: { x: 1600, y: 300 },
             platforms: [
                 // Karanlık, kıskançlık temalı
                 { x: 0, y: 450, width: 200, height: 50, type: 'stone' },
                 { x: 300, y: 400, width: 100, height: 20, type: 'stone' },
                 { x: 500, y: 350, width: 100, height: 20, type: 'stone' },
                 { x: 700, y: 400, width: 100, height: 20, type: 'stone' },
                 { x: 900, y: 350, width: 100, height: 20, type: 'stone' },
                 { x: 1100, y: 300, width: 100, height: 20, type: 'stone' },
                 { x: 1300, y: 350, width: 100, height: 20, type: 'stone' },
                 { x: 1550, y: 300, width: 150, height: 30, type: 'stone' },
             ],
             enemies: [
                 { x: 250, y: 420, type: 'rival1' },
                 { x: 450, y: 420, type: 'rival2' },
                 { x: 650, y: 420, type: 'rival3' },
                 { x: 850, y: 420, type: 'rival4' },
                 { x: 1050, y: 420, type: 'rival5' },
             ],
             collectibles: [
                 { x: 150, y: 420, type: 'sadness' },
                 { x: 330, y: 370, type: 'distance' },
                 { x: 530, y: 320, type: 'cold_shoulder' },
                 { x: 730, y: 370, type: 'jealous_thoughts' },
                 { x: 930, y: 320, type: 'overthinking' },
             ]
         },
         
         8: {
             name: "Hacker Yunus: Gerçekleri Keşfetme",
             description: "Yunus çıldırdı! Tüm erkekleri hackliyor. Niyetlerini öğrenmeye kararlı...",
             theme: "hacker",
             playerStart: { x: 50, y: 400 },
             goal: { x: 1800, y: 100 },
             platforms: [
                 // Matrix/hacker teması
                 { x: 0, y: 450, width: 150, height: 50, type: 'stone' },
                 { x: 200, y: 400, width: 80, height: 15, type: 'cloud' }, // Terminal
                 { x: 320, y: 350, width: 80, height: 15, type: 'cloud' },
                 { x: 450, y: 300, width: 80, height: 15, type: 'cloud' },
                 { x: 580, y: 250, width: 80, height: 15, type: 'cloud' },
                 { x: 710, y: 200, width: 80, height: 15, type: 'cloud' },
                 { x: 840, y: 250, width: 80, height: 15, type: 'cloud' },
                 { x: 970, y: 300, width: 80, height: 15, type: 'cloud' },
                 { x: 1100, y: 250, width: 80, height: 15, type: 'cloud' },
                 { x: 1230, y: 200, width: 80, height: 15, type: 'cloud' },
                 { x: 1360, y: 150, width: 80, height: 15, type: 'cloud' },
                 { x: 1750, y: 100, width: 150, height: 30, type: 'cloud' }, // Son hack
             ],
             enemies: [
                 { x: 180, y: 420, type: 'firewall' },
                 { x: 350, y: 420, type: 'antivirus' },
                 { x: 520, y: 420, type: 'encryption' },
                 { x: 690, y: 420, type: 'security' },
             ],
             collectibles: [
                 { x: 230, y: 370, type: 'password1' },
                 { x: 350, y: 320, type: 'password2' },
                 { x: 480, y: 270, type: 'password3' },
                 { x: 610, y: 220, type: 'secret1' },
                 { x: 740, y: 170, type: 'secret2' },
                 { x: 870, y: 220, type: 'truth1' },
                 { x: 1000, y: 270, type: 'truth2' },
                 { x: 1130, y: 220, type: 'evidence' },
                 { x: 1780, y: 70, type: 'final_truth' },
             ]
         },
         
         9: {
             name: "Hale'nin Geri Dönüşü",
             description: "Hacklemeler bitti! Hale ulaşmak için Yunus'a yazıyor. Umut yeniden doğuyor...",
             theme: "hope",
             playerStart: { x: 50, y: 400 },
             goal: { x: 1600, y: 200 },
             platforms: [
                 // Umut ve ışık teması
                 { x: 0, y: 450, width: 200, height: 50, type: 'grass' },
                 { x: 250, y: 400, width: 100, height: 20, type: 'cloud' },
                 { x: 400, y: 350, width: 100, height: 20, type: 'cloud' },
                 { x: 550, y: 300, width: 100, height: 20, type: 'cloud' },
                 { x: 700, y: 250, width: 100, height: 20, type: 'cloud' },
                 { x: 850, y: 300, width: 100, height: 20, type: 'cloud' },
                 { x: 1000, y: 250, width: 100, height: 20, type: 'cloud' },
                 { x: 1150, y: 200, width: 100, height: 20, type: 'cloud' },
                 { x: 1550, y: 200, width: 150, height: 30, type: 'cloud' }, // Mesaj kutusu
             ],
             enemies: [
                 { x: 200, y: 420, type: 'doubt' },
                 { x: 400, y: 420, type: 'confusion' },
             ],
             collectibles: [
                 { x: 120, y: 420, type: 'notification' },
                 { x: 280, y: 370, type: 'surprise' },
                 { x: 430, y: 320, type: 'curiosity' },
                 { x: 580, y: 270, type: 'excitement' },
                 { x: 730, y: 220, type: 'relief' },
                 { x: 880, y: 270, type: 'happiness' },
                 { x: 1030, y: 220, type: 'hope' },
                 { x: 1580, y: 170, type: 'message' },
             ]
         },
         
         10: {
             name: "Yeniden Konuşmalar",
             description: "Yunus ve Hale tekrar konuşuyor ama Yunus hala kıskançlık duygularıyla savaşıyor...",
             theme: "talking",
             playerStart: { x: 50, y: 400 },
             goal: { x: 1700, y: 150 },
             platforms: [
                 // İkili konuşma teması
                 { x: 0, y: 450, width: 180, height: 50, type: 'grass' },
                 { x: 230, y: 400, width: 120, height: 20, type: 'cloud' },
                 { x: 400, y: 350, width: 100, height: 20, type: 'cloud' },
                 { x: 550, y: 300, width: 120, height: 20, type: 'cloud' },
                 { x: 720, y: 250, width: 100, height: 20, type: 'cloud' },
                 { x: 870, y: 300, width: 120, height: 20, type: 'cloud' },
                 { x: 1040, y: 250, width: 100, height: 20, type: 'cloud' },
                 { x: 1190, y: 200, width: 120, height: 20, type: 'cloud' },
                 { x: 1650, y: 150, width: 150, height: 30, type: 'cloud' },
             ],
             enemies: [
                 { x: 280, y: 420, type: 'male_friend1' },
                 { x: 500, y: 420, type: 'male_friend2' },
                 { x: 720, y: 420, type: 'male_friend3' },
             ],
             collectibles: [
                 { x: 140, y: 420, type: 'careful_words' },
                 { x: 260, y: 370, type: 'patience' },
                 { x: 430, y: 320, type: 'understanding' },
                 { x: 580, y: 270, type: 'concern' },
                 { x: 750, y: 220, type: 'jealousy_control' },
                 { x: 900, y: 270, type: 'trust' },
                 { x: 1070, y: 220, type: 'communication' },
                 { x: 1680, y: 120, type: 'progress' },
             ]
         },
         
         11: {
             name: "Çıldırma Anı: Baş Başa Buluşma",
             description: "Hale bir erkek arkadaşıyla buluştu! Yunus çığlıklar atıyor, öfke nöbeti geçiriyor!",
             theme: "rage",
             playerStart: { x: 50, y: 400 },
             goal: { x: 1600, y: 300 },
             platforms: [
                 // Kaos ve öfke teması
                 { x: 0, y: 450, width: 150, height: 50, type: 'stone' },
                 { x: 200, y: 400, width: 80, height: 20, type: 'stone' },
                 { x: 330, y: 350, width: 80, height: 20, type: 'stone' },
                 { x: 460, y: 400, width: 80, height: 20, type: 'stone' },
                 { x: 590, y: 350, width: 80, height: 20, type: 'stone' },
                 { x: 720, y: 300, width: 80, height: 20, type: 'stone' },
                 { x: 850, y: 350, width: 80, height: 20, type: 'stone' },
                 { x: 980, y: 300, width: 80, height: 20, type: 'stone' },
                 { x: 1110, y: 350, width: 80, height: 20, type: 'stone' },
                 { x: 1240, y: 300, width: 80, height: 20, type: 'stone' },
                 { x: 1550, y: 300, width: 150, height: 30, type: 'stone' },
             ],
             enemies: [
                 { x: 180, y: 420, type: 'rage' },
                 { x: 310, y: 420, type: 'anger' },
                 { x: 440, y: 420, type: 'fury' },
                 { x: 570, y: 420, type: 'jealousy' },
                 { x: 700, y: 420, type: 'despair' },
                 { x: 830, y: 420, type: 'madness' },
             ],
             collectibles: [
                 { x: 120, y: 420, type: 'shock' },
                 { x: 230, y: 370, type: 'disbelief' },
                 { x: 360, y: 320, type: 'pain' },
                 { x: 490, y: 370, type: 'scream' },
                 { x: 620, y: 320, type: 'tears' },
                 { x: 750, y: 270, type: 'breakdown' },
                 { x: 880, y: 320, type: 'chaos' },
                 { x: 1580, y: 270, type: 'exhaustion' },
             ]
         },
         
         12: {
             name: "İtiraf ve Sevgili Olma",
             description: "Hale: 'Net olmadığın için değiştirebileceğin biri değilsin!' Yunus itiraf ediyor ve sevgili oluyorlar!",
             theme: "confession",
             playerStart: { x: 50, y: 400 },
             goal: { x: 1800, y: 100 },
             platforms: [
                 // Romantik itiraf sahnelik
                 { x: 0, y: 450, width: 200, height: 50, type: 'grass' },
                 { x: 250, y: 400, width: 100, height: 20, type: 'cloud' },
                 { x: 400, y: 350, width: 100, height: 20, type: 'cloud' },
                 { x: 550, y: 300, width: 100, height: 20, type: 'cloud' },
                 { x: 700, y: 250, width: 100, height: 20, type: 'cloud' },
                 { x: 850, y: 200, width: 100, height: 20, type: 'cloud' },
                 { x: 1000, y: 150, width: 100, height: 20, type: 'cloud' },
                 { x: 1150, y: 200, width: 100, height: 20, type: 'cloud' },
                 { x: 1300, y: 150, width: 100, height: 20, type: 'cloud' },
                 { x: 1450, y: 100, width: 100, height: 20, type: 'cloud' },
                 { x: 1750, y: 100, width: 150, height: 40, type: 'cloud' }, // Birlikte
             ],
             enemies: [
                 { x: 200, y: 420, type: 'fear_of_rejection' },
                 { x: 400, y: 420, type: 'hesitation' },
             ],
             collectibles: [
                 { x: 120, y: 420, type: 'courage' },
                 { x: 280, y: 370, type: 'honesty' },
                 { x: 430, y: 320, type: 'truth' },
                 { x: 580, y: 270, type: 'vulnerability' },
                 { x: 730, y: 220, type: 'confession' },
                 { x: 880, y: 170, type: 'acceptance' },
                 { x: 1030, y: 120, type: 'love' },
                 { x: 1180, y: 170, type: 'commitment' },
                 { x: 1330, y: 120, type: 'relationship' },
                 { x: 1480, y: 70, type: 'happiness' },
                 { x: 1780, y: 70, type: 'together' },
             ]
         },
         
         13: {
             name: "Trabzon Seyahati: Aşkın Zaferi",
             description: "Hale okula döndü ama Yunus uçakla Trabzon'a gidiyor! Harika vakit geçirecekler!",
             theme: "trabzon",
             playerStart: { x: 50, y: 400 },
             goal: { x: 1900, y: 100 },
             platforms: [
                 // Trabzon manzarası ve uçuş
                 { x: 0, y: 450, width: 200, height: 50, type: 'grass' },
                 { x: 250, y: 400, width: 100, height: 20, type: 'cloud' }, // Uçak
                 { x: 400, y: 350, width: 100, height: 20, type: 'cloud' },
                 { x: 550, y: 300, width: 100, height: 20, type: 'cloud' },
                 { x: 700, y: 250, width: 100, height: 20, type: 'cloud' },
                 { x: 850, y: 200, width: 100, height: 20, type: 'cloud' },
                 { x: 1000, y: 150, width: 100, height: 20, type: 'cloud' },
                 { x: 1150, y: 200, width: 100, height: 20, type: 'grass' }, // Trabzon'a iniş
                 { x: 1300, y: 250, width: 100, height: 20, type: 'grass' },
                 { x: 1450, y: 200, width: 100, height: 20, type: 'grass' },
                 { x: 1600, y: 150, width: 100, height: 20, type: 'grass' },
                 { x: 1750, y: 100, width: 200, height: 50, type: 'grass' }, // Birlikte Trabzon'da
             ],
             enemies: [
                 { x: 300, y: 420, type: 'distance' },
                 { x: 500, y: 420, type: 'separation_anxiety' },
             ],
             collectibles: [
                 { x: 120, y: 420, type: 'plane_ticket' },
                 { x: 280, y: 370, type: 'excitement' },
                 { x: 430, y: 320, type: 'clouds' },
                 { x: 580, y: 270, type: 'journey' },
                 { x: 730, y: 220, type: 'arrival' },
                 { x: 880, y: 170, type: 'surprise' },
                 { x: 1030, y: 120, type: 'reunion' },
                 { x: 1180, y: 170, type: 'trabzon_flag' },
                 { x: 1330, y: 220, type: 'hamsi' }, // Trabzon balığı
                 { x: 1480, y: 170, type: 'hazelnut' }, // Fındık
                 { x: 1630, y: 120, type: 'ayasofya' }, // Trabzon Ayasofya
                 { x: 1780, y: 70, type: 'love_victory' },
                 { x: 1850, y: 70, type: 'happy_ending' },
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
            case 'school_garden':
                this.renderSchoolGardenBackground(ctx, camera);
                break;
            case 'school_corridor':
                this.renderSchoolCorridorBackground(ctx, camera);
                break;
            case 'social_fear':
                this.renderSocialFearBackground(ctx, camera);
                break;
            case 'office':
                this.renderOfficeBackground(ctx, camera);
                break;
            case 'social_media':
                this.renderSocialMediaBackground(ctx, camera);
                break;
            case 'chat':
                this.renderChatBackground(ctx, camera);
                break;
            case 'jealousy':
                this.renderJealousyBackground(ctx, camera);
                break;
            case 'hacker':
                this.renderHackerBackground(ctx, camera);
                break;
            case 'hope':
                this.renderHopeBackground(ctx, camera);
                break;
            case 'talking':
                this.renderTalkingBackground(ctx, camera);
                break;
            case 'rage':
                this.renderRageBackground(ctx, camera);
                break;
            case 'confession':
                this.renderConfessionBackground(ctx, camera);
                break;
            case 'trabzon':
                this.renderTrabzonBackground(ctx, camera);
                break;
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
    
    // Yeni tema arka planları
    static renderSchoolGardenBackground(ctx, camera) {
        // Okul bahçesi - yeşil ve huzurlu
        const gradient = ctx.createLinearGradient(0, 0, 0, 576);
        gradient.addColorStop(0, '#87CEEB'); // Mavi gökyüzü
        gradient.addColorStop(0.4, '#98FB98'); // Açık yeşil
        gradient.addColorStop(1, '#228B22'); // Koyu yeşil
        ctx.fillStyle = gradient;
        ctx.fillRect(-camera.x, -camera.y, 2048, 576);
        
        // Ağaçlar
        ctx.fillStyle = '#8B4513';
        for (let i = 0; i < 8; i++) {
            const x = 200 + i * 250 - camera.x;
            ctx.fillRect(x, 300 - camera.y, 20, 80);
            // Yapraklar
            ctx.fillStyle = '#32CD32';
            ctx.beginPath();
            ctx.arc(x + 10, 280 - camera.y, 40, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = '#8B4513';
        }
        
        // Teneffüs zili efekti
        ctx.fillStyle = '#FFD700';
        ctx.font = '20px Arial';
        ctx.fillText('🔔 Teneffüs!', 100 - camera.x, 100 - camera.y);
    }
    
    static renderSchoolCorridorBackground(ctx, camera) {
        // Okul koridoru - araştırma atmosferi
        ctx.fillStyle = '#F5F5DC';
        ctx.fillRect(-camera.x, -camera.y, 2048, 576);
        
        // Sınıf kapıları ve öğrenci siluetleri
        for (let i = 0; i < 6; i++) {
            const x = 150 + i * 300 - camera.x;
            // Kapılar
            ctx.fillStyle = '#8B4513';
            ctx.fillRect(x, 250 - camera.y, 60, 120);
            
            // Öğrenci siluetleri
            ctx.fillStyle = 'rgba(0,0,0,0.3)';
            ctx.fillRect(x + 80, 320 - camera.y, 15, 40);
            ctx.fillRect(x + 100, 310 - camera.y, 15, 50);
        }
        
        // Soru işaretleri (araştırma teması)
        ctx.fillStyle = '#FF6B6B';
        ctx.font = '24px Arial';
        for (let i = 0; i < 10; i++) {
            const x = Math.random() * 1800 - camera.x * 0.5;
            const y = Math.random() * 200 + 50 - camera.y * 0.5;
            ctx.fillText('❓', x, y);
        }
    }
    
    static renderSocialFearBackground(ctx, camera) {
        // Utangaçlık teması - karanlık ve korkulu
        const gradient = ctx.createLinearGradient(0, 0, 0, 576);
        gradient.addColorStop(0, '#2F2F2F');
        gradient.addColorStop(0.5, '#4A4A4A');
        gradient.addColorStop(1, '#1A1A1A');
        ctx.fillStyle = gradient;
        ctx.fillRect(-camera.x, -camera.y, 2048, 576);
        
        // Sosyal medya ikonları (korkutucu)
        ctx.font = '16px Arial';
        const icons = ['👥', '📱', '💭', '😰', '🤐'];
        for (let i = 0; i < 15; i++) {
            const x = Math.random() * 1800 - camera.x * 0.3;
            const y = Math.random() * 400 - camera.y * 0.3;
            ctx.fillStyle = `rgba(255, 100, 100, ${0.2 + Math.random() * 0.3})`;
            ctx.fillText(icons[Math.floor(Math.random() * icons.length)], x, y);
        }
    }
    
    static renderOfficeBackground(ctx, camera) {
        // Modern ofis ortamı
        ctx.fillStyle = '#E6E6FA';
        ctx.fillRect(-camera.x, -camera.y, 2048, 576);
        
        // Ofis masaları
        ctx.fillStyle = '#8B4513';
        for (let i = 0; i < 5; i++) {
            const x = 200 + i * 350 - camera.x;
            ctx.fillRect(x, 400 - camera.y, 120, 60);
            
            // Bilgisayarlar
            ctx.fillStyle = '#000';
            ctx.fillRect(x + 20, 380 - camera.y, 40, 30);
            ctx.fillStyle = '#0066CC';
            ctx.fillRect(x + 25, 385 - camera.y, 30, 20);
            ctx.fillStyle = '#8B4513';
        }
        
        // Yazılım sembolleri
        ctx.font = '14px Arial';
        ctx.fillStyle = '#00FF00';
        const codes = ['</>', '{...}', 'API', 'DB', 'Git'];
        for (let i = 0; i < codes.length; i++) {
            ctx.fillText(codes[i], 250 + i * 300 - camera.x, 200 - camera.y);
        }
    }
    
    static renderSocialMediaBackground(ctx, camera) {
        // Sosyal medya keşif teması
        const gradient = ctx.createLinearGradient(0, 0, 0, 576);
        gradient.addColorStop(0, '#1DA1F2'); // Twitter mavisi
        gradient.addColorStop(0.3, '#4267B2'); // Facebook mavisi  
        gradient.addColorStop(0.7, '#E1306C'); // Instagram pembesi
        gradient.addColorStop(1, '#25D366'); // WhatsApp yeşili
        ctx.fillStyle = gradient;
        ctx.fillRect(-camera.x, -camera.y, 2048, 576);
        
        // Sosyal medya post'ları
        ctx.fillStyle = 'rgba(255,255,255,0.9)';
        for (let i = 0; i < 8; i++) {
            const x = 100 + i * 200 - camera.x * 0.7;
            const y = 100 + (i % 3) * 150 - camera.y * 0.7;
            ctx.fillRect(x, y, 120, 80);
            
            // Post içeriği
            ctx.fillStyle = '#000';
            ctx.font = '10px Arial';
            ctx.fillText('👤 Post', x + 10, y + 20);
            ctx.fillStyle = 'rgba(255,255,255,0.9)';
        }
    }
    
    static renderChatBackground(ctx, camera) {
        // Chat/mesajlaşma teması
        ctx.fillStyle = '#F0F8FF';
        ctx.fillRect(-camera.x, -camera.y, 2048, 576);
        
        // Chat bubbles
        const messages = [
            { text: 'Merhaba! 👋', x: 200, y: 200, sender: 'yunus' },
            { text: 'Selam 😊', x: 400, y: 220, sender: 'hale' },
            { text: 'Trabzon\'da mısın?', x: 600, y: 180, sender: 'yunus' },
            { text: 'Evet! Sen de mi?', x: 800, y: 200, sender: 'hale' },
        ];
        
        messages.forEach(msg => {
            const x = msg.x - camera.x * 0.5;
            const y = msg.y - camera.y * 0.5;
            
            ctx.fillStyle = msg.sender === 'yunus' ? '#DCF8C6' : '#E1FFC7';
            ctx.fillRect(x, y, 150, 40);
            
            ctx.fillStyle = '#000';
            ctx.font = '10px Arial';
            ctx.fillText(msg.text, x + 10, y + 25);
        });
    }
    
    static renderJealousyBackground(ctx, camera) {
        // Kıskançlık - karanlık ve kırmızı
        const gradient = ctx.createLinearGradient(0, 0, 0, 576);
        gradient.addColorStop(0, '#8B0000'); // Koyu kırmızı
        gradient.addColorStop(0.5, '#2F2F2F'); // Koyu gri
        gradient.addColorStop(1, '#000000'); // Siyah
        ctx.fillStyle = gradient;
        ctx.fillRect(-camera.x, -camera.y, 2048, 576);
        
        // Kıskançlık sembolleri
        ctx.font = '20px Arial';
        const jealousySymbols = ['😡', '💔', '👥', '😤', '⚡'];
        for (let i = 0; i < 12; i++) {
            const x = Math.random() * 1800 - camera.x * 0.4;
            const y = Math.random() * 400 - camera.y * 0.4;
            ctx.fillStyle = `rgba(255, 0, 0, ${0.3 + Math.random() * 0.4})`;
            ctx.fillText(jealousySymbols[Math.floor(Math.random() * jealousySymbols.length)], x, y);
        }
    }
    
    static renderHackerBackground(ctx, camera) {
        // Matrix/hacker teması
        ctx.fillStyle = '#000000';
        ctx.fillRect(-camera.x, -camera.y, 2048, 576);
        
        // Matrix rain effect
        ctx.fillStyle = '#00FF00';
        ctx.font = '12px monospace';
        const matrixChars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
        
        for (let i = 0; i < 50; i++) {
            const x = (i * 20) - camera.x * 0.2;
            for (let j = 0; j < 30; j++) {
                const y = (j * 20) - camera.y * 0.2;
                const char = matrixChars[Math.floor(Math.random() * matrixChars.length)];
                ctx.fillStyle = `rgba(0, 255, 0, ${Math.random() * 0.8})`;
                ctx.fillText(char, x, y);
            }
        }
        
        // Hacker sembolleri
        ctx.fillStyle = '#FF0000';
        ctx.font = '16px Arial';
        const hackerSymbols = ['🔓', '💻', '🔍', '⚡', '🎯'];
        for (let i = 0; i < 8; i++) {
            const x = 200 + i * 200 - camera.x * 0.3;
            const y = 100 + Math.sin(i) * 50 - camera.y * 0.3;
            ctx.fillText(hackerSymbols[i % hackerSymbols.length], x, y);
        }
    }
    
    static renderHopeBackground(ctx, camera) {
        // Umut ve ışık teması
        const gradient = ctx.createLinearGradient(0, 0, 0, 576);
        gradient.addColorStop(0, '#FFD700'); // Altın
        gradient.addColorStop(0.3, '#FFA500'); // Turuncu
        gradient.addColorStop(0.7, '#FF69B4'); // Pembe
        gradient.addColorStop(1, '#98FB98'); // Açık yeşil
        ctx.fillStyle = gradient;
        ctx.fillRect(-camera.x, -camera.y, 2048, 576);
        
        // Işık ışınları
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
        ctx.lineWidth = 3;
        for (let i = 0; i < 8; i++) {
            ctx.beginPath();
            ctx.moveTo(500 - camera.x, 100 - camera.y);
            ctx.lineTo(200 + i * 200 - camera.x, 500 - camera.y);
            ctx.stroke();
        }
        
        // Umut sembolleri
        ctx.font = '18px Arial';
        const hopeSymbols = ['✨', '🌟', '💫', '🌈', '☀️'];
        for (let i = 0; i < 10; i++) {
            const x = Math.random() * 1800 - camera.x * 0.2;
            const y = Math.random() * 400 - camera.y * 0.2;
            ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
            ctx.fillText(hopeSymbols[Math.floor(Math.random() * hopeSymbols.length)], x, y);
        }
    }
    
    static renderTalkingBackground(ctx, camera) {
        // İkili konuşma teması
        ctx.fillStyle = '#F0F8FF';
        ctx.fillRect(-camera.x, -camera.y, 2048, 576);
        
        // Konuşma baloncukları
        ctx.fillStyle = 'rgba(173, 216, 230, 0.7)';
        for (let i = 0; i < 6; i++) {
            const x = 200 + i * 250 - camera.x * 0.6;
            const y = 150 + (i % 2) * 100 - camera.y * 0.6;
            
            // Balon
            ctx.beginPath();
            ctx.arc(x, y, 60, 0, Math.PI * 2);
            ctx.fill();
            
            // Balon kuyruğu
            ctx.beginPath();
            ctx.moveTo(x - 20, y + 40);
            ctx.lineTo(x - 40, y + 60);
            ctx.lineTo(x, y + 45);
            ctx.fill();
        }
        
        // Düşünce ve konuşma sembolleri
        ctx.font = '14px Arial';
        ctx.fillStyle = '#4169E1';
        const talkSymbols = ['💭', '💬', '🗨️', '💝', '😊'];
        for (let i = 0; i < talkSymbols.length; i++) {
            ctx.fillText(talkSymbols[i], 250 + i * 250 - camera.x * 0.6, 200 - camera.y * 0.6);
        }
    }
    
    static renderRageBackground(ctx, camera) {
        // Öfke/çıldırma teması
        const gradient = ctx.createLinearGradient(0, 0, 0, 576);
        gradient.addColorStop(0, '#FF0000'); // Kırmızı
        gradient.addColorStop(0.3, '#8B0000'); // Koyu kırmızı
        gradient.addColorStop(0.7, '#2F2F2F'); // Koyu gri
        gradient.addColorStop(1, '#000000'); // Siyah
        ctx.fillStyle = gradient;
        ctx.fillRect(-camera.x, -camera.y, 2048, 576);
        
        // Şimşek efektleri
        ctx.strokeStyle = '#FFFF00';
        ctx.lineWidth = 4;
        for (let i = 0; i < 5; i++) {
            ctx.beginPath();
            ctx.moveTo(100 + i * 300 - camera.x, 50 - camera.y);
            ctx.lineTo(150 + i * 300 - camera.x, 200 - camera.y);
            ctx.lineTo(200 + i * 300 - camera.x, 100 - camera.y);
            ctx.lineTo(250 + i * 300 - camera.x, 300 - camera.y);
            ctx.stroke();
        }
        
        // Öfke sembolleri
        ctx.font = '24px Arial';
        const rageSymbols = ['😡', '🤬', '💥', '⚡', '👿'];
        for (let i = 0; i < 15; i++) {
            const x = Math.random() * 1800 - camera.x * 0.3;
            const y = Math.random() * 400 - camera.y * 0.3;
            ctx.fillStyle = `rgba(255, 255, 0, ${0.5 + Math.random() * 0.5})`;
            ctx.fillText(rageSymbols[Math.floor(Math.random() * rageSymbols.length)], x, y);
        }
    }
    
    static renderConfessionBackground(ctx, camera) {
        // İtiraf/romantik sahne
        const gradient = ctx.createLinearGradient(0, 0, 0, 576);
        gradient.addColorStop(0, '#FFB6C1'); // Açık pembe
        gradient.addColorStop(0.3, '#FFC0CB'); // Pembe
        gradient.addColorStop(0.7, '#FF69B4'); // Orta pembe
        gradient.addColorStop(1, '#FF1493'); // Koyu pembe
        ctx.fillStyle = gradient;
        ctx.fillRect(-camera.x, -camera.y, 2048, 576);
        
        // Kalpler
        ctx.font = '20px Arial';
        for (let i = 0; i < 20; i++) {
            const x = Math.random() * 1800 - camera.x * 0.1;
            const y = Math.random() * 500 - camera.y * 0.1;
            ctx.fillStyle = `rgba(255, 255, 255, ${0.6 + Math.random() * 0.4})`;
            ctx.fillText('💕', x, y);
        }
        
        // Romantik ışık
        ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
        ctx.beginPath();
        ctx.arc(1000 - camera.x, 200 - camera.y, 150, 0, Math.PI * 2);
        ctx.fill();
    }
    
    static renderTrabzonBackground(ctx, camera) {
        // Trabzon manzarası
        const gradient = ctx.createLinearGradient(0, 0, 0, 576);
        gradient.addColorStop(0, '#87CEEB'); // Gökyüzü
        gradient.addColorStop(0.4, '#228B22'); // Yeşil dağlar
        gradient.addColorStop(0.8, '#4169E1'); // Deniz
        gradient.addColorStop(1, '#191970'); // Koyu deniz
        ctx.fillStyle = gradient;
        ctx.fillRect(-camera.x, -camera.y, 2048, 576);
        
        // Dağlar
        ctx.fillStyle = '#2F4F4F';
        ctx.beginPath();
        ctx.moveTo(0 - camera.x, 300 - camera.y);
        ctx.lineTo(200 - camera.x, 150 - camera.y);
        ctx.lineTo(400 - camera.x, 200 - camera.y);
        ctx.lineTo(600 - camera.x, 100 - camera.y);
        ctx.lineTo(800 - camera.x, 180 - camera.y);
        ctx.lineTo(1000 - camera.x, 120 - camera.y);
        ctx.lineTo(2048 - camera.x, 200 - camera.y);
        ctx.lineTo(2048 - camera.x, 576 - camera.y);
        ctx.lineTo(0 - camera.x, 576 - camera.y);
        ctx.fill();
        
        // Trabzon sembolleri
        ctx.font = '16px Arial';
        const trabzonSymbols = ['🌲', '🏔️', '🌊', '🐟', '🌰'];
        for (let i = 0; i < trabzonSymbols.length; i++) {
            ctx.fillText(trabzonSymbols[i], 200 + i * 300 - camera.x * 0.7, 120 - camera.y * 0.7);
        }
        
        // Uçak (level 13 için)
        ctx.font = '20px Arial';
        ctx.fillText('✈️', 500 - camera.x * 0.3, 100 - camera.y * 0.3);
    }
} 