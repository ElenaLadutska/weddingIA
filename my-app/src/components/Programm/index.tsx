import { ReactComponent as SpiralSvg } from "../../assets/spiralArrow.svg";

import styles from "./Programm.module.css";

export const Programm = () => (
  <div className={styles.wrapper}>
    <div className={styles.title}>Программа дня</div>
    <div className={styles.content}>
        <SpiralSvg className={styles.spiral} />
    <div className={styles.first}>
      <div className={styles.event}>Выкуп</div>
      <div className={styles.time}>13:00</div>
      <div className={styles.place}>(Гашкевича 16)</div>
    </div>
    <div className={styles.second}>
      <div className={styles.event}>ЗАГС</div>
      <div className={styles.time}>15:50</div>
      <div className={styles.place}>(Плеханова 42)</div>
    </div>
    <div className={styles.third}>
      <div className={styles.event}>Банкет</div>
      <div className={styles.time}>18:00</div>
      <div className={styles.place}>(Садовое <br/> товарищество <br/> Гонор 95)</div>
    </div>
    </div>
  </div>
);
