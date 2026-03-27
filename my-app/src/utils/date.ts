export const formattedDate = (countDown: number): string[] => {
  const days = String(Math.floor(countDown / (1000 * 60 * 60 * 24))).padStart(
    2,
    '0'
  );

  const hours = String(
    Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  ).padStart(2, '0');

  const minutes = String(
    Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60))
  ).padStart(2, '0');

  const seconds = String(Math.floor((countDown % (1000 * 60)) / 1000)).padStart(
    2,
    '0'
  );

  return [days, hours, minutes, seconds];
};
