// js/main.js
import { renderHome } from "../views/home.js";
import { renderJobs } from "../views/jobs.js";
import { renderEducation } from "../views/education.js";
import { renderBlog } from "../views/blog.js";
import { renderBlogPost } from "../views/blogPost.js";
// import { renderAudiovisuales } from "../views/audiovisuales.js";

const routes = {
    "/": renderHome,
    "/jobs": renderJobs,
    "/education": renderEducation,
    "/blog": renderBlog,
    // "/audiovisuales": renderAudiovisuales,
};

function render() {
    const hash = location.hash.slice(1) || "/";
    const parts = hash.split("/").filter(Boolean); // ["blog", "20251001"]
    const app = document.getElementById("app");

    app.innerHTML = "";

    // --- Rutas dinámicas ---
    if (parts[0] === "blog" && parts[1]) {
        renderBlogPost(app, parts[1]);
        return;
    }

    // --- Rutas normales ---
    const path = "/" + (parts[0] || "");
    const view = routes[path];

    if (view) {
        const container = document.createElement("div");
        container.className = "view";
        app.appendChild(container);

        const result = view(container);
        if (result instanceof Promise) {
            result.catch(err => console.error("Error en vista:", err));
        }
    } else {
        app.innerHTML = "<h2>Página no encontrada</h2>";
    }
}

window.addEventListener("hashchange", render);
window.addEventListener("load", render);
