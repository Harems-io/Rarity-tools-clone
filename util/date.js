export default function formattedDate(date) {
  const options = { year: 'numeric', month: 'short', day: 'numeric' }
  let fDate = new Date(date)

  return fDate.toLocaleDateString("en-US", options)
}
