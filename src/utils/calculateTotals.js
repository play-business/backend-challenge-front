import axios from 'axios';
import env from "react-dotenv";

const calculateTotals = (investment, wallet, paymentMethod, installments) => {
  return axios.post(env.API_URL, { investment, wallet, paymentMethod, installments }, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export default calculateTotals;