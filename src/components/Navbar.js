import styles from '../styles/Navbar/Navbar.module.css';

function Navbar() {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>Math Magicians</h1>
      <nav>
        <ul className={styles.mainNav}>
          <li>
            <a className={styles.mainNavLink} href="/">
              Home
            </a>
          </li>
          <li>
            <a className={styles.mainNavLink} href="/calculator">
              Calculator
            </a>
          </li>
          <li>
            <a className={styles.mainNavLink} href="/quote">
              Quote
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
