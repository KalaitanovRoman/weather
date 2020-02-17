import React, { Component } from 'react';
import './error.scss'

export class Error extends Component {
    render() {
        return (
            <div className="error-page">
                <h2>RRRR... not found</h2>
                <i className="error-dinosaur"></i>
            </div>
        );
    }
}
