import React from 'react';
import PropTypes from 'prop-types';
import CustomerList from './customerList';
import Filters from './filters';
import TransactionDetails from './transactionDetails';
import Pagination from './pagination';
import { AppContainer, Header, CustomerListContainer, FiltersContainer, LoadingMessage, ErrorMessage, TableWrapper } from '../styles/AppStyles';

const AppContent = ({
  customers,
  selectedCustomer,
  selectedMonth,
  selectedYear,
  loading,
  error,
  transactions,
  page,
  totalPages,
  customerPage,
  customerTotalPages,
  onCustomerClick,
  handleMonthChange,
  handleYearChange,
  handlePageChange,
  handleCustomerPageChange
}) => (
  <AppContainer>
    <Header>Transaction Tracker</Header>
    
    <CustomerListContainer>
      <CustomerList
        customers={customers}
        currentPage={customerPage}
        totalPages={customerTotalPages}
        onCustomerClick={onCustomerClick}
        onPageChange={handleCustomerPageChange}
      />
    </CustomerListContainer>

    {selectedCustomer && (
      <>
        <FiltersContainer>
          <Filters
            months={['01', '02', '03']}
            years={['2025', '2024', '2023']}
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
                <TransactionDetails transactions={transactions} />
                <Pagination
                  currentPage={page}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              </>
            ) : (
              !loading && <p>No transactions</p>
            )
          )}
        </TableWrapper>
      </>
    )}
  </AppContainer>
);

AppContent.propTypes = {
  customers: PropTypes.array.isRequired,
  selectedCustomer: PropTypes.number,
  selectedMonth: PropTypes.string.isRequired,
  selectedYear: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  transactions: PropTypes.array.isRequired,
  page: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  customerPage: PropTypes.number.isRequired,
  customerTotalPages: PropTypes.number.isRequired,
  onCustomerClick: PropTypes.func.isRequired,
  handleMonthChange: PropTypes.func.isRequired,
  handleYearChange: PropTypes.func.isRequired,
  handlePageChange: PropTypes.func.isRequired,
  handleCustomerPageChange: PropTypes.func.isRequired,
};

export default AppContent;
