import React, { Component } from 'react';
import './error.scss'
import {connect} from "react-redux";
import {addTitle} from "../../actions/actionCreator";
import {withRouter} from "react-router-dom";

class ErrorPage extends Component {
    render() {
        return (
            <div className="error-page">
                <h2>RRRR... not found</h2>
                <i className="error-dinosaur"></i>
            </div>
        );
    }
}

export default connect(({ weather }) => ({
    weather
}),null)(ErrorPage);
