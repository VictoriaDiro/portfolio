export function renderHome(app) {
    const div = document.createElement("div");
    div.classList.add("home");

    div.innerHTML = `
        <h1>✨ Bienvenid@ a mi Portfolio ✨</h1>
        <p>Usa el menú para navegar por mis <strong>Trabajos</strong>, 
        <strong>Estudios</strong> y <strong>Cursos</strong>.</p>
    `;

  app.appendChild(div);
}
