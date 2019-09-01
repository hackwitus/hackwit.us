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
            {/* <br /> Ira Allen Building, Parker St.
            <br /> Boston, Massachusetts 02120 */}
            <br /> November 9th - 10th
            <br />
            <br />
            <br />
            {/* <a href="https://goo.gl/forms/yitrnC6ri6ujM8l63" className="button special" style={{marginTop: '15px'}} >Register</a> */}
          </div>
          <div id="mc_embed_signup">
            <form
              action="https://gmail.us20.list-manage.com/subscribe?u=e95b659889f81a452382668e7&id=31fc93c922"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              className="validate"
              target="_blank"
              noValidate
            >
              <div id="mc_embed_signup_scroll">
                {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
                <div
                  style={{ position: 'absolute', left: -5000 + 'px' }}
                  aria-hidden="true"
                >
                  <input
                    type="text"
                    name="b_e95b659889f81a452382668e7_31fc93c922"
                    tabIndex="-1"
                    value=""
                  />
                </div>
                <div className="clear">
                  <input
                    type="submit"
                    value="Subscribe To Event Updates"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    className="button"
                  />
                </div>
              </div>
            </form>
          </div>
          <a
            href="https://hackwitus-registration.herokuapp.com/"
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
