import Image from "next/image";
import styles from "./index.module.css";

export default function Home() {
  return (
    <div className={styles.background}>
      <Image
        src="/images/background-construction.png"
        alt="Plano de fundo"
        fill
        priority
        style={{ objectFit: "cover" }}
      />
      <div className={styles.content}>
        <h1 className={styles.h1}>EM CONSTRUÇÃO</h1>
        <div className={styles.github}>
          <a
            href="https://github.com/DevNovaes/TablesAndGenerators"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.github}
          >
            <Image src="/images/github-logo.png" alt="GitHub Logo" fill />
          </a>
        </div>
      </div>
    </div>
  );
}
