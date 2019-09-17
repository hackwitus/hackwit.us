import React from "react";
import Helmet from "react-helmet";

import image1 from "../assets/images/image1.jpg";
import mainImage from "../assets/images/main2.jpg";
import image4 from "../assets/images/image4.jpg";
import acceleratePic from "../assets/images/sponsors/accelerate2.png";
import shellPic from "../assets/images/sponsors/Techworks_logo.png";
import githubPic from "../assets/images/sponsors/GitHub_logo.png";
import sketchPic from "../assets/images/sponsors/sketch-logo.png";
import stickermulePic from "../assets/images/sponsors/stickermule_logo.png";
import particlePic from "../assets/images/sponsors/ParticleIO_logo.png";
import coopsPic from "../assets/images/sponsors/CoopsCareers_logo.png";
import IlMondoPic from "../assets/images/sponsors/ilMondoLogo.jpg";
import witCSPic from "../assets/images/sponsors/Computer_Science_Dept.jpg";
import googlePic from "../assets/images/sponsors/google.png";
import witaPic from "../assets/images/sponsors/wita.png";
import swePic from "../assets/images/sponsors/SWE_logo.png";
import witLeadership from "../assets/images/sponsors/witLeadership.png";

class Homepage extends React.Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title;

    return (
      <div>
        <Helmet title={siteTitle} />

        {/* <a
          id="mlh-trust-badge"
          style={{
            display: "block",
            maxWidth: "100px",
            minWidth: "60px",
            position: "fixed",
            right: "50px",
            top: 0,
            width: "10%",
            zIndex: "10000"
          }}
          href="https://mlh.io/seasons/na-2020/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2020-season&utm_content=yellow"
          target="_blank"
        >
          <img
            src="https://s3.amazonaws.com/logged-assets/trust-badge/2020/mlh-trust-badge-2020-yellow.svg"
            alt="Major League Hacking 2020 Hackathon Season"
            style={{ width: "100%" }}
          />
        </a> */}

        <section id="one" className="main style1 special">
          <div className="container">
            <header className="major">
              <h2>Mission Statement</h2>
            </header>
            <div className="grid-wrapper">
              <div className="col-6" style={{ textAlign: "left" }}>
                <p>
                  HackWITus is a community oriented organization that aims to
                  make a home for hackers in the Boston area. We strive to
                  create a positive, energetic environment where any student is
                  free to experiment, innovate, and compete with their peers. We
                  believe that by providing the best resources, we ourselves are
                  encouraging our members to reach their full potential. We go
                  to great lengths because we believe students are the true
                  innovators and will make the greatest impact in the world.
                </p>
                <p>
                  A central goal for HackWITus 2019 is to create a more diverse
                  and inclusive environment for all hackers. In order to achieve
                  our goal, we are taking steps to organize the event in a
                  manner that provides a welcoming and fun experience for all
                  attendees. Some things we are working on include:
                </p>
                <ul>
                  <li>
                    Tracking gender and nationality identifiers so we can report
                    on our diversity growth over time.
                  </li>
                  <li>
                    Providing gender-neutral bathrooms. There will be at least
                    one gender-neutral bathroom on every floor. We will still
                    provide Male and Female bathrooms for those who wish to use
                    them instead.
                  </li>
                  <li>
                    Translating our material into multiple languages in order to
                    eliminate any sort of language barrier for attendees and
                    sponsors.
                  </li>
                  {/* <li>
                    Collaborating with diversity & inclusion organizations at
                    Wentworth. These organizations inlcude: WILD, WSG, Diversity
                    Center, SWE, NSBE, and more.
                  </li>
                  <li>
                    Establishing relationships with child care and disability
                    services for attendees requiring them.
                  </li> */}
                </ul>
              </div>
              <div className="col-6">
                <span className="image fit">
                  <img src={image4} alt="Hackathon organizer team" />
                </span>
                <h2>Affiliate Organizations</h2>
                <span className="image fit">
                  <img src={acceleratePic} alt="Accelerate logo" />
                </span>
              </div>
              {/* <div className="col-12">
                <header className="major">
                  <h2>Partner Clubs</h2>
                </header>
              </div>
              <div className="col-3" />
              <div className="col-3">
                <span className="image fit">
                  <img src={witaPic} alt="WITA logo" />
                </span>
              </div>
              <div className="col-3">
                <span className="image fit">
                  <img src={swePic} alt="SWE logo" />
                </span>
              </div>
              <div className="col-3" /> */}
            </div>
          </div>
        </section>

        <section id="two" className="main style2">
          <div className="grid-wrapper">
            <div className="col-12">
              <header className="major">
                <h2>Event Schedule Coming Soon</h2>
              </header>
            </div>
            {/* <div className="col-6">
              <h4>
                <strong>Saturday</strong>
              </h4>
              <p>
                <strong>9:00 AM</strong> - Check In Opens
                <br />
                <strong>11:00 AM</strong> - Opening Keynote
                <br />
                <strong>12:00 PM</strong> - Hacking Begins/Team Formation
                <br />
                <strong>1:00 PM</strong> - Google Platform Workshop
                <br />
                <strong>2:00 PM</strong> - Lunch
                <br />
                <strong>3:00 PM</strong> - Prof. Carpenter's Team Challenge
                Workshop
                <br />
                <strong>5:00 PM</strong> - Memo Workshop
                <br />
                <strong>7:00 PM</strong> - Dinner
                <br />
                <strong>8:00 PM</strong> - MLH Mini Event
                <br />
                <strong>12:00 AM</strong> - Midnight Snack
                <br />
              </p>
            </div>
            <div className="col-6">
              <h4>
                <strong>Sunday</strong>
              </h4>
              <p>
                <strong>8:00 AM</strong> - Breakfast
                <br />
                <strong>11:00 AM</strong> - Submissions End
                <br />
                <strong>12:00 PM</strong> - Hacking Ends - Lunch Break
                <br />
                <strong>1:00 PM</strong> - Science Fair Demo
                <br />
                <strong>2:00 PM</strong> - Science Fair Demo
                <br />
                <strong>3:00 PM</strong> - Closing Ceremonies
                <br />
                <strong>4:00 PM</strong> - End of Event
                <br />
              </p>
            </div> */}
            <div className="col-12">
              <ul className="major-icons">
                <li>
                  <span className="icon faqIcon major fa-bolt" />
                </li>
                <li>
                  <span className="icon faqIcon major fa-cog" />
                </li>
                <li>
                  <span className="icon faqIcon major fa-question" />
                </li>
              </ul>
              <header className="major">
                <h2>Frequently Asked Questions</h2>
              </header>
            </div>
            <div className="col-6">
              <p>
                <strong>Who can attend?</strong>
                <br />
                Any student 18 years or older
              </p>
              <p>
                <strong>When and where is it?</strong>
                <br />
                We are still in the early planning stages of the event but are
                hoping to host it this Fall.
              </p>
              <p>
                <strong>Is this a free event?</strong>
                <br />
                Yes! Attendance, food, swag, and rental hardware is all
                completely free! 💸
              </p>
              <p>
                <strong>
                  Do I need to be a computer scientist in order to participate?
                </strong>
                <br />
                Not at all! We aim to host an inclusive environment so anyone
                from any discipline can attend.
              </p>
              <p>
                <strong>Do you offer travel reimbursement?</strong>
                <br />
                Unfortunately, we cannot provide travel reimbursements at this
                time.
              </p>
              <p>
                <strong>
                  What is there is a change of plans or an emergency?
                </strong>
                <br />
                In the event of a change of plans or an emergency, we will
                contact you via email. You can also follow us on Twitter for
                updates.
              </p>
            </div>
            <div className="col-6">
              <p>
                <strong>Will there be free food and drinks?</strong>
                <br />
                There will be multiple meals scheduled throughout the event.
                Drinks and snacks will also be available. 🌯 ☕️
              </p>
              <p>
                <strong>Is there a theme for the hackathon?</strong>
                <br />
                Nope! Create whatever you heart desires.
              </p>
              <p>
                <strong>What are the rules?</strong>
                <br />
                The maximum team size is 5 people. All projects must be started
                from scratch at the start of the hacking period and completed by
                the designated time. All participants must follow the enforced{" "}
                <a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf">
                  Code of Conduct
                </a>
                .
              </p>
              <p>
                <strong>Is there a schedule?</strong>
                <br />
                We currently working on the schedule. Once complete it will be
                available here on the website and will be sent out via email as
                well.
              </p>
              <p>
                <strong>What should I bring?</strong>
                <br />
                Bring your laptop, chargers, a valid ID (preferably student),
                and comfortable clothes. We also recommend a sleeping bag and
                pillow so you can take advantage of our designated napping zones
                😴
              </p>
            </div>
          </div>
          <div className="col-4" style={{ textAlign: "center" }}>
            <h2>Got More Questions?</h2>
            <a href="https://discord.gg/SJkjrtZ" className="button special">
              Join Our Discord
            </a>
          </div>
        </section>

        <section id="three" className="main style1">
          <div className="grid-wrapper">
            <div className="col-6">
              <header className="major">
                <h2>About</h2>
              </header>
              {/* <p>
                HackWITus is a 24 hour, student organized hackathon for all
                university students. Hosted by Wentworth Institute of Technology
                and Accelerate Innovation and Entrepreneurship Center at the
                beautiful Ira Allen building in downtown Boston, MA on November
                10th - 11th. HackWITus strives to provide an inclusive and
                accesible hacker experience. If you want to attend follow the
                link below to register.
                <br /> Learn a new language or play with unique hardware
                <br /> Compete for awesome prizes and network with the top tech
                companies Boston has to offer.
              </p> */}
              <p>
                HackWITus is a 24 hour, student organized hackathon for all
                university students. Hosted by Wentworth Institute of Technology
                and Accelerate Innovation and Entrepreneurship Center, HackWITus
                strives to provide an inclusive and accessible hacker
                experience. Come learn a new language or experiment with
                hardware, compete for awesome prizes, and network with the top
                tech companies Boston has to offer!
              </p>
            </div>
            <div className="col-6">
              <span className="image fit">
                <img
                  src={mainImage}
                  alt="Attendees in main foyer area participating in hackathon event"
                />
              </span>
            </div>
          </div>
        </section>

        {/* <section id="four" className="main style2 special">
          <div className="container">
            <header className="major">
              <h2>Hooked yet? Register below!</h2>
            </header>
            <p>
              After completing the Google Form, follow the prompted link to our
              eventbrite page and claim your ticket.
              <br />
              Questions or concerns can be directed to{" "}
              <a href="mailto:registration@hackwit.us">
                registration@hackwit.us
              </a>
              <br />
              If you can no longer attend our event please email{" "}
              <em>
                <a href="mailto:registration@hackwit.us">registration</a>
              </em>
              .
            </p>
            <a
              href="https://goo.gl/forms/yitrnC6ri6ujM8l63"
              className="button special"
            >
              Register
            </a>
          </div>
        </section> */}

        <section id="five" className="main style1 special">
          <div className="grid-wrapper">
            <div className="col-12">
              <header className="major">
                <h2>Sponsors</h2>
              </header>
              <p>
                Thank you to all our sponsors! Without your support HackWITus
                would not be possible.
                <br />
                <strong>Interested in sponsoring?</strong> Email us at{" "}
                <a href="mailto:sponsors@hackwit.us">sponsors@hackwit.us</a> and
                download our official sponsorship packet{" "}
                <a href="https://github.com/hackwitus/hackwit.us/raw/master/HackWITus2019_Sponsorship_Packet.pdf">
                  here
                </a>
                .
              </p>
            </div>
            <div className="col-12">
              <header className="major">
                <h3>Platinum</h3>
              </header>
            </div>

            <div className="col-12">
              <header className="major">
                <h3>Gold</h3>
              </header>
            </div>
            <div className="col-3" />
            <div className="col-3">
              <a href="https://sites.wit.edu/accelerate/" className="image fit">
                <img src={acceleratePic} alt="Accelerate Logo" />
              </a>
            </div>
            <div className="col-3 ">
              <a href="https://www.particle.io/" className="image fit">
                <img src={particlePic} alt="Particle Logo" />
              </a>
            </div>
            <div className="col-3" />

            <div className="col-12">
              <header className="major">
                <h3>Silver</h3>
              </header>
            </div>
            <div className="col-4" />
            <div className="col-4">
              <a
                href="https://wit.edu/computer-science-networking"
                className="image fit"
              >
                <img src={witCSPic} alt="Wentworth Computer Science" />
              </a>
            </div>
            <div className="col-4" />
            <div className="col-12">
              <header className="major">
                <h3>Bronze</h3>
              </header>
            </div>
            <div className="col-2"></div>
            <div className="col-4 ">
              <a
                href="https://coopsandcareers.wit.edu/"
                className="image fit"
                style={{
                  marginTop: "3rem"
                }}
              >
                <img src={coopsPic} alt="WIT Co-ops and Careers Logo" />
              </a>
            </div>
            <div className="col-4">
              <a
                href="https://wit.edu/student-leadership"
                className="image fit"
              >
                <img src={witLeadership} alt="WIT Leadership Institute" />
              </a>
            </div>
            <div className="col-2"></div>

            <div className="col-2"></div>
            <div className="col-4 ">
              <a href="https://github.com" className="image fit">
                <img src={githubPic} alt="GitHub Logo" />
              </a>
            </div>
            <div className="col-4">
              <a
                href="https://sketch.com"
                className="image fit"
              >
                <img src={sketchPic} alt="Sketch Logo" />
              </a>
            </div>
            <div className="col-2"></div>

            <div className="col-4"></div>
          </div>
        </section>

        <section id="six" className="main style2">
          <div className="col-4">
            <h2 style={{ textAlign: "center" }}>
              Want to become an Organizer?
            </h2>
            <div style={{ width: "80%", margin: "auto" }}>
              <p>
                We are looking for passionate people who want to get experience
                organizing Wentworth's biggest student run event HackWITus! Get
                first hand experience what it's like to
              </p>
              <ul>
                <li>Work with a team of diverse individuals</li>
                <li>
                  Connect with industry professionals and leading companies
                </li>
                <li>
                  Harnessing your creative talent and design marketing material
                </li>
                <li>
                  Develop better user experiences and learn new technologies
                </li>
                <li>
                  Budget resources and research optimal costs for the best event
                  ever
                </li>
              </ul>
            </div>
          </div>

          <div className="col-4" style={{ textAlign: "center" }}>
            <h3>Interested yet?</h3>
            <a
              href="https://forms.gle/LFA9Yf3maSGXMNYa9"
              className="button special"
            >
              Organizer Application
            </a>
          </div>
        </section>
      </div>
    );
  }
}

Homepage.propTypes = {
  route: React.PropTypes.object
};

export default Homepage;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
