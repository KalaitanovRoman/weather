import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { WeatherList } from "../weather/Weather-list";
import { Error } from "../error/Error";
import './form.scss'

class Search extends Component {
    state = {
        value: this.props.location.pathname.slice(1) ? this.props.location.pathname.slice(1) : '',
        error: false,
        items: [],
        cityInfo: '',
        app_id: '0665459a6122953fcc0607ffa2a745bb'
    };

    componentDidMount() {
        if (this.props.location.pathname.slice(1)) {
            this.fetchData();
        }
    }

    fetchData() {
        const cityName = this.state.value;

        fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&APPID=${this.state.app_id}`)
            .then(res => res.json())
            .then((resp) => {
                const dailyData = resp.list.filter(item => item.dt_txt.includes("15:00:00"));

                this.setState({
                    items: dailyData,
                    cityInfo: resp.city,
                    error: false
                });
            })
            .catch(error => {
                this.setState({
                    error
                });

                throw new Error(`Error: ${error}`)
            })
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
    };

    handleSubmit = (event) => {
        event.preventDefault();

        if (this.state.value === '') {
            return;
        }

        this.fetchData();

        this.props.history.push(`/${(this.state.value).toLocaleLowerCase()}`);
    };

    render() {
        const {
            error,
            items,
        } = this.state;

        return (
            <>
                <section>
                    <header>
                        <h1>Check the weather in your city</h1>
                        <form onSubmit={this.handleSubmit}>
                            <input
                                type="text"
                                value={this.state.value}
                                onChange={this.handleChange}
                                placeholder="Choose a city"
                            />
                            <button type="submit">Send</button>
                        </form>
                    </header>
                </section>
                {error ? <Error /> : <WeatherList list={items} />}

            </>
        );
    }
}

export default withRouter(Search);
