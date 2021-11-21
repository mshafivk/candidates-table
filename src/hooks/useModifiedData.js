import { useMemo } from 'react';

export const useModifiedData = (
  data,
  sortParams = null,
  filterConfig = null,
) => {
  const modifiedData = useMemo(() => {
    let _hasFilter = false;
    let _filteredData = [];
    if (filterConfig !== null) {
      for (const [key] of Object.entries(filterConfig)) {
        if (filterConfig[key]) {
          _hasFilter = true;
          _filteredData = [
            ...data.filter((item) => item[key] === filterConfig[key]),
          ];
        }
      }
    }
    let sortableData = _hasFilter ? [..._filteredData] : [...data];
    if (sortParams !== null) {
      sortableData.sort((a, b) => {
        if (a[sortParams.selector] < b[sortParams.selector]) {
          return sortParams.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortParams.selector] > b[sortParams.selector]) {
          return sortParams.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableData;
  }, [data, filterConfig, sortParams]);

  return modifiedData;
};
