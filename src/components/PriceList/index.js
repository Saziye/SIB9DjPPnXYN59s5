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

  render() {
    return (
      <div className="row mt-5 mt-xs-4">
        <div className="col-12 mb-3">
          <div className="card-deck custom-card-deck">
            <Price
              header="United States Dollar(USD)"
              src={"/usd.png"}
              alt="fireSpot"
              label="(Price in USD)"
              value={this.state.USD}
            />
            <Price
              header="British Pound Sterling(GBP)"
              src={"/gbp.png"}
              alt="fireSpot"
              label="(Price in GBP)"
              value={this.state.GBP}
            />
            <Price
              header="Euro(EUR)"
              src={"/eur.png"}
              alt="fireSpot"
              label="(Price in EUR)"
              value={this.state.EUR}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default PriceList;
