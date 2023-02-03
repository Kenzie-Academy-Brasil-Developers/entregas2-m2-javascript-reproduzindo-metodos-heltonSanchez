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

function newReduce(array, callback, value) {
  value = 0
  let newValue = 0
  let element = 0

  for (let i = 0; i < array.length; i++) {
    const sum = array[i]
    newValue = newValue + callback(element, sum, i, array)

  }
  
  return newValue
}



// Não alterar o código abaixo

export {
  newMap,
  newFilter,
  newFind,
  newReduce
}