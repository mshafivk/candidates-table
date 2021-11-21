import { useState } from 'react';
export const useFilterConfig = (config = null) => {
  const [filterConfig, setFilterConfig] = useState(config);
  const updateFilterConfig = (selector, value) => {
    setFilterConfig({
      [selector]: value === 'ALL' ? null : value,
    });
  };

  return { filterConfig, updateFilterConfig };
};
