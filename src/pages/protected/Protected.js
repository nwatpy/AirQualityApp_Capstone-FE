import React, { Component } from "react";
import mustBeAuthenticated from "../../redux/hoc/mustBeAuthenticated";
import Header from "../../components/header/Header";
import Footer from "../../components/Footer/Footer";

class Protected extends Component {

    render() {
        return (
            <div className="Protected">
                <Header isAuthenticated={this.props.isAuthenticated} />
                <div className="container">
                    <h2>Protected Content</h2>
                </div>
                <Footer />
            </div>
        );
    }
}

export default mustBeAuthenticated(Protected);