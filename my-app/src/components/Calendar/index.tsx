import cln from "classnames";
import { ReactComponent as HeartSvg } from "../../assets/heart.svg";
import styles from "./Calendar.module.css";

const Calendar = () => (
  <div className={styles.wrapper}>
    <div className={styles.row}>
      <div className={styles.char}>3</div>
      <div className={styles.char}>4</div>
      <div className={styles.char}>5</div>
      <div className={styles.char}>6</div>
      <div className={styles.char}>7</div>
      <div className={styles.charBlock}>
        <div className={cln(styles.char, styles.white)}>8</div>
        <HeartSvg className={styles.heart} />
        <div className={styles.month}>августа</div>
      </div>
      <div className={styles.char}>9</div>
    </div>

    <div className={styles.text}>
      <div>
        Мы верим, что этот день послужит началом нашей счастливой семейной
        жизни.
      </div>
      <div>
        Поэтому не представляем наш праздник без Вашего участия. Разделите с
        нами это главное событие лета - подарите нам свое внимаение и поддержку
      </div>
    </div>
  </div>
);

export default Calendar;
