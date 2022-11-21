export function toTwelveHourTime(date: Date) {
  return date
    .toLocaleTimeString()
    .replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3");
}
