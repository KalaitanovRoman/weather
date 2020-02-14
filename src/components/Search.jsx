import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import {HttpDataRequest} from "../utils/httpDataRequest";
import {WeatherList} from "./Weather-list";
import '../assets/styles/form.scss'

class Search extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    state = {
        value: 'moscow',
        error: null,
        items: [],
        cityInfo: '',
        isSubmitted: false,
        app_id: 'a9a3a62789de80865407c0452e9d1c27'
    };

    componentDidMount() {
        this.getData();
    }

    getData() {

        const cityName = this.props.location.pathname.slice(1) ? this.props.location.pathname.slice(1) : this.state.value;
        console.log('___getData', cityName);

        HttpDataRequest(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&APPID=${this.state.app_id}`)
            .then(res => res.json())
            .then(
                (data) => {
                    const dailyData = data.list.filter(item => item.dt_txt.includes("15:00:00"));

                    this.setState({
                        items: dailyData,
                        cityInfo: data.city,
                        isSubmitted: true
                    });
                },
                (error) => {
                    this.setState({
                        error
                    });
                }
            );
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        this.getData();

        event.preventDefault();
        this.props.history.push(`/${(this.state.value).toLocaleLowerCase()}`);
    }

    render() {
        const {
            error,
            items,
            cityInfo,
            isSubmitted
        } = this.state;

        if (error) {
            return <div>Ошибка: {error.message}</div>;
        }

        return (
            <>
                <section>
                    <header>
                        <h1>Check weather in you sity</h1>
                        <form onSubmit={this.handleSubmit}>
                            <input
                                type="text"
                                value={this.state.value}
                                onChange={this.handleChange}
                                placeholder="Choose the city"
                            />
                            <button type="submit">Send</button>
                        </form>
                    </header>
                </section>
                {isSubmitted && <WeatherList list={items} city={cityInfo}/>}
            </>
        );
    }
}

export default withRouter(Search);
