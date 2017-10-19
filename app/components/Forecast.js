var React = require('react');
var PropTypes = React.PropTypes;
var api = require('../utils/api');
var queryString = require('query-string');
var utils = require('../utils/helpers');
var getDate = utils.getDate;
var convertTemp = utils.convertTemp;
var DayItem = require('./DayItem');

class Forecast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentWeatherData: [],
      loading: true
    }

    this.makeRequest = this.makeRequest.bind(this);
  }
  componentDidMount() {
    this.city = queryString.parse(this.props.location.search).city;
    this.makeRequest(this.city);
  }
  componentWillReceiveProps(nextProps) {
    this.city = queryString.parse(nextProps.location.search).city;
    this.makeRequest(this.city);
  }
  makeRequest(city) {
    this.setState(function () {
      return {
        loading: true
      }
    })

    api.getCurrentWeather(city)
      .then(function (res) {
        this.setState(function () {
          return {
            loading: false,
            currentWeatherData: res,
          }
        })
      }.bind(this))
  }
  render() {
    return this.state.loading === true
      ? <h1 className='forecast-header'> Loading </h1>
      : <div>
          <h1 className='forecast-header'>{this.city} Forecast</h1>
          <div className='home-container'>
            <DayItem day = {this.state.currentWeatherData} />
          </div>
        </div>
  }
}

module.exports = Forecast;