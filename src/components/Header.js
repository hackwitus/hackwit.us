import React from 'react'

class Header extends React.Component {
  render() {
    return (
      <section id="header">
        <div className="inner">
          <span className="icon major fa-code" />
          <h1>HackWITus 2018</h1>
          <p>
            <span className="tagline" > A hackathon for students by students, 
              <br/> with a mission to promote diversity 
              <br/> and accessibility in our tech community. 
            </span>
            <br /> ~
            <br /> Wentworth Institute of Technology
            <br /> Ira Allen Building, Parker St.
            <br /> Boston, Massachusetts 02120
            <br /> November 10th-11th
            <br />
            <a href="https://goo.gl/forms/yitrnC6ri6ujM8l63" className="button special" style={{marginTop: '15px'}} >Register</a>
          </p>
          {this.props.location.pathname === '/' ? null : <a href="/">Home</a>}
        </div>
      </section>
    )
  }
}

export default Header
