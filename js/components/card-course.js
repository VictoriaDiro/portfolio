export function CourseCard(course) {
    const card = document.createElement("div");
    card.className = "card course-card";

    card.innerHTML = `
        <div class="course-information">
            <h3>${course.title}</h3>
            <p class="course-school"><strong>${course.school}</strong></p>
            <p class="course-time">${course.time}</p>
        </div>
        <div class="course-certificade">
            ${course.certificate ? `<a href="${course.certificate}" target="_blank">Ver certificado</a>` : ""}
        </div>
    `;

    return card;
}
