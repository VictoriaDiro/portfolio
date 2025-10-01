// views/blog.js
export function renderBlog(container) {
    const section = document.createElement("section");
    section.innerHTML = `<h2>Blog</h2><div id="blog-container"></div>`;
    container.innerHTML = "";
    container.appendChild(section);

    const posts = [
        { title: "Guía completa de Markdown", slug: "20251001" },
        { title: "Segundo post de ejemplo", slug: "20251002" }
    ];

    const blogContainer = section.querySelector("#blog-container");

    posts.forEach(post => {
        const article = document.createElement("article");
        article.innerHTML = `<h3><a href="#/blog/${post.slug}">${post.title}</a></h3>`;
        blogContainer.appendChild(article);
    });
}
