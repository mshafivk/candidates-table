import { useState } from 'react';

export const useSortConfig = (data, config = null) => {
  const [sortConfig, setSortConfig] = useState(config);

  const updateSortConfig = (selector) => {
    let direction = 'ascending';
    if (
      sortConfig &&
      sortConfig.selector === selector &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending';
    }
    setSortConfig({ selector, direction });
  };

  return { updateSortConfig, sortConfig };
};
