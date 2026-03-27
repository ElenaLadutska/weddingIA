import cln from "classnames";
import ilonaPng from "../../assets/ilona.png";
import sashaPng from "../../assets/sasha.png";

import heart from "../../assets/heart-2.svg";

import { ReactComponent as SpeechSvg } from "../../assets/speech.svg";

import styles from "./Header.module.css";

const Header = () => (
  <div className={styles.column}>
    <div className={styles.titleBlock}>
      <div className={styles.title}>Приглашаем на свадьбу!</div>
      <div className={styles.date}>08.08</div>

      <img src={heart} className={styles.heartOne} alt="" />
      <img src={heart} className={styles.heartTwo} alt="" />
    </div>

    <div className={styles.row}>
      <div className={cln(styles.person, styles.sasha)}>
        <img src={sashaPng} alt="sasha" className={styles.image} />
        <div className={styles.name}>Саша</div>
        <div className={styles.phrase}>
          приходите <br /> тусить
        </div>
        <SpeechSvg className={styles.speech} />
      </div>
      <div className={cln(styles.person, styles.ilona)}>
        <img src={ilonaPng} alt="ilona" className={styles.image} />
        <div className={styles.name}>Илона</div>
        <div className={styles.phrase}>да!</div>
        <SpeechSvg className={styles.speech} />
      </div>
    </div>
  </div>
);

export default Header;
