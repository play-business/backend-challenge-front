import React from "react";
import AmountsList from "./AmountsList";
import Form from "./Form";
import calculateTotals from "../utils/calculateTotals";

class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cash: 0,
      wallet: 0,
      paymentMethod: 'spei',
      pbFee: 0,
      paymentProcessorFee: 0,
      installments: 1,
      taxes: 0,
      total: 0,
    };
  }

  setProperty(property, value) {
    let newState = { [property]: value };

    if(property === "cash" && this.state.wallet > value) {
      newState["wallet"] = value;
    }

    this.setState(newState, () => {
      calculateTotals(this.state.cash, this.state.wallet, this.state.paymentMethod).then(res => {
        const {pbFee, paymentProcessorFee, taxes, total} = res.data;

        this.setState({pbFee, paymentProcessorFee, taxes, total});
      });
    });
  }

  render() {
    return (<div className="grid grid-cols-2 gap-4">
      <div>
        <Form
          cash={this.state.cash}
          wallet={this.state.wallet}
          setCheckoutProperty={(property, value) => this.setProperty(property, value)}/>
      </div>
      <div>
        <AmountsList
          cash={this.state.cash}
          wallet={this.state.wallet}
          pbFee={this.state.pbFee}
          paymentProcessorFee={this.state.paymentProcessorFee}
          taxes={this.state.taxes}
          total={this.state.total}
        />
      </div>
    </div>);
  }
}

export default Checkout;