export function SkillsAndTechnologies(skills) {
    const section = document.createElement("section");
    section.className = "skills-section";

    section.innerHTML = `
        <h2>Skills & Technologies</h2>
        <ul class="skills-list">
            ${skills.map(skill => `
                <li class="skill-item">
                    <img src="${skill.icon}" alt="${skill.name}" title="${skill.name}" />
                </li>
            `).join("")}
        </ul>
    `;

    return section;
}