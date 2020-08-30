import React from 'react';
import './Contact.scss';

class Contact extends React.Component {
  render () {
    return (
      <div className="form-container">
        <form className="form" method="GET" action="mailto:victoriadiro01@gmail.com" enctype="text/plain">
          <legend className="form-legend">Si quieres contactar conmigo puedes escribir a info@dirovic.com o rellenar este formulario:</legend>
          <input type="text" className="input__item input__name" placeholder="Nombre" />
          <input type="text" className="input__item input__last-name"placeholder="Apellido" />
          <input type="text" className="input__item input__email" placeholder="E-mail" />
          <textarea rows="8" cols="20" className="input__item form__textarea" />
          <input type="submit" className="input__item sumit__button" />
        </form>
      </div>
    )
  }
}

export default Contact;