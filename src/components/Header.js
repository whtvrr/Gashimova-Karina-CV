import React from 'react';

const Header = ({ head }) => (
  <header className="cv-header">
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
  </header>
);

export default Header;
