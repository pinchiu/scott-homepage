// --- 1. 文章資料庫 ---
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
        // 智慧摘要邏輯：
        // 1. 如果有 summary (Markdown 文章)，就用 summary
        // 2. 如果沒有 summary 但有 content (舊文章)，就截取前 100 字
        // 3. 如果都沒有，顯示 Loading
        let intro = '';
        if (post.summary) {
            intro = post.summary;
        } else if (post.content) {
            // 移除 HTML 標籤後再截斷，避免截斷到一半的標籤
            const plainText = post.content.replace(/<[^>]*>/g, '');
            intro = plainText.substring(0, 100) + '...';
        } else {
            intro = 'Click to read more...';
        }
        
        const postHTML = `
            <article class="post-card">
                <div class="post-date">${post.date}</div>
                <h2 class="post-title">${post.title}</h2>
                
                <!-- 顯示摘要 -->
                <div class="post-content" style="margin-bottom:15px; color:#aaa;">
                    ${intro}
                </div>
                
                <!-- [關鍵] Read More 按鈕：連結帶上 id 參數 -->
                <a href="post.html?id=${post.id}" class="read-more-btn">Read More →</a>
                
                <div class="post-tags" style="margin-top:15px;">
                    ${post.tags ? post.tags.map(tag => `<span class="tag">#${tag}</span>`).join('') : ''}
                </div>
            </article>
        `;
        blogContainer.innerHTML += postHTML;
    });
}

// --- 3. 動態加入 Read More 按鈕的樣式 ---
// 避免重複加入樣式
if (!document.getElementById('dynamic-blog-style')) {
    const style = document.createElement('style');
    style.id = 'dynamic-blog-style';
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
}