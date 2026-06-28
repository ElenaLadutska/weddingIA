import styles from "./Channel.module.css";

export const Channel = () => {
  const openTg = () => {
    const a = document.createElement("a");

    a.href = "https://t.me/+2-pm1iP62yg2NGIy";
    a.target = "_blank";
    a.click();
  };

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
