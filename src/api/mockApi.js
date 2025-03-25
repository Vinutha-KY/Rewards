const mockData = [
  { customerId: 1, transactionId: 'T001', amount: 100, date: '2025-01-10' },
  { customerId: 1, transactionId: 'T002', amount: 150.75, date: '2025-01-20' },
  { customerId: 2, transactionId: 'T003', amount: 200, date: '2025-01-05' },
  { customerId: 2, transactionId: 'T004', amount: 125.50, date: '2025-02-10' },
  { customerId: 3, transactionId: 'T005', amount: 300.99, date: '2025-01-15' },
  { customerId: 3, transactionId: 'T006', amount: 50, date: '2025-03-01' },
];

export const fetchTransactions = (customerId, year, month) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
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
    }, 1000); 
  });
};


