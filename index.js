console.log("Hello world!")
console.warn("Hello warning!")
console.error("Hello error!")
console.info("Hello info")

window.alert("Hello alert")

// String

console.log("Hello world!")

const name = "Brendan Eich"

console.log(`Hello ${name}`)

window.alert(`Hello ${name}`)

// Number

console.log(0)
console.log(100)
console.log(3.14)

const age = 52

console.log(`His age is ${age}`)

window.alert(`His age is ${age}`)

// Object

console.log({
  name: "Alpha",
  age: 100,
  superPower: true
})

const hero = {
  name: "Alpha",
  age: 100,
  superPower: true
}

console.log(hero)
console.log(hero["name"])
console.log(hero.age)
console.log(hero.superPower)

window.alert(hero)
window.alert(hero["name"])
window.alert(hero.age)
window.alert(hero.superPower)

// Array

console.log([1, 2, 3])
console.log([0, 1, 2, 3])
console.log(["Alpha", 100, true])

const person = ["Alpha", 100, true]

console.log(person)
console.log(person[0])
console.log(person[1])
console.log(person[2])

window.alert(person)
window.alert(person[0])
window.alert(person[1])
window.alert(person[2])

// Boolean

console.log(true)
console.log(false)
console.log(true, false)

const toggle = false

console.log(`The lamp's toggle is ${toggle}`)

window.alert(`The lamp's toggle is ${toggle}`)
