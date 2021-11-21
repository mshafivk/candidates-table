import { useSortConfig } from './useSortConfig';

import { renderHook } from '@testing-library/react-hooks';
describe('useSortConfig Hook Test', () => {
  const testData = [
    {
      id: 1,
      Name: 'Anil',
      Status: 'waiting',
    },
    {
      id: 2,
      Name: 'Deepak',
      Status: 'rejected',
    },
    {
      id: 3,
      Name: 'Michael',
      Status: 'waiting',
    },
  ];
  test('should return Sort Params as expected', () => {
    const { result } = renderHook(() => useSortConfig(testData));
    expect(result.current.sortConfig).toBeNull();
    expect(typeof result.current.updateSortConfig).toBe('function');
  });

  test('should update Sort Params as expected', () => {
    const { result } = renderHook(() => useSortConfig(testData));
    result.current.updateSortConfig('Name');
    expect(result.current.sortConfig).toEqual({
      selector: 'Name',
      direction: 'ascending',
    });
    result.current.updateSortConfig('Name');
    expect(result.current.sortConfig).toEqual({
      selector: 'Name',
      direction: 'descending',
    });
  });
});
