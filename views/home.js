export function renderHome(app) {
	const div = document.createElement("div");
	div.classList.add("home");

	div.innerHTML = `

		<div class="home__copy">
			<img src="../assets/images/vdr01.png" alt="" class="">
			<p>Soy Victoria Díaz, desarrolladora Frontend con más de cinco años de experiencia en la creación de interfaces web modernas y accesibles, combinando habilidades técnicas y creativas adquiridas a lo largo de mi carrera. Mi formación incluye estudios en Desarrollo en Aplicaciones Web, Front-End y UX/UI, complementados con certificaciones en JavaScript, Accesibilidad Web y herramientas de diseño digital como Adobe XD y Photoshop.</p>
		</div>

		<p>A lo largo de mi trayectoria profesional he trabajado en empresas como Vass, Sygris y Telefónica Educación Digital, desarrollando proyectos con HTML5, CSS3, Less, Sass, JavaScript, React y Adobe Experience Manager, aplicando metodologías ágiles y buenas prácticas de desarrollo. Mi experiencia se extiende también al mundo multimedia, habiendo trabajado en edición de vídeo, fotografía y gestión de contenidos digitales.</p>

		<p>Además, cuento con experiencia en gestión de comercio electrónico y administración, lo que me permite abordar proyectos con visión integral, combinando creatividad, funcionalidad y eficiencia técnica. Me apasiona la construcción de experiencias digitales intuitivas, accesibles y atractivas, y siempre busco aprender y aplicar nuevas tecnologías para mejorar los productos en los que trabajo.</p>

		<p>Con una mezcla de habilidades técnicas, visión de usuario y experiencia práctica, estoy capacitada para afrontar retos en desarrollo web, accesibilidad y multimedia, aportando valor en cada proyecto y garantizando resultados de calidad.</p>

		<h2>Contacta conmigo</h2>

		<div class="contact__with-me">
			<div>
				<img src="../assets/icons/contact/linkedin.png" alt="" class="">
				<a href="https://www.linkedin.com/in/victoriadiro/" class="contact__linkedin">Victoria Díaz</a>
			</div>
			<div>
				<img src="../assets/icons/contact/github.png" alt="" class="">
				<a href="https://github.com/VictoriaDiro" class="contact__github">Victoria Diro</a>
			</div>
			<div>
				<img src="../assets/icons/contact/email.png" alt="" class="">
				<a href="mailto:victoriadiro01@gmail.com?subject=Contacto desde portfolio" class="contact__email">Victoria Díaz</a>
			</div>
		</div>
    `;

  app.appendChild(div);
}
