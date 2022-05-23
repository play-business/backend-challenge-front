import React from "react";
import currencyFormat from "../utils/currencyFormat";

class Form extends React.Component {
  render() {
    return (<div className="grid gap-4">
      <div>
        <div>Inversión: {currencyFormat(this.props.cash)}</div>
        <input
          type="range"
          min="0"
          max="1000000"
          step="100"
          className="w-full"
          onChange={(event) => this.props.setCheckoutProperty('cash', parseInt(event.target.value))}
        />
      </div>
      <div>
        <div>Wallet: {currencyFormat(this.props.wallet)}</div>
        <input
          type="range"
          min="0"
          max={this.props.cash}
          step="100"
          className="w-full"
          onChange={(event) => this.props.setCheckoutProperty('wallet', parseInt(event.target.value))}
        />
      </div>
    </div>);
  }
}

export default Form;