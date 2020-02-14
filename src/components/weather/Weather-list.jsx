import React, { Component } from 'react';
import { WeatherBlock } from "./Weather-block";
import './weather.scss'

export class WeatherList extends Component {
    render() {
        const {
            list,
        } = this.props;

        return (
            <section className="weather-wrapper">
                <div className="weather-list">
                    {list.map(item => (
                        <WeatherBlock
                            key={item.dt + new Date().getTime()}
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
