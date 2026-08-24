const inrFormatter = new Intl.NumberFormat("hi-IN", {
  style: "currency",
  currency: "INR",
});

const formatCurrency = (amount) => {
  return inrFormatter.format(amount);
};

export default formatCurrency;
