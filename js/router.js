import { JobCard } from "./components/card-job.js";
import { EducationCard } from "./components/card-education.js";
import { CourseCard } from "./components/card-course.js";
import { renderHome } from "./components/home.js";
import { getWorkStudyData } from "./services/fetchService.js";

export function router() {
    const route = window.location.hash;
    const app = document.getElementById("app");
    app.innerHTML = "";

    if (route === "#/jobs") {
        JobCard(app);
    } else if (route === "#/education") {
        EducationCard(app);
    } else if (route === "#/courses") {
        CourseCard(app);
    } else {
        renderHome(app);
    }
}