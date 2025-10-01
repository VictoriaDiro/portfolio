export function renderContact(container) {
    const section = document.createElement("section");
    section.innerHTML = `
        <h2>Contacto</h2>
        <form>
            <label>Nombre: <input type="text" /></label><br>
            <label>Email: <input type="email" /></label><br>
            <label>Mensaje: <textarea></textarea></label><br>
            <button type="submit">Enviar</button>
        </form>
    `;
    container.appendChild(section);
}
