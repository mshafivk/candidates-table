import React from 'react';
import PropTypes from 'prop-types';
import classes from './Header.less';
import SortIcon from '../SortIcon/SortIcon';
import ColumnFilter from '../ColumnFilter/ColumnFilter';

function Header({ columns, sortHandler, filterHandler, sortParams, data }) {
  return (
    <div className={classes.header}>
      {columns.map(
        ({ title, flexGrow, selector, filterable, sortable }, idx) => {
          return (
            <div
              style={{ flexGrow: flexGrow ? flexGrow : '1' }}
              className={classes['cell-wrapper']}
              key={idx}>
              <div>
                <div onClick={() => sortable && sortHandler(selector)}>
                  {title} &nbsp;
                  {sortParams && sortParams.selector === selector ? (
                    <SortIcon direction={sortParams.direction}></SortIcon>
                  ) : (
                    <span></span>
                  )}
                </div>
              </div>
              <div className={classes['filter-container']}>
                {filterable && (
                  <ColumnFilter
                    data={data}
                    selector={selector}
                    onFilterChange={filterHandler}
                  />
                )}
              </div>
            </div>
          );
        },
      )}
    </div>
  );
}

export default React.memo(Header);

Header.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      sortable: PropTypes.bool,
      sortedOrder: PropTypes.string,
      filterable: PropTypes.bool,
      flexGrow: PropTypes.number,
      selector: PropTypes.string,
    }),
  ).isRequired,
  data: PropTypes.array.isRequired,
  sortParams: PropTypes.shape({
    selector: PropTypes.string,
    direction: PropTypes.string,
  }),
  sortHandler: PropTypes.func,
  filterHandler: PropTypes.func,
};
