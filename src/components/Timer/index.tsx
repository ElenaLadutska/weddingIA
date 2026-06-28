import { useCountDown } from "../../hooks/useCountDown";

import styles from "./Timers.module.css";

const Timer = () => {
  const endTimestamp = new Date("2026-08-08T13:00:00+03:00").getTime();

  const time = useCountDown({ endTimestamp });

  const [days, hours, minutes, seconds] = time.formatTime;

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>До нашей встречи осталось</div>
        <div className={styles.column}>
          <div>{days}</div>
          <div>дней</div>
        </div>
      <div className={styles.row}>
        <div className={styles.column}>
          <div>{hours}</div>
          <div>часов</div>
        </div>
        <div className={styles.column}>
          <div>{minutes}</div>
          <div>минут</div>
        </div>
        <div className={styles.column}>
          <div>{seconds}</div>
          <div>секунд</div>
        </div>
      </div>
    </div>
  );
};

export default Timer;
