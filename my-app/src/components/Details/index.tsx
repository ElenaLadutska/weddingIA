import { ReactComponent as HeartSvg } from "../../assets/heart-2.svg";

import styles from "./Details.module.css";

export const Details = () => (
  <div className={styles.wrapper}>
    <div className={styles.text}>
      Мы очень ценим Вашу заботу, внимание и будем рады любому подарку! И не
      важно, в какой конверт Вы его упакуете
    </div>

    <HeartSvg className={styles.heart} />
  </div>
);
