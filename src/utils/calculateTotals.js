import axios from 'axios';
import env from "react-dotenv";

const calculateTotals = (cash, wallet, paymentMethod) => {
  return axios.post(env.API_URL, { cash, wallet, paymentMethod }, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
  });
};

export default calculateTotals;