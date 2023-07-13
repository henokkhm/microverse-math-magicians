import PropTypes from 'prop-types';

import styles from '../styles/Button/Button.module.css';

function Button({
  value, wide, accent, handleClick,
}) {
  const buttonClasses = `${styles.button} ${wide ? styles.wide : ''} ${
    accent ? styles.accent : ''
  }`;
  return (
    <button
      className={buttonClasses}
      type="button"
      onClick={() => handleClick(value)}
    >
      {value}
    </button>
  );
}

Button.propTypes = {
  value: PropTypes.string.isRequired,
  wide: PropTypes.bool,
  accent: PropTypes.bool,
  handleClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  wide: false,
  accent: false,
};

export default Button;
