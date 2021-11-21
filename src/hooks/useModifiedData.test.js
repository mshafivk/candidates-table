import { useModifiedData } from './useModifiedData';
import { renderHook } from '@testing-library/react-hooks';
describe('useFilterEntries Test', () => {
  const testData = [
    {
      id: 1,
      Name: 'Mukesh',
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
    {
      id: 4,
      Name: 'Anil',
      Status: 'waiting',
    },
  ];

  it('should return modified data as expected when acending order sorting has been applied', () => {
    const testSortParams = {
      selector: 'Name',
      direction: 'ascending',
    };
    const expected = [
      { Name: 'Anil', Status: 'waiting', id: 4 },
      { Name: 'Deepak', Status: 'rejected', id: 2 },
      { Name: 'Michael', Status: 'waiting', id: 3 },
      { Name: 'Mukesh', Status: 'waiting', id: 1 },
    ];
    const { result } = renderHook(() =>
      useModifiedData(testData, testSortParams),
    );
    expect(result.current).toEqual(expected);
  });
  it('should return modified data as expected when descending order sorting has been applied', () => {
    const testSortParams = {
      selector: 'Name',
      direction: 'descending',
    };
    const expected = [
      { Name: 'Mukesh', Status: 'waiting', id: 1 },
      { Name: 'Michael', Status: 'waiting', id: 3 },
      { Name: 'Deepak', Status: 'rejected', id: 2 },
      { Name: 'Anil', Status: 'waiting', id: 4 },
    ];
    const { result } = renderHook(() =>
      useModifiedData(testData, testSortParams),
    );
    expect(result.current).toEqual(expected);
  });
  it('should return data as it is when no sort params are applied', () => {
    const { result } = renderHook(() => useModifiedData(testData, {}));
    expect(result.current).toEqual(testData);
  });
  it('should return data as  expected when filter is applied', () => {
    const { result } = renderHook(() =>
      useModifiedData(testData, {}, { Status: 'waiting' }),
    );
    expect(result.current).toEqual([
      { Name: 'Mukesh', Status: 'waiting', id: 1 },
      { Name: 'Michael', Status: 'waiting', id: 3 },
      { Name: 'Anil', Status: 'waiting', id: 4 },
    ]);
  });
});
