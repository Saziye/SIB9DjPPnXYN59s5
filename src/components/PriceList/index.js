import React from "react";
import Price from "../Price";

class PriceList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      USD: "-",
      GBP: "-",
      EUR: "-",
    };
  }

  setPrice = () => {
    const interval = setInterval(() => {
        //get data
      }, 5000);
  }

  render() {
    return (
      <div className="row mt-5 mt-xs-4">
       
          <div className="card-deck custom-card-deck col-md-4">
            <Price
              header="United States Dollar(USD)"
              src={"/usd.png"}
              alt="fireSpot"
              label="(Price in USD)"
              value={this.state.USD}
            />
          </div>

          <div className="card-deck custom-card-deck col-md-4">
            <Price
              header="British Pound Sterling(GBP)"
              src={"/gbp.png"}
              alt="fireSpot"
              label="(Price in GBP)"
              value={this.state.GBP}
            />
          </div>
          <div className="card-deck custom-card-deck col-md-4">
            <Price
              header="Euro(EUR)"
              src={"/eur.png"}
              alt="fireSpot"
              label="(Price in EUR)"
              value={this.state.EUR}
            />
          </div>

      </div>
    );
  }
}

export default PriceList;
