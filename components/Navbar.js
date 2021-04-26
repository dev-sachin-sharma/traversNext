import styles from "../styles/Navbar.module.css";
import Link from 'next/link'
export const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
      </ul>
    </nav>
  );
};
