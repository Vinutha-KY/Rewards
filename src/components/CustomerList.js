import React from 'react';
import PropTypes from 'prop-types';
import { CustomerListContainer, CustomerItem }  from '../styles/AppStyles'; 

const CustomerList = ({ customers, onCustomerClick }) => (
  <CustomerListContainer>
    <h2>Customers</h2>
    <ul>
      {customers.map((customer) => (
        <CustomerItem key={customer.id} onClick={() => onCustomerClick(customer.id)}>
          Customer {customer.id}
        </CustomerItem>
      ))}
    </ul>
  </CustomerListContainer>
);

CustomerList.propTypes = {
  customers: PropTypes.array.isRequired,
  onCustomerClick: PropTypes.func.isRequired,
};

export default CustomerList;
