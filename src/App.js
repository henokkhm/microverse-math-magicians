import styles from './styles/App/App.module.css';
import Calculator from './components/Calculator';
import Quote from './components/Quote';

function App() {
  return (
    <main className={styles.app}>
      <h1 className={styles.pageHeader}>Math Magicians</h1>
      <div className={styles.content}>
        <Calculator />
        <Quote />
      </div>
    </main>
  );
}

export default App;
