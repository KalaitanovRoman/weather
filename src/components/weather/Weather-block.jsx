import React, { Component } from 'react';

export class WeatherBlock extends Component {
    render() {
        const {
            date,
            wind,
            main,
            weather
        } = this.props;
        const dateFormatter = new Date(date).toLocaleDateString();
        const imgURL2 = `weather-block-icon owf owf-${weather[0].id} owf-3x icon-style`;

        return (
            <div className="weather-block">
                <div className="weather-block-header">
                    <i className={imgURL2}></i>
                    <span className="weather-block-temperature">{Math.floor(main.temp)}℃</span>
                    <span className="weather-block-date">{dateFormatter}</span>
                </div>
                <div className="weather-block-body">
                    <div className="weather-block-content">
                        <p>Humidity:</p>
                        <span>{main.humidity}%</span>
                    </div>
                    <div className="weather-block-content">
                        <p>Feels like:</p>
                        <span>{Math.floor(main.feels_like)}℃</span>
                    </div>
                    <div className="weather-block-content">
                        <p>Wind speed:</p>
                        <span>{Math.floor(wind)} km/h</span>
                    </div>
                </div>
            </div>
        );
    }
}
