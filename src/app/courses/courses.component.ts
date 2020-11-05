import { Component, OnInit, ViewChild } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
// import { courser } from '../../services/courses.json';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})

export class CoursesComponent implements OnInit {

  courses: any = [
    {
      "title": "Adobe XD",
      "school": "Platzi",
      "time": "Septiembre 2020",
      "certificate": "/pdfs/20-09-10-adobe-xd.pdf"
    },
    {
      "title": "Experiencia de usuario (UX) esencial",
      "school": "LinckedIn Learning",
      "time": "Mayo 2020",
      "certificate": "/pdfs/20-05-01-experiencia-de-usuario-ux-esencial.pdf"
    },
    {
    "title": "Conviértete en desarrollador JavaScript",
    "school": "LinkedIn Learning",
    "time": "Mayo 2020",
    "certificate": "/pdfs/20-05-01-conviertete-en-desarrollador-javascript.pdf"
    },
    {
      "title": "Fundamentos esenciales de la programación",
      "school": "LinkedIn Learning",
      "time": "Mayo 2020",
      "certificate": "/pdfs/20-05-01-fundamentos-esenciales-de-la-programacion.pdf"
    },
    {
      "title": "Programación JavaScript y PHP",
      "school": "Core Networks",
      "time": "Abril 2020",
      "certificate": "/pdfs/20-04-06-programacion-javascript-PHP.pdf"
    },
    {
      "title": "Novedades JavaScript versión ES6",
      "school": "LinkedIn Learning",
      "time": "Abril 2020",
      "certificate": "/pdfs/20-04-30-novedades-javascript-version-es6.pdf"
    },
    {
      "title": "JavaScript avanzado: Buenas prácticas",
      "school": "LinkedIn Learning",
      "time": "Abril 2020",
      "certificate": "/pdfs/20-04-27-javascript-avanzado-buenas-practicas.pdf"
    },
    {
      "title": "D3.js avanzado: Visualización de datos",
      "school": "LinkedIn Learning",
      "time": "Abril 2020",
      "certificate": "/pdfs/20-04-20-d3js-avanzado-visualizacion-de-datos-en-tiempo-real.pdf"
    },
    {
      "title": "Herramientas para teletrabajo",
      "school": "LinkedIn Learning",
      "time": "Abril 2020",
      "certificate": "/pdfs/20-04-10-herramientas-para-teletrabajo.pdf"
    },
    {
      "title": "Deseño web con HTML5 + CSS3",
      "school": "Miríadax",
      "time": "Abril 2020",
      "certificate": "/pdfs/20-04-10-diseño-web-html5-css.pdf"
    },
    {
      "title": "jQuery esencial",
      "school": "LinkedIn Learning",
      "time": "Abril 2020",
      "certificate": "/pdfs/20-04-07-jquery-esencial.pdf"
    },
    {
      "title": "JavaScript avanzado: Expresiones regulares",
      "school": "LinkedIn Learning",
      "time": "Abril 2020",
      "certificate": "/pdfs/20-04-07-javaScript-avanzado-expresiones-regulares.pdf"
    },
    {
      "title": "Creatividad con un café",
      "school": "LinkedIn Learning",
      "time": "Abril 2020",
      "certificate": "/pdfs/20-04-07-creatividad-con-un-cafe.pdf"
    },
    {
      "title": "Liferay Portal: Gestión de contenidos",
      "school": "Udemy",
      "time": "Abril 2020",
      "certificate": "/pdfs/20-04-04-liferayportal-gestion-de-contenidos-y-administracion.pdf"
    },
    {
      "title": "JavaScript: Programación orientada a objetos",
      "school": "LinkedIn Learning",
      "time": "Febrero 2020",
      "certificate": "/pdfs/20-02-13-javascript-programacion-orientada-a-objetos.pdf"
    },
    {
      "title": "Tecnologías web",
      "school": "LinkedIn Learning",
      "time": "Enero 2020",
      "certificate": "/pdfs/20-01-13-fundamentos-del-desarrollo-web.pdf"
    },
    {
      "title": "JavaScript esencial",
      "school": "LinkedIn Learning",
      "time": "Enero 2020",
      "certificate": "/pdfs/20-01-12-javascript-esencial.pdf"
    },
    {
      "title": "Lógica Programación",
      "school": "Udemy",
      "time": "Enero 2020",
      "certificate": "/pdfs/20-01-02-logica-en-programacion.pdf"
    },
    {
      "title": "Fundamentos de programación con Java",
      "school": "Udemy",
      "time": "Agosto 2019",
      "certificate": "/pdfs/19-08-05-fundamentos-de-programacion-con-java.pdf"
    },
    {
      "title": "JavaScript ES6",
      "school": "Udemy",
      "time": "Julio 2019",
      "certificate": "/pdfs/19-07-01-javascript-es6.pdf"
    },
    {
      "title": "Programa 'Progresa Digitalmente'",
      "school": "GRI en colaboración con Facebook",
      "time": "Enero 2019",
      "certificate": "/pdfs/19-01-16-programa -progresa-digitalmente.pdf"
    },
    {
      "title": "JavaScript course",
      "school": "Solo Learn",
      "time": "Enero 2019",
      "certificate": "/pdfs/19-01-16-javascript-tutorial-course.pdf"
    },
    {
      "title": "CSS Fundamentals course",
      "school": "Solo Learn",
      "time": "Noviembre 2018",
      "certificate": "/pdfs/18-11-24-css-fundamentals-course.pdf"
    },
    {
      "title": "HTML Fundamentals course",
      "school": "Solo Learn",
      "time": "Octubre 2018",
      "certificate": "/pdfs/18-10-12-html-fundamentals-course.pdf"
    }
  ];

  @ViewChild('swiper', {static: false}) swiper: any;

  SWIPER_HORIZONTAL: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 4,
    spaceBetween: 15,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  };


  constructor() { }

  ngOnInit(): void {
  }

}
