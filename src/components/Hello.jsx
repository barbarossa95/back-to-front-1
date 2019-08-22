import React, { Component, Fragment } from 'react';

class HelloWorld extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    setInterval(() => {
      const date = new Date().getDate(),
        month = new Date().getMonth() + 1,
        year = new Date().getFullYear(),
        hours = new Date().getHours(),
        min = new Date().getMinutes(),
        sec = new Date().getSeconds();
      this.setState({ date, month, year, hours, min, sec });
    }, 1000);
  }

  lZ(val) {
    return val > 9 ? val : `0${val}`;
  }

  render() {
    const {
      state: { date = 0, month = 0, year = 0, hours = 0, min = 0, sec = 0 },
    } = this;
    return (
      <div className="Hello">
        <p>Hello World</p>
        <small>
          Current date is {this.lZ(date)}.{this.lZ(month)}.{this.lZ(year)}
        </small>
        <h1>
          TIME: {this.lZ(hours)}:{this.lZ(min)}:{this.lZ(sec)}
        </h1>
      </div>
    );
  }
}

export default HelloWorld;
