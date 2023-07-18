import styles from './styles/App/App.module.css';
import Home from './components/Home';
import Calculator from './components/Calculator';
import Quote from './components/Quote';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <main className={styles.app}>
        <div className={styles.content}>
          <Home />
          <Calculator />
          <Quote />
        </div>
      </main>
    </>
  );
}

export default App;
