import logger from '../logger/logging';

export const fetchTransactions = (customerId, year, month) => {
  return new Promise((resolve, reject) => {
    logger.logInfo(`Fetching transactions for customerId: ${customerId}, year: ${year}, month: ${month}`);
    fetch('/data/mockData.json')
      .then(response => response.json())
      .then(mockData => {
        const filteredData = mockData.filter(
          (item) =>
            item.customerId === customerId &&
            item.date.includes(`${year}-${month}`)
        );
        if (filteredData.length > 0) {
          resolve(filteredData);
        } else {
          reject('No transactions found');
        }
      })
      .catch(() => {
        logger.logError('Error fetching data');
        reject('Error fetching data');
      });
  });
};
