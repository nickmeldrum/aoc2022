import {
  readInput,
  numberFromCurrentModule,
  parseLinesToArray,
  parseSpacedToArrayInAllLines,
} from '../utils/general.mjs'

const choice = {
  'X': 1, // Rock
  'Y': 2, // Paper
  'Z': 3, // Scissors
}

  /*
   * X = lose
   * Y = draw
   * Z = win
   */
const choose = (left, right) => {
  if (left === 'A') { // Rock
    if (right === 'X') return 'Z' // Lose
    if (right === 'Y') return 'X' // Draw
    if (right === 'Z') return 'Y' // Win
  }
  if (left === 'B') { // Paper
    if (right === 'X') return 'X' // Lose
    if (right === 'Y') return 'Y' // Draw
    if (right === 'Z') return 'Z' // Win
  }
  if (left === 'C') { // Scissors
    if (right === 'X') return 'Y' // Lose
    if (right === 'Y') return 'Z' // Draw
    if (right === 'Z') return 'X' // Win
  }
}

const score = (left, right) => {
  if (left === 'A') { // Rock
    if (right === 'X') return 3 // Rock
    if (right === 'Y') return 6 // Paper
    if (right === 'Z') return 0 // Scissors
  }
  if (left === 'B') { // Paper
    if (right === 'X') return 0 // Rock
    if (right === 'Y') return 3 // Paper
    if (right === 'Z') return 6 // Scissors
  }
  if (left === 'C') { // Scissors
    if (right === 'X') return 6 // Rock
    if (right === 'Y') return 0 // Paper
    if (right === 'Z') return 3 // Scissors
  }
}

const part1 = (data) => {
  /*
   * in form: [ [ A, B ], ...]
   * calculate total score:
   * rock = 1, paper = 2, scissors = 3
   * win = 6, draw = 3, loss = 0
   */
  let total = 0

  data.forEach(l => {
    total += choice[l[1]]
    total += score(l[0], l[1])
  })

  console.log(`part1: score = ${total}`)
}

const part2 = (data) => {

  let total = 0

  data.forEach(l => {
    const myChoice = choose(l[0], l[1])
    total += choice[myChoice]
    total += score(l[0], myChoice)
  })

  console.log(`part2: score = ${total}`)
}

const runItAll = async () => {
  try {
    const day = numberFromCurrentModule(import.meta.url)
    const data = await readInput(day)
    const parsed = parseSpacedToArrayInAllLines(parseLinesToArray(data))
    part1(parsed)
    part2(parsed)
  } catch (err) {
    console.error(err)
  }
}

runItAll()
