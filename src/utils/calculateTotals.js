import axios from 'axios';
import env from "react-dotenv";

const calculateTotals = (cash, wallet, paymentMethod, installments) => {
  return axios.post(env.API_URL, { cash, wallet, paymentMethod, installments }, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export default calculateTotals;