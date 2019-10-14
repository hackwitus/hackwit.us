import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <section id="header">
        <div className="inner">
          <span className="icon major fa-code" />
          <h1>HackWITus 2019</h1>
          <div className="tagline-container">
            <span className="tagline">
              {' '}
              A hackathon for students by students, with a mission to promote
              diversity and accessibility in our tech community.
            </span>
            <br /> ~<br /> Wentworth Institute of Technology
            <br /> CEIS Building, 550 Huntington Ave.
            <br /> Boston, Massachusetts 02115
            <br /> November 9th - 10th
            <br />
            <br />
            {/* <br /> */}
          </div>

          <a
            href="https://registration.hackwit.us/"
            className="button"
          >
            Register Now!
          </a>
          {this.props.location.pathname === '/' ? null : <a href="/">Home</a>}
        </div>
      </section>
    );
  }
}

export default Header;
