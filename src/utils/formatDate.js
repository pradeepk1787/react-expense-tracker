const dateFormatter = new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });

const formatDate = (date) => {
  return dateFormatter.format(new Date(date));
};

export default formatDate;
