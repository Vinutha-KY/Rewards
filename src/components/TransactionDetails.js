import React from 'react';
import PropTypes from 'prop-types';
import { Table, TableHeader, TableRow, TableData } from '../styles/AppStyles';

const TransactionDetails = ({ transactions, page, totalPages, onPageChange }) => (
  <div>
    <h3>Transaction Details</h3>

   
      <Table>
        <thead>
          <TableRow>
            <TableHeader>Transaction ID</TableHeader>
            <TableHeader>Amount</TableHeader>
            <TableHeader>Date</TableHeader>
            <TableHeader>Rewards</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <TableRow key={transaction.transactionId}>
              <TableData>{transaction.transactionId}</TableData>
              <TableData>{transaction.amount}</TableData>
              <TableData>{transaction.date}</TableData>
              <TableData>{transaction.amount > 100 ? 'High' : 'Low'}</TableData>
            </TableRow>
          ))}
        </tbody>
      </Table>
  
  </div>
);

TransactionDetails.propTypes = {
  transactions: PropTypes.array.isRequired,
  page: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default TransactionDetails;
