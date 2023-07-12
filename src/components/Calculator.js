import { useState } from 'react';
import styles from '../styles/Calculator/Calculator.module.css';
import Button from './Button';
import ResultBar from './ResultBar';
import calculate from '../logic/calculate';

function Calculator() {
  const [state, setState] = useState({});

  const handleClick = (value) => {
    const newState = calculate(state, value);
    setState(newState);
  };

  return (
    <section>
      <div className={styles.calculator}>
        <ResultBar />
        <div className={styles.row}>
          <Button value="AC" />
          <Button value="+/-" />
          <Button value="%" />
          <Button value="÷" accent />
        </div>
        <div className={styles.row}>
          <Button value="7" />
          <Button value="8" />
          <Button value="9" />
          <Button value="x" accent />
        </div>
        <div className={styles.row}>
          <Button value="4" />
          <Button value="5" />
          <Button value="6" />
          <Button value="-" accent />
        </div>
        <div className={styles.row}>
          <Button value="1" />
          <Button value="2" />
          <Button value="3" />
          <Button value="+" accent />
        </div>
        <div className={styles.row}>
          <Button value="0" wide />
          <Button value="." />
          <Button value="=" accent />
        </div>
      </div>
    </section>
  );
}

export default Calculator;
