import { getWorkStudyData } from "../js/services/fetchService.js";
import { EducationCard } from "../js/components/card-education.js";
import { CourseCard } from "../js/components/card-course.js";

export async function renderEducation(container) {
    // Sección Educación (incluye cursos dentro)
    const educationSection = document.createElement("section");
    educationSection.innerHTML = `
        <h2>Educación</h2>
        <div id="education-container"></div>
        <h2>Cursos y acreditaciones</h2>
        <div id="courses-container"></div>
    `;
    container.appendChild(educationSection);

    const { education, courses } = await getWorkStudyData();

    const educationContainer = educationSection.querySelector("#education-container");
    education.forEach(item => {
        const card = EducationCard(item);
        educationContainer.appendChild(card);
    });

    const coursesContainer = educationSection.querySelector("#courses-container");
    courses.forEach(item => {
        const card = CourseCard(item);
        coursesContainer.appendChild(card);
    });
}

