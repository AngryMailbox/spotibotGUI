import styles from '..\styles\index.module.css';

export default function Home() {
    return (
      <main className={styles.main}>
        <Head>
          <title>spotibot automation system</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        </Head>
        <div className={styles.wrapper}>
          <div className={styles.features}>
            <div className={styles.function}>
              <h1>Exempeltext</h1>
            </div>
            <div className={styles.function}></div>
            <div className={styles.function}></div>
            <div className={styles.function}></div>
          </div>
          <div className={styles.commands}></div>
        </div>
        <div className={styles.noneyet}></div>
      </main>
    );
  }