import React, { useState, useEffect } from 'react';
import { fetchTransactions } from './api/mockApi'; 
import { paginate } from './utils/paginationUtils'; 
import CustomerList from './components/CustomerList';
import TransactionDetails from './components/TransactionDetails';
import Filters from './components/Filters';
import Pagination from './components/Pagination';
import {
  AppContainer,
  Header,
  CustomerListContainer,
  FiltersContainer,
  LoadingMessage,
  ErrorMessage,
  TableWrapper
} from './styles/AppStyles';

const App = () => {
  const [customers, setCustomers] = useState([{ id: 1 }, { id: 2 }, { id: 3 }]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState('2025');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const getRecentMonths = () => {
    const currentMonth = new Date().getMonth(); 
    const recentMonths = [];
    for (let i = 2; i >= 0; i--) {
      let month = currentMonth - i;
      if (month < 0) month = 12 + month; 
      recentMonths.push(month < 10 ? `0${month + 1}` : `${month + 1}`);
    }
    return recentMonths;
  };

  const months = getRecentMonths();
  const years = ['2025', '2024', '2023']; 

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
        setError('Failed to fetch transactions');
        setLoading(false);
      });
  }, [selectedCustomer, selectedMonth, selectedYear, page]);

  const handleMonthChange = (month) => setSelectedMonth(month);
  const handleYearChange = (year) => setSelectedYear(year);
  const handleCustomerClick = (customerId) => setSelectedCustomer(customerId);
  const handlePageChange = (newPage) => setPage(newPage);

  return (
    <AppContainer>
      <Header>Transaction Tracker</Header>
      <CustomerListContainer>
        <CustomerList customers={customers} onCustomerClick={handleCustomerClick} />
      </CustomerListContainer>

      {selectedCustomer && (
        <>
          <FiltersContainer>
            <Filters
              months={months}
              years={years}
              selectedMonth={selectedMonth}
              selectedYear={selectedYear}
              onMonthChange={handleMonthChange}
              onYearChange={handleYearChange}
            />
          </FiltersContainer>

          {loading && <LoadingMessage>Loading...</LoadingMessage>}
          {error && <ErrorMessage>{error}</ErrorMessage>}

          
          <TableWrapper>
            {error ? null : (
              transactions.length > 0 ? (
                <>
                  <TransactionDetails
                    transactions={transactions}
                    page={page}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                  />
                  
                    <Pagination
                      currentPage={page}
                      totalPages={totalPages}
                      onPageChange={handlePageChange}
                    />
                  
                </>
              ) : (
                !loading && <p>No transactions found.</p> 
              )
            )}
          </TableWrapper>
        </>
      )}
    </AppContainer>
  );
};

export default App;
