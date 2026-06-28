import { ReactComponent as HeartSvg } from "../../assets/heart-2.svg";

import styles from "./Details.module.css";

export const Details = () => (
  <div className={styles.wrapper}>
    <div className={styles.text}>
      Мы очень ценим Вашу заботу, внимание и будем рады любому подарку! И не
      важно, в какой конверт Вы его упакуете
    </div>

    <HeartSvg className={styles.heart} />

    <div className={styles.text}>
      Мы очень любим цветы, но очень не хотим, чтобы они завяли, поэтому будем рады, если вы выберете что-то другое в качестве презента (алкоголь, настольные игры, сертификаты). <br/>Но если все-таки очень хочется подарить цветы, гипсофилы (или другие сухоцветы) - отличный вариант
    </div>

    <HeartSvg className={styles.heart} />
  </div>
);
