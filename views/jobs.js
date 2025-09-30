import { getWorkStudyData } from "../js/services/fetchService.js";
import { JobCard } from "../js/components/card-job.js";
import { SkillsAndTechnologies } from "../js/components/skills.js";
import { skills } from "../data/skillsData.js";

export async function renderJobs(container) {
    // Skills
    const skillsSection = SkillsAndTechnologies(skills);
    container.appendChild(skillsSection);

    // Jobs
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
