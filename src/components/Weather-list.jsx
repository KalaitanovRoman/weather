import React, {Component} from 'react';
import {WeatherBlock} from "./Weather-block";
import '../assets/styles/weather.scss'

export class WeatherList extends Component {
    render() {
        const {
            list,
            city
        } = this.props;

        return (
            <section className="weather-wrapper">
                <h2>Weather in {city.name}</h2>
                <div className="weather-list">
                    {list.map(item => (
                        <WeatherBlock
                            main={item.main}
                            weather={item.weather}
                            clouds={item.clouds.all}
                            date={item.dt_txt}
                            wind={item.wind.speed}
                        />
                    ))}
                </div>
            </section>
        );
    }
}
