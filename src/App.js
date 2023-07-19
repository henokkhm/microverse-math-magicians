import { Routes, Route } from 'react-router-dom';

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
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="calculator" element={<Calculator />} />
            <Route path="quote" element={<Quote />} />
          </Routes>
        </div>
      </main>
    </>
  );
}

export default App;
