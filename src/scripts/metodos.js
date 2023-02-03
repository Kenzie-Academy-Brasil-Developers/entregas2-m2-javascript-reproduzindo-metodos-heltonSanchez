function newMap(array, callBack) {
  const newValue = []

  for (let i = 0; i < array.length; i++) {
    newValue.push(callBack(array[i]))
  }
  return newValue
}


function newFilter(array, callBack) {
  const filtered = []

  for (let i = 0; i < array.length; i++) {
    if (callBack(array[i])) {
      filtered.push(array[i])
    }
  }
  return filtered;
}

function newFind(array, callBack) {

  for (let i = 0; i < array.length; i++) {

    if (callBack(array[i])) {
      return array[i];
    }
  }
}

function newReduce(array, callback, value = 0) {
  let acumulator = value

  for (let i = 0; i < array.length; i++) {
    const actual = array[i]
    acumulator = callback(acumulator, actual, i, array)
  }
  
  return acumulator;
}



// Não alterar o código abaixo

export {
  newMap,
  newFilter,
  newFind,
  newReduce
}