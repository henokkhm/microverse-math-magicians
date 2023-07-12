import { useState } from 'react';
import styles from '../styles/Calculator/Calculator.module.css';
import Button from './Button';
import ResultBar from './ResultBar';
import calculate from '../logic/calculate';

function Calculator() {
  const [state, setState] = useState({});

  const displayValue = state.next || state.total || '0';

  const handleClick = (value) => {
    const newState = calculate(state, value);
    setState(newState);
  };

  return (
    <section>
      <div className={styles.calculator}>
        <ResultBar displayValue={displayValue} />
        <div className={styles.row}>
          <Button value="AC" handleClick={handleClick} />
          <Button value="+/-" handleClick={handleClick} />
          <Button value="%" handleClick={handleClick} />
          <Button value="÷" accent handleClick={handleClick} />
        </div>
        <div className={styles.row}>
          <Button value="7" handleClick={handleClick} />
          <Button value="8" handleClick={handleClick} />
          <Button value="9" handleClick={handleClick} />
          <Button value="x" accent handleClick={handleClick} />
        </div>
        <div className={styles.row}>
          <Button value="4" handleClick={handleClick} />
          <Button value="5" handleClick={handleClick} />
          <Button value="6" handleClick={handleClick} />
          <Button value="-" accent handleClick={handleClick} />
        </div>
        <div className={styles.row}>
          <Button value="1" handleClick={handleClick} />
          <Button value="2" handleClick={handleClick} />
          <Button value="3" handleClick={handleClick} />
          <Button value="+" accent handleClick={handleClick} />
        </div>
        <div className={styles.row}>
          <Button value="0" wide handleClick={handleClick} />
          <Button value="." handleClick={handleClick} />
          <Button value="=" accent handleClick={handleClick} />
        </div>
      </div>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </section>
  );
}

export default Calculator;
