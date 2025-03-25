import React, { useState, useEffect, useCallback } from 'react';
import { INITIAL_CUSTOMERS } from './constants/constants'; 
import AppContent from './AppContent';
import { fetchTransactions } from './api/mockApi';
import { paginate } from './utils/paginationUtils';

const App = () => {
  const [customers] = useState(INITIAL_CUSTOMERS); 
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState('2025');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [customerPage, setCustomerPage] = useState(1);
  const [customerTotalPages] = useState(Math.ceil(customers.length / 3));

  const handleMonthChange = useCallback((month) => setSelectedMonth(month), []);
  const handleYearChange = useCallback((year) => setSelectedYear(year), []);
  const handleCustomerClick = (customerId) => {
    setSelectedCustomer(customerId);
    setTransactions([]); 
    setPage(1); 
  };
  const handlePageChange = (newPage) => setPage(newPage);
  const handleCustomerPageChange = (newPage) => setCustomerPage(newPage);

  useEffect(() => {
    if (!selectedCustomer) return; 

    setLoading(true);
    setError('');

    fetchTransactions(selectedCustomer, selectedYear, selectedMonth)
      .then((data) => {
        const paginatedData = paginate(data, page, 3);
        setTransactions(paginatedData);
        setTotalPages(Math.ceil(data.length / 3));
        setLoading(false);
      })
      .catch((err) => {
        setError('No transactions');
        setLoading(false);
      });
  }, [selectedCustomer, selectedMonth, selectedYear, page]);

  return (
    <AppContent
      customers={customers}
      selectedCustomer={selectedCustomer}
      selectedMonth={selectedMonth}
      selectedYear={selectedYear}
      loading={loading}
      error={error}
      transactions={transactions}
      page={page}
      totalPages={totalPages}
      customerPage={customerPage}
      customerTotalPages={customerTotalPages}
      onCustomerClick={handleCustomerClick}
      handleMonthChange={handleMonthChange}
      handleYearChange={handleYearChange}
      handlePageChange={handlePageChange}
      handleCustomerPageChange={handleCustomerPageChange}
    />
  );
};

export default App;
