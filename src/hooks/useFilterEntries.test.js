import { useFilterEntries } from './useFilterEntries';
import { renderHook } from '@testing-library/react-hooks';
describe('useFilterEntries Test', () => {
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
  test('should return Filter entries as expected', () => {
    const { result } = renderHook(() => useFilterEntries(testData, 'Status'));
    expect(result.current).toEqual(['ALL', 'waiting', 'rejected']);
  });
});
