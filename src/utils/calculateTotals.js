import axios from 'axios';

const calculateTotals = (cash, wallet, paymentMethod) => {
  return axios.post('http://localhost:3001/url', { cash, wallet, paymentMethod }, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
  });
};

export default calculateTotals;