import styles from "../styles/Layout.module.css";
import { Header } from "./Header";
import { Navbar } from "./Navbar";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar/>
      <div className={styles.container}>
        <main className={styles.main}>
          <Header/>
          {children}</main>
      </div>
    </div>
  );
}
