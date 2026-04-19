import React from 'react';
import photo from '../photo.jpg';

const Header = ({ head }) => (
  <header className="cv-header">
    <div className="header-layout">
      <img src={photo} alt={head.name} className="cv-photo" />
      <div className="header-info">
        <h1 className="name">{head.name}</h1>

        <div className="contact-info">
          {head.info.map((item, i) => (
            <React.Fragment key={i}>
              <span>{item}</span>
              {i < head.info.length - 1 && <span className="divider">•</span>}
            </React.Fragment>
          ))}
        </div>

        <div className="contact-info">
          <span className="location">{head.location}</span>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
