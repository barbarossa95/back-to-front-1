import React, { Component } from 'react';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  componentDidMount() {
    this.intervalId = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    const {
      state: { date },
    } = this;
    return (
      <div className="Hello">
        <p>Hello World</p>
        <small>Current date is {date.toLocaleDateString()}</small>
        <h1>TIME: {date.toLocaleTimeString()}</h1>
      </div>
    );
  }
}

export default Clock;
