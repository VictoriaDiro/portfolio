// js/router.js
import { renderHome } from "./components/home.js";
import { renderJobs } from "../views/jobs.js";
import { renderEducation } from "../views/education.js";
import { renderCourses } from "../views/courses.js";
import { renderBlog } from "../views/blog.js";
import { renderBlogPost } from "../views/blogPost.js";
import { renderAudiovisuales } from "../views/audiovisuales.js";

export async function router() {
    const app = document.getElementById("app");
    app.innerHTML = "";

    const hash = window.location.hash.slice(1);
    const parts = hash.split("/").filter(Boolean);

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
        case "audiovisuales":
            renderAudiovisuales(app);
            break;
        case "":
            renderHome(app);
            break;
        default:
            app.innerHTML = "<h2>Página no encontrada</h2>";
            break;
    }
}
