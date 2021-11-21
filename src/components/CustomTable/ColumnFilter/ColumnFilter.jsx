import React from 'react';
import PropTypes from 'prop-types';
import { useFilterEntries } from '../../../hooks/useFilterEntries';
import classes from './ColumnFilter.less';
function ColumnFilter({ data, selector, onFilterChange }) {
  const filterEntries = useFilterEntries(data, selector);
  return (
    <select
      className={classes.dropdown}
      data-testid="filter-dropdown"
      onChange={(e) => onFilterChange(selector, e.target.value)}>
      {filterEntries.map((item, index) => (
        <option value={item} key={index}>
          {item}
        </option>
      ))}
    </select>
  );
}

export default React.memo(ColumnFilter);

ColumnFilter.propTypes = {
  data: PropTypes.array,
  selector: PropTypes.string,
  onFilterChange: PropTypes.func,
};
