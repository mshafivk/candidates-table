import React from 'react';
import ColumnFilter from './ColumnFilter';
import { shallow } from 'enzyme';

describe('ColumnFilter Component', () => {
  const filterChangeHandler = jest.fn();
  const props = {
    data: ['All', 'awaiting', 'rejected'],
    selector: 'status',
    onFilterChange: filterChangeHandler,
  };
  it('should render properly', () => {
    const wrapper = shallow(<ColumnFilter {...props} />);

    wrapper
      .find('[data-testid="filter-dropdown"]')
      .at(0)
      .simulate('change', { target: { value: 'awaiting', name: 'awaiting' } });
    expect(filterChangeHandler).toHaveBeenCalled();
  });
});
