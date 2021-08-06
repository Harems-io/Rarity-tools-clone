// function isNumeric(value) {
//     return /^-?\d+$/.test(value);
// }

// function parseForSort(val) {
//   const numberA = Number(val.split(",").join(""))
//
//   return isNumeric(val) ? val : val
//
//   if (isNumeric(val)) {
//     return numberA
//   } else {
//
//   }
//
//   if (numberA === 0) {
//     return 0
//   } else if(!numberA) {
//     return val
//   } else {
//     return numberA
//   }
// }

export default function sortByStat(list, statPath) {
  return list.sort((a, b) => {

    let aVal = a
    let bVal = b

    if (statPath.length > 1) {
      statPath.forEach((pathElement) => {
        aVal = aVal[pathElement]
        bVal = bVal[pathElement]
      })
    }

    // aVal = parseForSort(aVal)
    // bVal = parseForSort(bVal)

    if (aVal < bVal) {
      return 1;
    }
    if (aVal > bVal) {
      return -1;
    }
    return 0;
  });
}
