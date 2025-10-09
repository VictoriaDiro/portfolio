export function JobCard(job) {
    const card = document.createElement("div");
    card.className = "card job-card";

    card.innerHTML = `
        <h3>${job.title}</h3>
        <p><strong>${job.company}</strong></p>
        <p class="time">${job.time}</p>
        <ul>
        ${(job.skills || []).map(skill => `<li>${skill}</li>`).join("")}
        </ul>
    `;

    return card;
}