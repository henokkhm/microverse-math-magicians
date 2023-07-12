import styles from '../styles/Calculator/Calculator.module.css';

function Calculator() {
  return (
    <section>
      <div className={styles.calculator}>
        <div className={styles.row}>ResultBar</div>
        <div className={styles.row}>Row 1 buttons</div>
        <div className={styles.row}>Row 2 buttons</div>
        <div className={styles.row}>Row 3 buttons</div>
        <div className={styles.row}>Row 4 buttons</div>
        <div className={styles.row}>Row 5 buttons</div>
      </div>
    </section>
  );
}

export default Calculator;
