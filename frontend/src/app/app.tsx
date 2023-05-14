import Card from "components/organisms/card";
import {
  BookmarkIcon,
  CubeTransparentIcon,
  PencilIcon,
  PhotoIcon,
} from "@heroicons/react/24/outline";

import styles from "./app.module.css";
import { useMemo } from "react";
import {
  familyMembersColumns,
  familyMembersData,
} from "components/table/dummy";
import Table from "components/table/table";

const features = [
  {
    name: "Vite",
    description:
      "Faster and leaner development experience for modern web projects.",
    logo: CubeTransparentIcon,
    docs: "https://vitejs.dev/",
  },
  {
    name: "React",
    description: "JavaScript library for building user interfaces.",
    logo: PencilIcon,
    docs: "https://reactjs.org/",
  },
  {
    name: "TypeScript",
    description:
      "Strongly typed programming language that builds on JavaScript.",
    logo: BookmarkIcon,
    docs: "https://www.typescriptlang.org/",
  },
  {
    name: "Tailwind with JIT",
    description: "A utility-first CSS framework packed with classes.",
    logo: PhotoIcon,
    docs: "https://tailwindcss.com/",
  },
];

const App = (): JSX.Element => {
  const data = useMemo(() => familyMembersData(), []);

  const columns = useMemo(() => familyMembersColumns(), []);

  return (
    <main className={styles.main}>
      <header className={styles.header}>
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
      <section className={styles.tableContainer}>
        <Table columns={columns} data={data} />
      </section>
      <section className={styles.features}>
        {features.map((props, index) => (
          <div
            key={index}
            className={styles.cardWrapper}
            style={{ animationDelay: `${index * 0.1 + 0.1}s` }}
          >
            <Card
              title={props.name}
              description={props.description}
              Icon={props.logo}
              href={props.docs}
            />
          </div>
        ))}
      </section>
      <footer className={styles.footer}>
        <a href="https://github.com/jvidalv">
          Konrad Zapala @ {new Date().getFullYear()}
        </a>
      </footer>
    </main>
  );
};

export default App;
