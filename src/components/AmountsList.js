import React from "react";
import currencyFormat from "../utils/currencyFormat";

class AmountsList extends React.Component {
  render() {
    return (<div className="grid gap-4">
        <div className="border-b flex items-center justify-between">
          <div>Inversión</div>
          <div>{currencyFormat(this.props.cash)}</div>
        </div>
        <div className="border-b flex items-center justify-between">
          <div>Wallet</div>
          <div>{currencyFormat(-this.props.wallet)}</div>
        </div>
        <div className="border-b flex items-center justify-between">
          <div>Comisión PB</div>
          <div>{currencyFormat(this.props.pbFee, 2)}</div>
        </div>
        <div className="flex items-center justify-between">
          <div>Comisión procesador de pagos</div>
          <div>{currencyFormat(this.props.paymentProcessorFee, 2)}</div>
        </div>
        <div className="flex items-center justify-between">
          <div>I.V.A.</div>
          <div>{currencyFormat(this.props.taxes, 2)}</div>
        </div>
        <div className="flex items-center justify-between font-bold">
          <div>Total a pagar</div>
          <div>{currencyFormat(this.props.total, 2)}</div>
        </div>
      </div>);
  }

}

export default AmountsList;