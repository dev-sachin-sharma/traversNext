import Styles from "../styles/Header.module.css";

export const Header = () => {
  return (
    <div>
      <h1 className={Styles.title}>
        <span>Webdev</span>News
      </h1>
      <p className={Styles.description}>
          Keep up to date yourself with Haryana News
      </p>
    </div>
  );
};
