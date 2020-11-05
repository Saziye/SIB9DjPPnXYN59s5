import React from "react";
import Counter from "../Counter";

class CounterList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hour: "10",
      minute: "0",
      second: "0",
    };
  }

  render() {
    return (
      <div className="row mt-5 mt-xs-4 help-block">
       
          <div className="card-deck custom-card-deck col-md-4">
            <Counter
              header="Saat"
              value={this.state.hour}
            />
          </div>

          <div className="card-deck custom-card-deck col-md-4">
            <Counter
              header="Dakika"
              value={this.state.minute}
            />
          </div>
          <div className="card-deck custom-card-deck col-md-4">
            <Counter
              header="Saniye"
              
              value={this.state.second}
            />
          </div>

      </div>
    );
  }
}

export default CounterList;
