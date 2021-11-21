import React from 'react';
import PropTypes from 'prop-types';
import arrow_down from '../../../images/icons/arrow_down.svg';
import arrow_up from '../../../images/icons/arrow_up.svg';
import classes from './SortIcon.less';
const SortIcon = ({ direction }) =>
  direction === 'ascending' ? (
    <img className={classes.icon} src={arrow_down} />
  ) : (
    <img className={classes.icon} src={arrow_up} />
  );
export default React.memo(SortIcon);

SortIcon.propTypes = {
  direction: PropTypes.oneOf(['ascending', 'descending']),
};
