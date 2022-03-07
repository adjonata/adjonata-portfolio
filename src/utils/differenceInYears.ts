export default (date1: Date, date2: Date): string => {
  const differenceInMilliseconds = date1.getTime() - date2.getTime()
  const totalYears = differenceInMilliseconds / 1000 / 60 / 60 / 24 / 365
  return totalYears.toFixed()
}
