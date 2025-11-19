const canvas = document.getElementById('matrix');
if (canvas) {
  const ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
  const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const nums = '0123456789';
  const bio = 'ATCGATCGATCGATCG'; // Emphasize Bioinfo

  const alphabet = katakana + latin + nums + bio;

  const fontSize = 16;
  const columns = canvas.width / fontSize;

  const rainDrops = [];

  for (let x = 0; x < columns; x++) {
    rainDrops[x] = 1;
  }

  const draw = () => {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'; // Black trail
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#0F0'; // Bright Green
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < rainDrops.length; i++) {
      const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
      ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);

      if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        rainDrops[i] = 0;
      }
      rainDrops[i]++;
    }
  };

  setInterval(draw, 30);

  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const content = {
    zh: {
      'greeting': '嗨，我是 Scott',
      'subtitle': '我目前是一位大學生',
      'about-title': '關於我',
      'about-desc': '我是一位對科技充滿熱情的大學生。我喜歡<strong>攝影</strong>和在<strong>健身房</strong>訓練。',
      'portfolio-title': '攝影作品集',
      'contact-title': '聯絡資訊',
      'interests-title': '興趣',
      'interest-photo': '攝影',
      'interest-gym': '健身訓練',
      'interest-tech': '科技與程式'
    },
    en: {
      'greeting': "Hi — I'm Scott",
      'subtitle': 'Currently I am still a University Student',
      'about-title': 'About Me',
      'about-desc': 'I am a university student passionate about tech. I enjoy <strong>photography</strong> and training in the <strong>gym</strong>.',
      'portfolio-title': 'Photography Portfolio',
      'contact-title': 'Get in Touch',
      'interests-title': 'Interests',
      'interest-photo': 'Photography',
      'interest-gym': 'Gym Training',
      'interest-tech': 'Tech & Programming'
    }
  };

  let currentLang = 'en'; // Default to English

  function switchLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
    document.querySelectorAll('[data-key]').forEach(el => {
      const key = el.getAttribute('data-key');
      if (content[lang][key]) el.innerHTML = content[lang][key];
    });
    document.title = lang === 'zh' ? '介紹 — Scott' : 'Intro — Scott';
  }

  // Set initial language on page load
  switchLanguage(currentLang);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      const newLang = btn.getAttribute('data-lang');
      if (newLang !== currentLang) switchLanguage(newLang);
    });
  });
});