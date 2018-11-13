import React from 'react';
import './Ticker.css'

export default class Ticker extends React.Component {
  state = {
    value: 0,
  };
  //isActive

  updateExchangeRate = () => {
    return fetch(`http://core.wookieelabs.com:7002/thicker/${this.props.pair}`)
      .then(r => r.json())
      .then(res => {
        this.setState({
          value: res.last,
        })
      });
  };

  componentWillReceiveProps(nextProp) {
    if(nextProp.isActive && !this.props.isActive) {
      this.updateExchangeRate();
      this.interval = setInterval(this.updateExchangeRate, 10000);
    } else if (!nextProp.isActive && this.props.isActive) {
      clearInterval(this.interval);
      this.setState({
        value: 0
      })
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { pair } = this.props;
    return (
      <div className="ticker">
        <p>{pair.toUpperCase().replace('_', ' to ')}</p>
        <p>{this.state.value.toFixed(2)}</p>
      </div>
    );
  }
}
