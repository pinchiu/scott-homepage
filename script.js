// --- 1. Matrix Rain Effect (駭客任務代碼雨) ---
const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

// 設定 Canvas 大小為全螢幕
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*';
const fontSize = 14;
const columns = canvas.width / fontSize; // 計算有多少列
const drops = [];

// 初始化每一列的落下位置 (y座標)
for (let x = 0; x < columns; x++) {
    drops[x] = 1;
}

function drawMatrix() {
    // 每次繪製都蓋上一層半透明黑色，形成拖影效果
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#0F0'; // 綠色文字
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < drops.length; i++) {
        const text = letters.charAt(Math.floor(Math.random() * letters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // 如果落到底部，隨機重置回頂部
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

// 設定動畫幀率
setInterval(drawMatrix, 33);


// --- 2. Language Switcher (雙語切換) ---
const translations = {
    en: {
        greeting: "Hi — I'm Scott",
        subtitle: "University Student",
        "about-title": "About Me",
        "about-desc": "I am a university student passionate about tech. I enjoy <strong>photography</strong> and training in the <strong>gym</strong>.",
        "portfolio-title": "Photography Portfolio",
        "contact-title": "Get in Touch",
        "interests-title": "Interests",
        "interest-photo": "Photography",
        "interest-gym": "Gym Training",
        "interest-tech": "Tech & Programming"
    },
    zh: {
        greeting: "嗨 — 我是 Scott",
        subtitle: "大學生 / Bioengineering",
        "about-title": "關於我",
        "about-desc": "我是一名對科技充滿熱情的大學生。我喜歡<strong>攝影</strong>以及在<strong>健身房</strong>訓練。",
        "portfolio-title": "攝影作品集",
        "contact-title": "聯絡方式",
        "interests-title": "興趣",
        "interest-photo": "攝影",
        "interest-gym": "健身重訓",
        "interest-tech": "科技與程式設計"
    }
};

const langBtns = document.querySelectorAll('.lang-btn[data-lang]');
const elementsToTranslate = document.querySelectorAll('[data-key]');

langBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const lang = btn.getAttribute('data-lang');
        
        // 更新按鈕狀態
        langBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // 更新文字內容
        elementsToTranslate.forEach(el => {
            const key = el.getAttribute('data-key');
            if (translations[lang][key]) {
                // 使用 innerHTML 以保留 <strong> 等標籤
                el.innerHTML = translations[lang][key];
            }
        });
    });
});