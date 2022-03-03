import './App.css';
import styles from './styles/index.module.css';
import logo from './spotibot.png'

function App() {
  return (
    <main className={styles.main}>
        <head>
          <title>spotibot automation system</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        </head>
        <img className={styles.logo} src={logo}></img>
        <div className={styles.wrapper}>
          <div className={styles.features}>
            <div className={styles.function}>
              <h1>Exempelfunktion</h1>
              <label className={styles.switch}>
                <input type="checkbox"></input>
                <span className={styles.slider_round}></span>
              </label>
            </div>
            <div className={styles.function}>
              <h1>Exempelfunktion</h1>
            </div>
            <div className={styles.function}>
              <h1>Exempelfunktion</h1>
            </div>
            <div className={styles.function}>
              <h1>Exempelfunktion</h1>
            </div>
          </div>
          <div className={styles.separator}></div>
          <div className={styles.commands}>
            <div className={styles.blackbar}>
              <input type="text"></input>
            </div>
          </div>
        </div>
        <div className={styles.under}></div>
      </main>
  );
}

export default App;
