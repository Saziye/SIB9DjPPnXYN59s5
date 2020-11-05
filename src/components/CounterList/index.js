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
const countDownDate = h.getTime();
class CounterList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hour: "10",
      minute: "0",
      second: "0",
    };
    this.setCounter();
  }


  setCounter = () => {
    const interval = setInterval(() => {
      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // document.getElementById("hoursVal").innerHTML = hours;
      // document.getElementById("minVal").innerHTML = minutes;
      // document.getElementById("secVal").innerHTML = seconds;
      // Display the result in the element with id="demo"
      this.setState({ hour: hours, minute: minutes, second: seconds });

      // If the count down is finished, write some text
    }, 1000);
  };

  render() {
    return (
      <div className="row mt-5 mt-xs-4 help-block">
        <div className="card-deck custom-card-deck col-md-4">
          <Counter header="Saat" value={this.state.hour} />
        </div>

        <div className="card-deck custom-card-deck col-md-4">
          <Counter header="Dakika" value={this.state.minute} />
        </div>
        <div className="card-deck custom-card-deck col-md-4">
          <Counter header="Saniye" value={this.state.second} />
        </div>
      </div>
    );
  }
}

export default CounterList;
