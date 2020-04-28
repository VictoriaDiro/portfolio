import React from 'react';
import './MoreInfo.scss';

class MoreInfo extends React.Component {
  render () {
    return (
      <div className="moreinfo__container">

          <ul className="work__experience"><h2 className="work__title">Laboral</h2>
            <li className="work__experience__item">
              <h4 className="work__title">Maquetadora Web</h4>
              <h5 className="work__company">Telefónica Edicación Digital</h5>
              <span className="work__time">mar. 2020 - ACTUALIDAD</span>
              <div className="work__skills">
                <ul className="work__skills__list">
                  <li className="work__skills__list__item">HTML, CSS, Sass, Javascript</li>
                  <li className="work__skills__list__item">LifeRay</li>
                  <li className="work__skills__list__item">Scrum, Agile, Redmine</li>
                  <li className="work__skills__list__item">Eclipse</li>
                </ul>
              </div>
            </li>

            <li className="work__experience__item">
              <h4 className="work__title">Desarrolladora Front End</h4>
              <h5 className="work__company">Osoco</h5>
              <span className="work__time">jul. 2019 - feb. 2020</span>
              <div className="work__skills">
                <ul className="work__skills__list">
                  <li className="work__skills__list__item">HTML, CSS, Sass, Bootstrap</li>
                  <li className="work__skills__list__item">Javascript, ReactJs</li>
                  <li className="work__skills__list__item">Git, GitHub, GitLab, Bitbucket, Phabricator</li>
                  <li className="work__skills__list__item">Scrum, Agile, Redmine</li>
                </ul>
              </div>
            </li>

            <li className="work__experience__item">
              <h4 className="work__title">Administrativo</h4>
              <h5 className="work__company">24Studio</h5>
              <span className="work__time">ago. 2018 - ene. 2019</span>
              <div className="work__skills">
                <ul className="work__skills__list">
                  <li className="work__skills__list__item">Microsoft Excel, Wrod, PowerPoint</li>
                  <li className="work__skills__list__item">Gestión de alumnado</li>
                  <li className="work__skills__list__item">Balance de ingresos, gastos</li>
                  <li className="work__skills__list__item">Gestión de web corporativa en Wordpress</li>
                </ul>
              </div>
            </li>

            <li className="work__experience__item">
              <h4 className="work__title">Administrativo</h4>
              <h5 className="work__company">Montana Shop Madrid</h5>
              <span className="work__time">ene. 2015 - dic. 2018</span>
              <div className="work__skills">
                <ul className="work__skills__list">
                  <li className="work__skills__list__item">Microsoft Excel, Wrod, PowerPoint</li>
                  <li className="work__skills__list__item">Listados de facturación</li>
                  <li className="work__skills__list__item">Balance de ingresos, gastos</li>
                  <li className="work__skills__list__item">Contacto con proveedores, banco</li>
                </ul>
              </div>
            </li>

            <li className="work__experience__item">
              <h4 className="work__title">Equipo de cámara y edición de vídeo y fotografía</h4>
              <h5 className="work__company">VD Photo<a className="work__link" href="http://victoriadiazphotography.com/" target="_blank">[Web]</a></h5>
              <span className="work__time">dic. 2010 - ene. 2018</span>
              <div className="work__skills">
                <ul className="work__skills__list">
                  <li className="work__skills__list__item">Cámaras de cine, vídeo, réflex</li>
                  <li className="work__skills__list__item">Operadora, ayudante de cámara</li>
                  <li className="work__skills__list__item">Adobe Premiere, Adobe Photoshop, Adobe Bridge, Final Cut</li>
                  <li className="work__skills__list__item">Creación de páginas web en Wordpress</li>
                </ul>
              </div>
            </li>

            <li className="work__experience__item">
              <h4 className="work__title">Gerente en comercio electrónico</h4>
              <h5 className="work__company">Telefónica Edicación Digital</h5>
              <span className="work__time">abr. 2008 - dic. 2014</span>
              <div className="work__skills">
                <ul className="work__skills__list">
                  <li className="work__skills__list__item">Gestión de comercio online en PrestaShop</li>
                  <li className="work__skills__list__item">Gestión de pedidos y stock</li>
                  <li className="work__skills__list__item">Atención al cliente</li>
                  <li className="work__skills__list__item">Captura y edición de fotografía</li>
                </ul>
              </div>
            </li>

            <li className="work__experience__item">
              <h4 className="work__title">Fotoperiodista</h4>
              <h5 className="work__company">Teleprensa Madrid</h5>
              <span className="work__time">abr. 2010 - may. 2011</span>
              <div className="work__skills">
                <ul className="work__skills__list">
                  <li className="work__skills__list__item">Captura y edición de fotografía</li>
                  <li className="work__skills__list__item">Redacción de artículos de prensa</li>
                </ul>
              </div>
            </li>
          </ul>

          <ul className="education__container"><h2 className="education__title">Formación</h2>
          <li className="education__item">
              <h4 className="education__title">Desarrollo Front-End</h4>
              <h5 className="education__school">Adalab</h5>
              <span className="education__time">feb. 2019 - jun. 2019</span>
              <div className="education__skills">
                <ul className="education__skills__list">
                  <li className="education__skills__list__item">HTML5, CSS3, Flexbox, CSS Grid, Responsive, SASS, Bootstrap, animaciones</li>
                  <li className="education__skills__list__item">JavaScript, ES6 y SPAs con React</li>
                  <li className="education__skills__list__item">Control de versiones con Git</li>
                  <li className="education__skills__list__item">Metodologías ágiles</li>
                  <li className="education__skills__list__item">Slack, Trello y GitHub</li>
                </ul>
              </div>
            </li>
          </ul>

      </div>
    )
  }
}

export default MoreInfo;
