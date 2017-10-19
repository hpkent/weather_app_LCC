var React = require('react');
var utils = require('../utils/helpers');
var PropTypes = React.PropTypes;
var getDate = utils.getDate;
var convertTemp = require('../utils/helpers').convertTemp;

class DayItem extends React.Component {
  render() {
    var props = this.props;
    var date = getDate(props.day.dt);
    var icon = props.day.weather[0].icon;
    // var props = this.props.location.state;
    return (
      <div>
        <img className='weather' src={'/app/images/weather-icons/' + icon + '.svg'} alt='Weather' />
        <h2 className='subheader'>{date}</h2>
        <h2 className='subheader'>{props.day.weather[0].description}</h2>
      </div>
    )
  }
}

DayItem.propTypes = {
  day: PropTypes.shape({
    dt: PropTypes.number.isRequired,
    weather: PropTypes.array.isRequired,
  }).isRequired
}

module.exports = DayItem;