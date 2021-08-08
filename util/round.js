export function round2Dec(num) {
  return Math.round((num + Number.EPSILON) * 100) / 100
}
