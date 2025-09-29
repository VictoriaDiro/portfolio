import { getWorkStudyData } from "../js/services/fetchService.js";
import { CourseCard } from "../js/components/card-course.js";

export async function renderCourses(container) {
    const section = document.createElement("section");
    section.innerHTML = "<h2>Cursos</h2><div id='courses-container'></div>";
    container.appendChild(section);

    const data = await getWorkStudyData();
    const coursesContainer = section.querySelector("#courses-container");

    data.courses.forEach(course => {
        const card = CourseCard(course);
        coursesContainer.appendChild(card);
    });
}
