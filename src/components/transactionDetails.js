import React from 'react';
import PropTypes from 'prop-types';
import { Table, TableHeader, TableRow, TableData } from '../styles/AppStyles';
import { TABLE_HEADERS } from '../constants/constants';
import { calculatePoints } from '../utils/transactionUtils'; 

const TransactionDetails = ({ transactions }) => (
  <div>
    <h3>Transaction Details</h3>
    <Table>
      <thead>
        <TableRow>
          {TABLE_HEADERS.map((header) => (
            <TableHeader key={header}>{header}</TableHeader>
          ))}          
        </TableRow>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <TableRow key={transaction.transactionId}>
            <TableData>{transaction.transactionId}</TableData>
            <TableData>{transaction.amount}</TableData>
            <TableData>{transaction.date}</TableData>
            <TableData>{calculatePoints(transaction.amount)}</TableData> 
          </TableRow>
        ))}
      </tbody>
    </Table>
  </div>
);

TransactionDetails.propTypes = {
  transactions: PropTypes.array.isRequired,
};

export default TransactionDetails;
