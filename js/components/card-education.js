export function EducationCard(education) {
    const card = document.createElement("div");
    card.className = "card education-card";

    card.innerHTML = `
        <h3>${education.title}</h3>
        <p><strong>${education.school}</strong></p>
        <p class="time">${education.time}</p>
        <ul>
        ${(education.skills || []).map(skill => `<li>${skill}</li>`).join("")}
        </ul>
    `;

    return card;
}
