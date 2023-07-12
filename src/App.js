import styles from './styles/App/App.module.css';
import Calculator from './components/Calculator';

function App() {
  return (
    <main className={styles.app}>
      <h1>Math Magicians</h1>
      <Calculator />
    </main>
  );
}

export default App;
