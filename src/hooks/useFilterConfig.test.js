import { useFilterConfig } from './useFilterConfig';
import { renderHook } from '@testing-library/react-hooks';
describe('useFilterConfig Test', () => {
  const testConfig = { status: 'awaiting' };
  test('should return Filter Config as expected', () => {
    const { result } = renderHook(() => useFilterConfig(testConfig, 'Status'));
    expect(result.current.filterConfig).toEqual(testConfig);
    expect(typeof result.current.updateFilterConfig).toBe('function');
  });
});
