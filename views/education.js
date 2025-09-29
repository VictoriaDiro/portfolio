import { getWorkStudyData } from "../js/services/fetchService.js";
import { EducationCard } from "../js/components/card-education.js";

export async function renderEducation(container) {
    const section = document.createElement("section");
    section.innerHTML = "<h2>Educación</h2><div id='education-container'></div>";
    container.appendChild(section);

    const data = await getWorkStudyData();
    const educationContainer = section.querySelector("#education-container");

    data.education.forEach(course => {
        const card = EducationCard(course);
        educationContainer.appendChild(card);
    });
}
