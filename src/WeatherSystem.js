import React, { Component } from 'react';
import axios from 'axios';

import "./WeatherSystem.css";

import Period from "./Period";

class WeatherSystem extends Component {
    state = {
        periods: [],
        city: "lens"
     }

    componentDidMount() {
        axios.get('https://api.openweathermap.org/data/2.5/forecast?q='+this.state.city+'&lang=fr&units=metric&appid=8c3a54c385c9c9d874d88f2cd6b3dda8')
        .then(res => {
            console.log(res.data);
            this.setState({
                periods: res.data.list
            })
        })
    }

    componentDidUpdate() {
        axios.get('https://api.openweathermap.org/data/2.5/forecast?q='+this.state.city+'&lang=fr&units=metric&appid=8c3a54c385c9c9d874d88f2cd6b3dda8')
        .then(res => {
            console.log(res.data);
            this.setState({
                periods: res.data.list
            })
        })
    }

    handleCityChange = (e) => {
		this.setState({
			city: e.target.value
		})
	}
	handleSubmit = (e) => {
		e.preventDefault();
        this.setState({
			city: this.state.city
		})
	}

    render() { 
        let periodsList = this.state.periods.slice(0,4).map(period => {
            return <Period period={period} />
        })

        return ( 
            <div className="container">
                <form onSubmit={this.props.period}>
                    <div className="row">
                        <div className="col-md-3 ofsset-md-2">
                            <input type="text" className="form-control" name="city" value={this.state.city}  onChange={this.handleCityChange}/>
                        </div>
                        <div className="col-md-3 mt-md-0 text-md-left">
                            <button className="btn btn-warning">Valider</button>
                        </div>
                    </div>
                </form>
                <div className="weathersystem">
                    {periodsList}
                </div>
            </div>
         );
    }
}
 
export default WeatherSystem;