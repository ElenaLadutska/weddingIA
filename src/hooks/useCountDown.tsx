import { useEffect, useState } from 'react';
import { formattedDate } from '../utils/date';

export type CountdownHookProps = {
  endTimestamp: number;
  callback?: () => void;
};

export const useCountDown = ({
  endTimestamp,
  callback,
}: CountdownHookProps) => {
  const [countDown, setCountDown] = useState(
    endTimestamp - new Date().getTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const time = new Date().getTime();

      const newTime = endTimestamp - time;

      if (newTime <= 0) {
        clearInterval(interval);
        setCountDown(0);
        callback?.();

        return;
      }

      setCountDown(newTime);
    }, 1000);

    return () => clearInterval(interval);
  }, [endTimestamp, callback]);

  return { timeRemaining: countDown, formatTime: formattedDate(countDown) };
};
