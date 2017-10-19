var React = require('react');
var PropTypes = require('prop-types');
var ReactRouter = require('react-router-dom');

class GetCity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      getcity: '',
    };

    this.handleSubmitGetcity = this.handleSubmitGetcity.bind(this);
    this.handleUpdateGetcity = this.handleUpdateGetcity.bind(this);
  }
  handleSubmitGetcity () {
    this.props.onSubmitGetcity(this.state.getcity)

    this.setState(function () {
      return {
        getcity: ''
      }
    })
  }
  handleUpdateGetcity (e) {
    var postal = e.target.value;
    this.setState(function () {
      return {
        getcity: postal
      }
    });
  }
  render() {
    return (
      <div
        className='getcity-container'>
        <input
          className='form-control'
          onChange={this.handleUpdateGetcity}
          placeholder='Sharbot Lake, Ontario'
          type='text'
          value={this.state.getcity} />
        <button
          type='button'
          style={{margin: 10}}
          className='btn btn-success'
          onClick={this.handleSubmitGetcity}>
            Get Weather
        </button>
      </div>
    )
  }
}

GetCity.defaultProps = {
  direction: 'column'
}

GetCity.propTypes = {
  direction: PropTypes.string,
}

module.exports = GetCity;