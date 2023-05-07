const addDays = require("date-fns/addDays");

const days = (days) => {
  const newDate = addDays(new Date(22, 7, 2022), days);

  return `${newDate.getDate()}-${newDate.getMonth() + 1}-${newDate.getYear()}`;
};

module.exports = days;
