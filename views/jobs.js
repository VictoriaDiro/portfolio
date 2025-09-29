import { getWorkStudyData } from "../js/services/fetchService.js";
import { JobCard } from "../js/components/card-job.js";

export async function renderJobs(container) {
    const section = document.createElement("section");
    section.innerHTML = "<h2>Experiencia laboral</h2><div id='jobs-container'></div>";
    container.appendChild(section);

    const data = await getWorkStudyData();
    const jobsContainer = section.querySelector("#jobs-container");

    data.jobs.forEach(job => {
        const card = JobCard(job);
        jobsContainer.appendChild(card);
    });
}