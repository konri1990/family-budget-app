import styles from "./app.module.css";
import Menu from "components/menu/menu";

const App = (): JSX.Element => {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <Menu />
        <h3 className={styles.headerTopTitle}>
          <span className={styles.headerTopTitleVital}>Family Budget</span> App
        </h3>
        <p className={styles.headerDescription}>
          Application written in:{" "}
          <code className={styles.headerDescriptionCode}>React</code>,{" "}
          <code className={styles.headerDescriptionCode}>TailwindCss</code>,{" "}
          <code className={styles.headerDescriptionCode}>Typescript</code>, The
          time was limited so it is possible that some features will be missed
          :)
        </p>
      </header>
      <footer className={styles.footer}>
        <a href="https://github.com/jvidalv">
          Konrad Zapala @ {new Date().getFullYear()}
        </a>
      </footer>
    </main>
  );
};

export default App;
