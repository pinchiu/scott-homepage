// --- 1. 文章資料庫 (你的內容都在這) ---
const blogPosts = [

    {
        id: 1,
        title: "Hello World",
        date: "2025-08-10",
        tags: ["Intro"],
        content: "This is my first blog post. Welcome to my digital garden. I will share my journey in Bioengineering and Tech here."
    }
];

// --- 2. 渲染文章列表 (只在 blog.html 運作) ---
const blogContainer = document.getElementById('blog-posts');

// 這個 if 是為了防止在 post.html 發生錯誤 (因為 post.html 沒有 id="blog-posts")
if (blogContainer) {
    blogContainer.innerHTML = ''; // 清空目前內容
    
    blogPosts.forEach(post => {
        // 產生摘要：只取內容的前 100 個字，後面加 ...
        // 這裡簡單處理，實際應用可能要移除 HTML 標籤再截斷
        const summary = post.content.substring(0, 100) + '...';
        
        const postHTML = `
            <article class="post-card">
                <div class="post-date">${post.date}</div>
                <h2 class="post-title">${post.title}</h2>
                
                <!-- 顯示摘要 -->
                <div class="post-content" style="margin-bottom:15px; color:#aaa;">
                    ${summary}
                </div>
                
                <!-- [關鍵] Read More 按鈕：連結帶上 id 參數 -->
                <a href="post.html?id=${post.id}" class="read-more-btn">Read More →</a>
                
                <div class="post-tags" style="margin-top:15px;">
                    ${post.tags.map(tag => `<span class="tag">#${tag}</span>`).join('')}
                </div>
            </article>
        `;
        blogContainer.innerHTML += postHTML;
    });
}

// --- 3. 動態加入 Read More 按鈕的樣式 ---
const style = document.createElement('style');
style.innerHTML = `
  .read-more-btn {
    display: inline-block;
    padding: 6px 12px;
    background: var(--accent); /* 使用矩陣綠 */
    color: #000;
    text-decoration: none;
    font-weight: bold;
    border-radius: 4px;
    font-size: 0.9rem;
    transition: all 0.3s ease;
  }
  .read-more-btn:hover {
    background: #fff;
    box-shadow: 0 0 10px var(--accent);
  }
`;
document.head.appendChild(style);