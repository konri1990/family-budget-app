import {
  BookmarkIcon,
  CubeTransparentIcon,
  PencilIcon,
  PhotoIcon,
} from "@heroicons/react/24/outline";
import Card from "components/organisms/card";

import styles from "./home.module.css";
import Menu from "components/menu/menu";

const Home = () => {
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

  return (
    <>
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
    </>
  );
};

export default Home;
