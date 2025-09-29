import { renderCourses } from "../views/courses.js";
import { renderJobs } from "../views/jobs.js";

const routes = {
  "/courses": renderCourses,
  "/jobs": renderJobs,
};

function render() {
  const path = location.hash.slice(1) || "/courses"; 
  const app = document.getElementById("app");
  app.innerHTML = ""; // limpiar

  const view = routes[path];
  if (view) {
    view(app); // ⬅️ aquí pasa el container a la vista
  }
}

window.addEventListener("hashchange", render);
window.addEventListener("load", render);
