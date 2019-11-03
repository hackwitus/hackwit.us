import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <section id="footer">
        <ul className="icons">
          <li>
            <a
              href="https://twitter.com/hackwitus"
              target="_blank"
              className="icon alt fa-twitter"
            >
              <span className="label">Twitter</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/hackwitus/"
              className="icon alt fa-facebook"
              target="_blank"
            >
              <span className="label">Facebook</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/hackwitus/"
              className="icon alt fa-instagram"
              target="_blank"
            >
              <span className="label">Instagram</span>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/hackwitus"
              className="icon alt fa-github"
              target="_blank"
            >
              <span className="label">GitHub</span>
            </a>
          </li>
          <li>
            <a
              href="mailto:contact@hackwit.us"
              target="_blank"
              className="icon alt fa-envelope"
            >
              <span className="label">Email</span>
            </a>
          </li>
          {/* <li><a href="https://www.eventbrite.com/e/hackwitus-2018-tickets-46911355126" target="_blank" className="icon alt fa-ticket"><span className="label">Eventbrite</span></a></li> */}
        </ul>
        <ul className="copyright">
          <li>&copy; HackWITus</li>
          <li><a href="/code_of_conduct">HackWITus Code of Conduct</a></li>
          <li><a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" target="_blank">MLH Code of Conduct</a></li>
          <li>
            Design: <a href="http://html5up.net">HTML5 UP</a>
          </li>
        </ul>
      </section>
    );
  }
}

export default Footer;
