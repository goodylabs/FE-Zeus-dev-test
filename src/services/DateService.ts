const getDateFromGivenDaysAgo = (days: number) => {
  const date = new Date();
  date.setDate(date.getDate() - days);
  return parseInt(Date.parse(date.toISOString()).toString().slice(0, 10), 10);
};

const getTimeFromEpoch = (epochTimestamp: number) => new Date(epochTimestamp * 1000).toLocaleString();

const DateService = {
  getTimeFromEpoch,
  getDateFromGivenDaysAgo,
};

export default DateService;
