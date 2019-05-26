import React from 'react';
import { Link } from 'react-router-dom';

class MoreInfo extends React.Component {
  render () {
    return (
      <div className="moreinfo__container">
        <Link to="moreinfo">Más Información
          <p>Más info</p>
        </Link>
      </div>
    )
  }
}

export default MoreInfo;
