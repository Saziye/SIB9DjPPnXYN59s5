import React from "react";
import { connect } from "react-redux";
import Price from "../Price";
import { getCurrentPriceFromApi } from "../../actions/index";

class PriceList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.setPrice();
  }

  setPrice = () => {
    const interval = setInterval(() => {
      this.props.getCurrentPriceFromApi();
    }, 5000);
  };

  render() {
    return (
      <div className="row mt-5 mt-xs-4">
        <div className="card-deck custom-card-deck col-md-4">
          <Price
            src={"/usd.png"}
            alt="fireSpot"
            value={this.props.prices.USD}
          />
        </div>
        <div className="card-deck custom-card-deck col-md-4">
          <Price
            src={"/gbp.png"}
            alt="fireSpot"
            value={this.props.prices.GBP}
          />
        </div>
        <div className="card-deck custom-card-deck col-md-4">
          <Price
            src={"/eur.png"}
            alt="fireSpot"
            value={this.props.prices.EUR}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    prices: state.price.prices,
    isGetCurrentPrice: state.price.isGetCurrentPrice,
    getCurrentPriceMessage: state.price.getCurrentPriceMessage,
  };
};

const mapDispatchToProps = () => {
  return {
    getCurrentPriceFromApi,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(PriceList);
