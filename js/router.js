// js/router.js
import { renderHome } from "./components/home.js";
import { renderJobs } from "../views/jobs.js";
import { renderEducation } from "../views/education.js";
import { renderCourses } from "../views/courses.js";
import { renderBlog } from "../views/blog.js";
import { renderBlogPost } from "../views/blogPost.js";
import { renderContact } from "../views/contact.js";
import { renderAudiovisuales } from "../views/audiovisuales.js";

export async function router() {
    const app = document.getElementById("app");
    app.innerHTML = ""; // Limpiamos el <main>

    const hash = window.location.hash.slice(1); // ej: "blog/20251001"
    const parts = hash.split("/").filter(Boolean); // ["blog", "20251001"]

    // --- Rutas dinámicas de blog ---
    if (parts[0] === "blog") {
        if (parts[1]) {
            // Detalle del post
            await renderBlogPost(app, parts[1]);
        } else {
            // Listado de posts
            await renderBlog(app);
        }
        return;
    }

    // --- Rutas normales ---
    switch (hash) {
        case "jobs":
            await renderJobs(app);
            break;
        case "education":
            await renderEducation(app);
            break;
        case "courses":
            await renderCourses(app);
            break;
        case "contact":
            renderContact(app);
            break;
        case "audiovisuales":
            renderAudiovisuales(app);
            break;
        case "": // inicio
            renderHome(app);
            break;
        default:
            app.innerHTML = "<h2>Página no encontrada</h2>";
            break;
    }
}
