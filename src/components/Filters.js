import React from 'react';
import PropTypes from 'prop-types';
import { Select } from '../styles/AppStyles';

const Filters = ({ months, years, selectedMonth, selectedYear, onMonthChange, onYearChange }) => (
  <div>
    <Select value={selectedMonth} onChange={(e) => onMonthChange(e.target.value)}>
      {months.map((month) => (
        <option key={month} value={month}>
          {month}
        </option>
      ))}
    </Select>

    <Select value={selectedYear} onChange={(e) => onYearChange(e.target.value)}>
      {years.map((year) => (
        <option key={year} value={year}>
          {year}
        </option>
      ))}
    </Select>
  </div>
);

Filters.propTypes = {
  months: PropTypes.array.isRequired,
  years: PropTypes.array.isRequired,
  selectedMonth: PropTypes.string.isRequired,
  selectedYear: PropTypes.string.isRequired,
  onMonthChange: PropTypes.func.isRequired,
  onYearChange: PropTypes.func.isRequired,
};

export default Filters;
