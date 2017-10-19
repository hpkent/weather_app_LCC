var React = require('react');
var GetCity = require('./GetCity');
var Forecast = require('./Forecast');
var ReactRouter = require('react-router-dom');
var BrowserRouter = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <div className='container'>
          <Route render={function (props) {
            return (
              <div className='navbar'>
                <h1>Weather App</h1>
              </div>
            )
          }} />

          <Route exact path='/' render={function (props) {
            return (
              <div className='home-container'>
                <h1 className='header'>Enter a City and Province</h1>
                <GetCity
                  direction='column'
                  onSubmitGetcity={function (city) {
                    props.history.push({
                      pathname: '/forecast',
                      search: '?city=' + city
                    })
                  }}
                  getcity={123} />
              </div>
            )
          }} />

          <Route path='/forecast' component={Forecast} />

        </div>
      </BrowserRouter>
    )
  }
}

module.exports = App;