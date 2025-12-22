import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Borislav Grigorov</h2>
        <p><a href="mailto:bobby+personal-website@synkube.com">bobby@synkube.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Bobby. I am a passionate and curious person.
        I studied CS and Physics at <a href="https://www.ubc.ca/">UBC</a>. I presently work at <a href="https://consensys.io/">Consensys</a> as a Sr DevSecOps Engineer and live in Seattle, WA.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Borislav Grigorov <Link to="/">bgrigorov.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
