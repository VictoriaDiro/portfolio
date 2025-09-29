import { renderCourses } from "../views/courses.js";
import { renderJobs } from "../views/jobs.js";
import { SkillsAndTechnologies } from "./components/skills.js";
import { skills } from "../data/skillsData.js";

const app = document.getElementById("app");
const skillsSection = SkillsAndTechnologies(skills);
app.appendChild(skillsSection);

const routes = {
	"/courses": renderCourses,
	"/jobs": renderJobs,
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