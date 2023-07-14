import styles from './styles/App/App.module.css';
import Calculator from './components/Calculator';
import Quote from './components/Quote';

function App() {
  return (
    <main className={styles.app}>
      <h1>Math Magicians</h1>
      <Calculator />
      <Quote />
    </main>
  );
}

export default App;
