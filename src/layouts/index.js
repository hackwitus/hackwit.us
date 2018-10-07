import React from "react";
import "../assets/scss/main.scss";

import Header from "../components/Header";
import Footer from "../components/Footer";

class Template extends React.Component {
    render() {
        const { children } = this.props;

        return (
            <div className='body'>
                <Header location={this.props.location} />
                {children()}
                <Footer />
            </div>
        );
    }
}

Template.propTypes = {
    children: React.PropTypes.func
};

export default Template;
