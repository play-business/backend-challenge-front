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
      <div className="flex items-center">
        <div>Método de pago</div>
        <select
          className="ml-4 flex-1"
          onChange={(event) => this.props.setCheckoutProperty('paymentMethod', event.target.value)}
        >
          <option value="spei">SPEI</option>
          <option value="card">Tarjeta de débito</option>
        </select>
      </div>
      <div>
        <div>Parcialidades: {this.props.installments}</div>
        <input
          type="range"
          min="1"
          max="4"
          step="1"
          className="w-full"
          value={this.props.installments}
          onChange={(event) => this.props.setCheckoutProperty('installments', parseInt(event.target.value))}
        />
      </div>
    </div>);
  }
}

export default Form;