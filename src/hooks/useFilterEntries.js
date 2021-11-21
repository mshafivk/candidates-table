import { useMemo } from 'react';

export const useFilterEntries = (rawData = [], selector = null) => {
  const data = [...rawData];
  const updatedEntries = useMemo(() => {
    const uniqueEntries = [...new Set(data.map((item) => item[selector]))];
    return ['ALL', ...uniqueEntries];
  }, [data, selector]);
  return updatedEntries;
};
