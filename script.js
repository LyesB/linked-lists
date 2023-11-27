function node(value = null, nextNode = null) {
  return { value, nextNode }
}

function linkedList() {
  let headNode = null
  let size = 0

  const prepend = (value) => {
    headNode = node(value, headNode)
    size++
  }

  const append = (value) => {
    let n0de = node(value)
    let current

    if (headNode === null) {
      headNode = n0de
    } else {
      current = headNode

      while (current.nextNode !== null) {
        current = current.nextNode
      }
      current.nextNode = n0de
    }
    size++
  }

  const getSize = () => size

  const head = () => headNode

  const tail = () => {
    let current
    if (headNode.nextNode === null) {
      return headNode
    } else {
      current = headNode
      while (current.nextNode !== null) {
        current = current.nextNode
      }
      return current
    }
  }

  const atIndex = (index) => {
    if (index > size) {
      return
    } else if (index === 0) {
      return headNode
    } else if ((index = size && size > 0)) {
      return tail()
    } else {
      let current = headNode
      let counter = 0
      while (counter < index) {
        current = current.nextNode
        counter++
      }
      return current
    }
  }

  const pop = () => {
    if (headNode.nextNode === null) headNode = null

    let current = headNode
    let previous

    while (current.nextNode !== null) {
      previous = current
      current = current.nextNode
    }
    current = null
    previous.nextNode = null
    size--
  }

  const contains = (value) => {
    if (headNode.value === value) return true
    let current = headNode
    while (current.nextNode !== null) {
      current = current.nextNode
      if (current.value === value) return true
    }
    return false
  }

  const find = (value) => {
    if (headNode.value === value) return 0
    let current = headNode
    let counter = 0
    while (counter <= size) {
      current = current.nextNode
      counter++
      if (current.value === value) return counter
    }
  }

  const toString = () => {
    let list = "(" + headNode.value + ")->"
    console.log(list)
    let current = headNode.nextNode
    console.log(current)
    let counter = 1

    if (headNode === null) return
    else {
      while (counter < size) {
        list += "(" + current.value + ")->"
        current = current.nextNode
        counter++
      }
      list += "(" + null + ")"
    }
    return list
  }

  return {
    append,
    prepend,
    getSize,
    head,
    tail,
    atIndex,
    pop,
    contains,
    find,
    toString,
  }
}

const list = linkedList()

list.prepend(300)
list.prepend(200)
list.prepend(100)
list.append(400)

console.log(list.head()) // {value: 100, nextNode: {…}}
console.log(list.tail()) // {value: 400, nextNode: null}
console.log(list.toString()) // (100)->(200)->(300)->(400)->(null)
console.log(list.find(300)) // 2
console.log(list.contains(200)) // true
console.log(list.contains(500)) // false
console.log(list.atIndex(3)) // {value: 400, nextNode: null}
console.log(list.getSize()) // 4
list.pop()
console.log(list.getSize()) // 3
console.log(list.tail()) // {value: 300, nextNode: null}
console.log(list.toString()) // (100)->(200)->(300)->(null)
