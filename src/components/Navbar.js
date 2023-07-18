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
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/calculator"
              className={styles.mainNavLink}
            >
              Calculator
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/quote"
              className={styles.mainNavLink}
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
