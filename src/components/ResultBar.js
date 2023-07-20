import PropTypes from 'prop-types';

import styles from '../styles/ResultBar/ResultBar.module.css';

function ResultBar({ displayValue }) {
  return <div data-testid="calculation-result" className={styles.resultBar}>{displayValue}</div>;
}

ResultBar.propTypes = {
  displayValue: PropTypes.string,
};

ResultBar.defaultProps = {
  displayValue: '0',
};
export default ResultBar;
