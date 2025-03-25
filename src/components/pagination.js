import React from 'react';
import PropTypes from 'prop-types';
import { PaginationContainer, PaginationButton, PaginationText } from '../styles/AppStyles';

const Pagination = ({ currentPage, totalPages, onPageChange }) => (
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
);

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
