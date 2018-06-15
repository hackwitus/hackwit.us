import React from 'react'

class Header extends React.Component {
  render() {
    return (
      <section id="header">
        <div className="inner">
          <span className="icon major fa-code" />
          <h1>HackWITus 2018</h1>
          <p>
            For Students by Students -- 24 Hours -- Free Admission
            <br /> Wentworth Institute of Technology
            <br /> Ira Allen Building, Parker St.
            <br /> Boston, Massachusetts 02120
            <br /> November 10th-11th
          </p>
        </div>
      </section>
    )
  }
}

export default Header
