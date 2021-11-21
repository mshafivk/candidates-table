import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import classes from './CustomTable.less';
import Header from './Header/Header';
import { useSortConfig } from '../../hooks/useSortConfig';
import { useFilterConfig } from '../../hooks/useFilterConfig';
import { useModifiedData } from '../../hooks/useModifiedData';
function CustomTable({ columns, data: rawData, emptyMessage }) {
  const { filterConfig, updateFilterConfig } = useFilterConfig();
  const { updateSortConfig, sortConfig } = useSortConfig();
  const filterHandler = useCallback(
    (selector, value) => {
      updateFilterConfig(selector, value);
    },
    [columns],
  );

  const sortHandler = useCallback(
    (selector) => {
      updateSortConfig(selector);
    },
    [columns, sortConfig],
  );

  const data = useModifiedData(rawData, sortConfig, filterConfig);

  return (
    <div className={classes.tableContainer}>
      <Header
        columns={columns}
        sortHandler={sortHandler}
        sortParams={sortConfig}
        filterHandler={filterHandler}
        data={rawData}
      />
      <div className={classes.body}>
        {(data.length === 0 && emptyMessage && (
          <span className={classes['empty-message']}>{emptyMessage}</span>
        )) ||
          data.map((row) => (
            <div className={classes.row} key={row.id}>
              {columns.map(({ selector, flexGrow, cellRenderer }, idx) => (
                <div
                  key={idx}
                  style={{ flexGrow: flexGrow ? flexGrow : '1' }}
                  className={classes.cell}>
                  {cellRenderer ? cellRenderer(row[selector]) : row[selector]}
                </div>
              ))}
            </div>
          ))}
      </div>
    </div>
  );
}
export default React.memo(CustomTable);

CustomTable.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      sortable: PropTypes.bool,
      sortedOrder: PropTypes.string,
      filterable: PropTypes.bool,
      selector: PropTypes.string.isRequired,
      cellRenderer: PropTypes.func,
    }),
  ).isRequired,
  data: PropTypes.array.isRequired,
  emptyMessage: PropTypes.string,
};
