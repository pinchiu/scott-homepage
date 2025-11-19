// --- 1. 你的文章資料庫 (在這裡打字發布) ---
const blogPosts = [
    {
        id: 3,
        title: "Building My Personal Website",
        date: "2025-08-19",
        tags: ["Coding", "Web"],
        content: "I finally built my own website using HTML, CSS, and JavaScript! I added a Matrix rain effect because it looks cool. <br><br> It's hosted on my own server using simple static files."
    },
    {
        id: 2,
        title: "Leg Day at the Gym",
        date: "2025-08-15",
        tags: ["Gym", "Life"],
        content: "Hit a new PR on squats today! 100kg for 5 reps. My legs are shaking but it feels great. Consistency is key."
    },
    {
        id: 1,
        title: "Hello World",
        date: "2025-08-10",
        tags: ["Intro"],
        content: "This is my first blog post. Welcome to my digital garden. I will share my journey in Bioengineering and Tech here."
    }
];

// --- 2. 自動生成 HTML 的程式碼 (不用動它) ---
const blogContainer = document.getElementById('blog-posts');

function renderPosts() {
    // 清空容器
    blogContainer.innerHTML = '';

    // 迴圈：把每一篇文章拿出來處理
    blogPosts.forEach(post => {
        // 建立 HTML 字串
        const postHTML = `
            <article class="post-card">
                <div class="post-date">${post.date}</div>
                <h2 class="post-title">${post.title}</h2>
                <div class="post-content">${post.content}</div>
                <div class="post-tags">
                    ${post.tags.map(tag => `<span class="tag">#${tag}</span>`).join('')}
                </div>
            </article>
        `;

        // 把做好的 HTML 塞進網頁裡
        blogContainer.innerHTML += postHTML;
    });
}

// 執行功能
renderPosts();