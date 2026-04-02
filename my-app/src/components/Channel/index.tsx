import styles from "./Channel.module.css";

export const Channel = () => {
  const openTg = () => {};
  return (
    <div className={styles.wrapper}>
      <div className={styles.text}>
        Мы создали телеграм-группу нашего праздника, где можно будет узнать
        дополнительную информацию, а также поделиться фотографиями и видео в
        день свадьбы и после
      </div>
      <div onClick={openTg} className={styles.button}>
        Вступить
      </div>
    </div>
  );
};
