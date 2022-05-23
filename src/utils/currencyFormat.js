const currencyFormat = (value, precision = 0) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: precision,
  });

  return formatter.format(value);
};

export default currencyFormat;