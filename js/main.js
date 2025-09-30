import { renderEducation } from "../views/education.js";
import { renderJobs } from "../views/jobs.js";

const routes = {
	"/jobs": renderJobs,
	"/education": renderEducation,
};

window.addEventListener("hashchange", render);
window.addEventListener("load", render);

function render() {
	const path = location.hash.slice(1) || "/"; 
	const app = document.getElementById("app");

	const existingView = app.querySelector(".view");
	if (existingView) existingView.remove();

	const view = routes[path];
	if (view) {
		const container = document.createElement("div");
		container.className = "view";
		app.appendChild(container);
		view(container);
	}
}
