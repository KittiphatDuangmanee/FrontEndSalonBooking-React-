export const getLocalTime = (time) => {
  let hour = time?.$H;
  let minute = time.$m;
  let second = time.$s;
  const localTime = `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}:${String(second).padStart(2, "0")}`;
  return localTime;
};
