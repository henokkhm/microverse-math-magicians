import PropTypes from 'prop-types';

import styles from '../styles/Button/Button.module.css';

function Button({ value, wide, accent }) {
  const buttonClasses = `${styles.button} ${wide ? styles.wide : ''} ${accent ? styles.accent : ''}`;
  return (
    <button className={buttonClasses} type="button">
      {value}
    </button>
  );
}

Button.propTypes = {
  value: PropTypes.string.isRequired,
  wide: PropTypes.bool,
  accent: PropTypes.bool,
};

Button.defaultProps = {
  wide: false,
  accent: false,
};

export default Button;
