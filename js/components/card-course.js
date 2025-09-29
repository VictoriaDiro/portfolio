export function CourseCard(course) {
    const card = document.createElement("div");
    card.className = "card course-card";

    card.innerHTML = `
        <h3>${course.title}</h3>
        <p><strong>${course.school}</strong></p>
        <p class="time">${course.time}</p>
        ${course.certificate ? `<a href="${course.certificate}" target="_blank">Ver certificado</a>` : ""}
    `;

    return card;
}
