import React from 'react';
import './Ticker.css'

export default class Ticker extends React.Component {
  state = {
    value: 0,
  };

  constructor(props) {
    super(props);

    fetch(`http://core.wookieelabs.com:7002/thicker/${props.pair}`)
      .then(r => r.json())
      .then(res => {
        this.setState({
          value: res.last,
        })
      });
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
