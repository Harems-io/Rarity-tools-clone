export function sortByPath(list, pathArr) {
  return list.sort((a, b) => {

    let aVal = a
    let bVal = b

    if (pathArr.length > 1) {
      pathArr.forEach((pathElement) => {
        aVal = aVal[pathElement]
        bVal = bVal[pathElement]
      })
    }

    if (aVal < bVal) {
      return 1;
    }
    if (aVal > bVal) {
      return -1;
    }
    return 0;
  });
}
