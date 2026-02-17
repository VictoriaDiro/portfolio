const courses = [
    {
        "institution": "Solo Learn",
        "degree": "Introducción a Java",
        "period": "Octubre 2025",
        "certificate": "../assets/pdf/courses/20251009_sololearn_introduccion-java.pdf"
    },
    {
        "institution": "Big School",
        "degree": "Desarrollo con IA",
        "period": "Octubre 2025",
        "certificate": "../assets/pdf/courses/20251006_bigschool_desarrollo-con-ia.pdf"
    },
    {
        "institution": "UNED",
        "degree": "Aplcación del Estándar Europeo del Accesibilidad TIC",
        "period": "Junio 2025",
        "certificate": "../assets/pdf/courses/20250617_uned_accesibilidad-tic.pdf"
    },
    {
        "institution": "Udemy",
        "degree": "Accesibilidad Web",
        "period": "Diciembre 2024",
        "certificate": "../assets/pdf/courses/20241210_udemy_accesibilidad-web.pdf"
    },
    {
        "institution": "W3Schools",
        "degree": "Certified JavaScript Developer",
        "period": "Octubre 2024",
        "certificate": "../assets/pdf/courses/20241016_w3chools_javascript-developer.pdf"
    },
    {
        "institution": "Samsung Desarrolladoras",
        "degree": "Desarrollo Frontend",
        "period": "Febrero 2023",
        "certificate": ""
    },
    {
        "institution": "Platzi",
        "degree": "Accesibilidad Web",
        "period": "Febrero 2022",
        "certificate": ""
    },
    {
        "institution": "Platzi",
        "degree": "Adobe XD",
        "period": "Septiembre 2020",
        "certificate": "../assets/pdf/courses/20200910_platzi_adobe-xd.pdf"
    },
    {
        "institution": "LinkedIn Learning",
        "degree": "UX: Máster en Diseño Web y Experiencia de Usuario",
        "period": "Julio 2020",
        "certificate": "../assets/pdf/courses/20200731_udemy_master-diseño-web-y-ux.pdf"
    },
    {
        "institution": "LinkedIn Learning",
        "degree": "Conviértete en desarrollador JavaScript",
        "period": "Mayo 2020",
        "certificate": "../assets/pdf/courses/20200501_linkedin_conviertete-en-desarrollador-javascript.pdf"
    },
    {
        "institution": "LinkedIn Learning",
        "degree": "Fundamentos esenciales de la programación",
        "period": "Mayo 2020",
        "certificate": "../assets/pdf/courses/20200501_linkedin_fundamentos-esenciales-de-la-programacion.pdf"
    },
    {
        "institution": "LinckedIn Learning",
        "degree": "Diseño de interfaz (UX) esencial",
        "period": "Mayo 2020",
        "certificate": "../assets/pdf/courses/20200503_linkedin_ui.png"
    },
    {
        "institution": "LinckedIn Learning",
        "degree": "Experiencia de usuario (UX) esencial",
        "period": "Mayo 2020",
        "certificate": "../assets/pdf/courses/20200501_linkedin_ux-esencial.pdf"
    },
    {
        "institution": "LinkedIn Learning",
        "degree": "UX y prototipado para web y dispositivos móviles",
        "period": "Mayo 2020",
        "certificate": "../assets/pdf/20200502_linkedin_ux-y-prototipado-web.png"
    },
    {
        "institution": "LinkedIn Learning",
        "degree": "Novedades JavaScript versión ES6",
        "period": "Abril 2020",
        "certificate": "../assets/pdf/courses/20200430_linkedin_novedades-javascript-version-es6.pdf"
    },
    {
        "institution": "LinkedIn Learning",
        "degree": "JavaScript avanzado: Buenas prácticas",
        "period": "Abril 2020",
        "certificate": "../assets/pdf/courses/20200427_linkedin_javascript-avanzado-buenas-practicas.pdf"
    },
    {
        "institution": "LinkedIn Learning",
        "degree": "D3.js avanzado: Visualización de datos",
        "period": "Abril 2020",
        "certificate": "../assets/pdf/courses/20200420_linkedin_d3js-avanzado-visualizacion-de-datos-en-tiempo-real.pdf"
    },
    {
        "institution": "LinkedIn Learning",
        "degree": "Herramientas para teletrabajo",
        "period": "Abril 2020",
        "certificate": "../assets/pdf/courses/20200410_linkedin_herramientas-para-teletrabajo.pdf"
    },
    {
        "institution": "Miríadax",
        "degree": "Deseño web con HTML5 + CSS3",
        "period": "Abril 2020",
        "certificate": "../assets/pdf/courses/20200410_miriadax_diseño-web-html5-css.pdf"
    },
    {
        "institution": "LinkedIn Learning",
        "degree": "jQuery esencial",
        "period": "Abril 2020",
        "certificate": "../assets/pdf/courses/20200407_linkedin_jquery-esencial.pdf"
    },
    {
        "institution": "LinkedIn Learning",
        "degree": "JavaScript avanzado: Expresiones regulares",
        "period": "Abril 2020",
        "certificate": "../assets/pdf/courses/20200407_linkedin_javascript-regex.pdf"
    },
    {
        "institution": "LinkedIn Learning",
        "degree": "Creatividad con un café",
        "period": "Abril 2020",
        "certificate": "../assets/pdf/courses/20200407_linkedin_creatividad-con-un-cafe.pdf"
    },
    {
        "institution": "Udemy",
        "degree": "Liferay Portal: Gestión de contenidos",
        "period": "Abril 2020",
        "certificate": "../assets/pdf/courses/20200404_udemy_liferayportal-cms-admin.pdf"
    },
    {
        "institution": "Core Networks",
        "degree": "Programación JavaScript y PHP",
        "period": "Febrero 2020",
        "certificate": ""
    },
    {
        "institution": "LinkedIn Learning",
        "degree": "JavaScript: Programación orientada a objetos",
        "period": "Febrero 2020",
        "certificate": "../assets/pdf/courses/20200213_linkedin_javascript-poo.pdf"
    },
    {
        "institution": "LinkedIn Learning",
        "degree": "Tecnologías web",
        "period": "Enero 2020",
        "certificate": ""
    },
    {
        "institution": "LinkedIn Learning",
        "degree": "JavaScript esencial",
        "period": "Enero 2020",
        "certificate": "../assets/pdf/courses/20200112_linkedin_javascript-esencial.pdf"
    },
    {
        "institution": "Udemy",
        "degree": "Lógica Programación",
        "period": "Enero 2020",
        "certificate": "../assets/pdf/courses/20200102_udemy_logica-en-programacion.pdf"
    },
    {
        "institution": "Appcademy",
        "degree": "Progressive Web App",
        "period": "Diciembre 2019",
        "certificate": ""
    },
    {
        "institution": "Udemy",
        "degree": "Fundamentos de programación con Java",
        "period": "Agosto 2019",
        "certificate": "../assets/pdf/courses/20190805_udemy_fundamentos-de-programacion-con-java.pdf"
    },
    {
        "institution": "Udemy",
        "degree": "JavaScript ES6",
        "period": "Julio 2019",
        "certificate": "../assets/pdf/courses/20190701_udemy_javascript-es6.pdf"
    },
    {
        "institution": "GRI en colaboración con Facebook",
        "degree": "Programa 'Progresa Digitalmente'",
        "period": "Enero 2019",
        "certificate": "../assets/pdf/courses/20190116_facebook_programa-progresa-digitalmente.pdf"
    },
    {
        "institution": "Solo Learn",
        "degree": "JavaScript Fundamentals",
        "period": "Enero 2019",
        "certificate": "../assets/pdf/courses/20190116_udemy_javascript-fundamentals.pdf"
    },
    {
        "institution": "Solo Learn",
        "degree": "CSS Fundamentals",
        "period": "Noviembre 2018",
        "certificate": "../assets/pdf/courses/20181124_sololearn_css-fundamentals.pdf"
    },
    {
        "institution": "Solo Learn",
        "degree": "HTML Fundamentals",
        "period": "Octubre 2018",
        "certificate": "../assets/pdf/courses/20181012_sololearn_html-fundamentals.pdf"
    }
]

export default courses;
