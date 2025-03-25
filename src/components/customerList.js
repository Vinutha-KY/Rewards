import React from 'react';
import PropTypes from 'prop-types';
import { CustomerListContainer, CustomerItem, PaginationContainer, PaginationButton, PaginationText } from '../styles/AppStyles';

const CustomerList = ({ customers, currentPage, totalPages, onCustomerClick, onPageChange }) => {
  const startIndex = (currentPage - 1) * 3;
  const endIndex = startIndex + 3;
  const paginatedCustomers = customers.slice(startIndex, endIndex);

  return (
    <CustomerListContainer>
      <h2>Customers</h2>
      <ul>
        {paginatedCustomers.map((customer) => (
          <CustomerItem key={customer.id} onClick={() => onCustomerClick(customer.id)}>
            Customer {customer.id}
          </CustomerItem>
        ))}
      </ul>

      <PaginationContainer>
        <PaginationButton
          onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </PaginationButton>
        <PaginationText>{`Page ${currentPage} of ${totalPages}`}</PaginationText>
        <PaginationButton
          onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </PaginationButton>
      </PaginationContainer>
    </CustomerListContainer>
  );
};

CustomerList.propTypes = {
  customers: PropTypes.array.isRequired,
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onCustomerClick: PropTypes.func.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default CustomerList;
