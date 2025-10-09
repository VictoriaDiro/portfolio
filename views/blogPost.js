// views/blogPost.js
import { blogPosts } from "../data/dataBlogPost.js";

export function renderBlogPost(container, slug) {
    const section = document.createElement("section");
    container.innerHTML = ""; // Limpiar contenido previo
    container.appendChild(section);

    if (!blogPosts[slug]) {
        section.innerHTML = "<h2>Post no encontrado</h2>";
    } else {
        section.innerHTML = blogPosts[slug];
    }
}
