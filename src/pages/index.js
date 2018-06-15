import React from "react";
import Helmet from "react-helmet";

import image1 from '../assets/images/image1.jpg'
import image4 from '../assets/images/image4.jpg'
import acceleratePic from '../assets/images/sponsors/accelerate2.png'

class Homepage extends React.Component {
    render() {
        const siteTitle = this.props.data.site.siteMetadata.title;

        return (
            <div>
                <Helmet title={siteTitle} />

                <section id="one" className="main style1">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <header className="major">
                                <h2>About</h2>
                            </header>
                            <p>HackWITus is a 24 hour, student organized hackathon for all university students. Hosted by Wentworth Institute of Technology and Accelerate Innovation and Entrepreneurship Center at the beautiful Ira Allen building in downtown Boston, MA on November 10th - 11th. HackWITus strives to provide an inclusive and accesible hacker experience. If you want to attend follow the link below to register.
                            <br/> Learn a new language or play with unique hardware
                            <br/> Compete for awesome prizes and network with the top tech companies Boston has to offer.
                            </p>
                        </div>
                        <div className="col-6">
                            <span className="image fit"><img src={image1} alt="Hackathon attendee sitting in chair at laptop" /></span>
                        </div>
                    </div>
                </section>

                <section id="two" className="main style2">
                    <div className="grid-wrapper">
                        <div className="col-12">
                            <ul className="major-icons">
                                <li><span className="icon faqIcon major fa-bolt"></span></li>
                                <li><span className="icon faqIcon major fa-cog"></span></li>
                                <li><span className="icon faqIcon major fa-question"></span></li>
                            </ul>
                            <header className="major">
                                <h2>Frequently Asked Questions</h2>
                            </header>
                        </div>
                        <div className="col-6">
                            <p><strong>Who can attend?</strong><br/>Any student 18 years or older</p>
                            <p><strong>When and where is it?</strong><br/>The event will be held on November 10th to the 11th inside Wentworth's Ira Allen building, located on Parker St, Boston, MA 02120.</p>
                            <p><strong>Is this a free event?</strong><br/>Yes! Attendence, food, swag, and rental hardware is all completely free! 💸</p>
                            <p><strong>Do I need to be a computer scientist in order to participate?</strong><br/>Not at all! We aim to host an inclusive environment so anyone from any discipline can attend.</p>
                            <p><strong>Do you offer travel reimburesement?</strong><br/>Unfortunately, we cannot provide travel reimbursements at this time.</p>
                            <p><strong>What is there is a change of plans or an emergency?</strong><br/>In the event of a change of plans or an emergency, we will contact you via email. You can also follow us on Twitter for updates.</p>
                        </div>
                        <div className="col-6">
                            <p><strong>Will there be free food and drinks?</strong><br/>There will be multiple meals scheduled throughout the event. Drinks and snacks will also be available. 🌯 ☕️</p>
                            <p><strong>Is there a theme for the hackathon?</strong><br/>Nope! Create whatever you heart desires.</p>
                            <p><strong>What are the rules?</strong><br/>The maximum team size is 5 people. All projects must be started from scratch at the start of the hacking period and completed by the designated time. All participants must follow the enforced <a href="#">Code of Conduct</a>.</p>
                            <p><strong>Is there a schedule?</strong><br/>We currently working on the schedule. Once complete it will be available here on the website and will be sent out via email as well.</p>
                            <p><strong>What should I bring?</strong><br/>Bring your laptop, chargers, a valid ID (preferably student), and comfortable clothes. We also recommend a sleeping bag and pillow so you can take advantage of our designated napping zones 😴</p>
                        
                        </div>
                    </div>
                </section>

                <section id="three" className="main style1 special">
                    <div className="grid-wrapper">
                        <div className="col-12">
                            <header className="major">
                                <h2>Sponsors</h2>
                            </header>
                            <p>Thank you to all our sponsors! Without your support HackWITus would not be possible.
                            <br/><strong>Interested in sponsoring?</strong> Email us at <a href="mailto:sponsors@hackwit.us">sponsors@hackwit.us</a> and download our official sponsorship packet <a href="https://github.com/hackwitus/hackwit.us/raw/master/HackWITus2018_Sponsorship_Packet.pdf">here</a>.
                            </p>
                        </div>
                        <div className="col-12">
                            <header className="major">
                                <h3>Platinum</h3>
                            </header>
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src={acceleratePic} alt="Accelerate Logo"/></span>
                            {/* 
                            <h3>Accelerate Innovation & Entrepreneurship Center</h3> 
                            <p>Company tagline here</p>
                            <ul className="actions">
                                <li><a href="#" className="button">More</a></li>
                            </ul>
                            */}
                        </div>
                        <div className="col-12">
                            <header className="major">
                                <h3>Gold</h3>
                            </header>
                        </div>
                        <div className="col-12">
                            <header className="major">
                                <h3>Silver</h3>
                            </header>
                        </div>
                        <div className="col-12">
                            <header className="major">
                                <h3>Bronze</h3>
                            </header>
                        </div>
                    </div>
                </section>

                <section id="four" className="main style2 special">
                    <div className="container">
                        <header className="major">
                            <h2>Hooked yet? Register below!</h2>
                        </header>
                        <p>After completing the Google Form, follow the prompted link to our eventbrite page and claim your ticket.
                        <br/>Questions or concerns can be directed to <a href="registration@hackwit.us">registration@hackwit.us</a>
                        <br/>If you can no longer attend our event please email <em><a href="registration@hackwit.us">registration</a></em>.
                        </p>
                        <a href="#" className="button special">Sign Up</a>
                    </div>
                </section>

                <section id="five" className="main style1 special">
                    <div className="container">
                        <header className="major">
                            <h2>Mission Statement</h2>
                        </header>
                        <div className="grid-wrapper">
                            <div className="col-6">
                                <p>HackWITus is a community oriented organization that aims to make a home for hackers in the Boston area. We strive to create a positive, energetic environment where any student is free to experiment, innovate, and compete with their peers. We believe that by providing the best resources, we ourselves are encouraging our members to reach their full potential. We go to great lengths because we believe students are the true innovators and will make the greatest impact in the world.</p>
                            </div>
                            <div className="col-6">
                                <span className="image fit"><img src={image4} alt="Hackathon attendee sitting in chair at laptop" /></span>
                            </div>
                        </div>
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