import React, { Component } from 'react';
import {connect} from 'react-redux';
import {changeCity, thunk_action_creator} from '../actions/weatherActions';

class App extends Component {
  constructor(props){
    super(props);

    this.getWeatherInfo = this.getWeatherInfo.bind(this);
    this.changeCityName = this.changeCityName.bind(this);
  }

  changeCityName(e) {
    const cityName = e.target.value;
    this.props.dispatch(changeCity(cityName));
  }

  getWeatherInfo(e) {
    e.preventDefault();
    const cityName = this.getCityName.value;
    if (cityName !== "") {
      this.props.dispatch(thunk_action_creator(cityName));
    }    
    this.getCityName.value = "";
  };
  
  render() {
    return (
      <div className="App">         
        <div className="weather-info">
          <input type="text" value={this.props.city} name="city" placeholder="Enter City Name" onChange={this.changeCityName} ref={input => (this.getCityName = input)}/>
          <button className = "button" onClick={this.getWeatherInfo}>Apply</button>
          {this.props.isLoading ? <h3>Loading...</h3> : null}
          {this.props.isError ? (<h3>Something wrong!</h3>): null}
          {
            Object.keys(this.props.data).length > 0 ? ( 
            <h3>Current Temperature in {this.props.city} is {this.props.data.main.temp} degrees</h3>
            ) : null
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    city: state.weather.city,
    data: state.weather.weatherInfo,
    isLoading: state.weather.isLoading,
    isError: state.weather.isError
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//   ageUp: () => dispatch({type: 'INCREMENT_AGE'}),
//   ageDown: () => dispatch({type: 'DECREMENT_AGE'})
//   }
// }

export default connect(mapStateToProps, null)(App);
