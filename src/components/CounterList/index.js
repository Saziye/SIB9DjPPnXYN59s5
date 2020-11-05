import React from "react";
import Counter from "../Counter";
const d = new Date();
const h = new Date(
  d.getFullYear(),
  d.getMonth(),
  d.getDate(),
  d.getHours() + 10,
  d.getMinutes(),
  d.getSeconds(),
  0
);
class CounterList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hour: "10",
      minute: "0",
      second: "0",
      countDownDate: h.getTime(),
    };
    this.setCounter();
  }

  setCounter = () => {
    const interval = setInterval(() => {
      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = this.state.countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      this.setState({ hour: hours, minute: minutes, second: seconds });
    }, 1000);
  };

  setTime = (timeType, value) => {
    var da = new Date(this.state.countDownDate);
    let ha = new Date();
    switch (timeType) {
      case "h":
        ha = new Date(
          da.getFullYear(),
          da.getMonth(),
          da.getDate(),
          da.getHours() + value,
          da.getMinutes(),
          da.getSeconds(),
          0
        );
        break;
      case "m":
        ha = new Date(
          da.getFullYear(),
          da.getMonth(),
          da.getDate(),
          da.getHours(),
          da.getMinutes() + value,
          da.getSeconds(),
          0
        );
        break;
      case "s":
        ha = new Date(
          da.getFullYear(),
          da.getMonth(),
          da.getDate(),
          da.getHours(),
          da.getMinutes(),
          da.getSeconds() + value,
          0
        );
        break;
      default:
        break;
    }
    this.setState({ countDownDate: ha.getTime() });
  };

  render() {
    return (
      <div className="row mt-5 mt-xs-4 help-block">
        <div className="card-deck custom-card-deck col-md-4">
          <Counter
            header="Hour"
            more={() => this.setTime("h", 1)}
            less={() => this.setTime("h", -1)}
            value={this.state.hour}
          />
        </div>

        <div className="card-deck custom-card-deck col-md-4">
          <Counter
            header="Minute"
            more={() => this.setTime("m", 1)}
            less={() => this.setTime("m", -1)}
            value={this.state.minute}
          />
        </div>
        <div className="card-deck custom-card-deck col-md-4">
          <Counter
            header="Second"
            more={() => this.setTime("s", 1)}
            less={() => this.setTime("s", -1)}
            value={this.state.second}
          />
        </div>
      </div>
    );
  }
}

export default CounterList;
