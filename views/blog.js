// views/blog.js
export function renderBlog(container) {
    const section = document.createElement("section");
    section.innerHTML = `<h2>Blog</h2><div id="blog-container"></div>`;
    container.innerHTML = "";
    container.appendChild(section);

    const posts = [
        { 
            slug: "20251001", 
            title: "Guía completa de Markdown", 
            excerpt: "Markdown nació como herramienta de conversión de texto plano a HTML. Esta herramienta fue creada en 2004 por John Gruber, y se distribuye de manera gratuita bajo una licencia BSD.", 
            continue: "Continuar leyendo"
        },
        // { title: "Segundo post de ejemplo", slug: "20251002" }
    ];

    const blogContainer = section.querySelector("#blog-container");

    posts.forEach(post => {
        const article = document.createElement("article");
        article.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.excerpt}</p>
            <div>
                <a href="#/blog/${post.slug}">${post.continue}</a>
            </div>
        `;
        blogContainer.appendChild(article);
    });
}
