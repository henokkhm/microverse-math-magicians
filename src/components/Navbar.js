import { NavLink } from 'react-router-dom'; // If you're using React Router for navigation
import styles from '../styles/Navbar/Navbar.module.css';

function Navbar() {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>Math Magicians</h1>
      <nav>
        <ul className={styles.mainNav}>
          <li>
            <NavLink
              to="/"
              className={styles.mainNavLink}
              data-testid="navlink-home"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/calculator"
              className={styles.mainNavLink}
              data-testid="navlink-calculator"
            >
              Calculator
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/quote"
              className={styles.mainNavLink}
              data-testid="navlink-quote"
            >
              Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
