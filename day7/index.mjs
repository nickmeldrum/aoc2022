import {
  readInput,
  numberFromCurrentModule,
  parseLinesToArray,
  parseSpacedToArrayInAllLines,
} from '../utils/general.mjs'

const part1 = (data) => {
  let total = 0
  console.log(`part1: score = ${total}`)
}

const part2 = (data) => {
  let total = 0
  console.log(`part2: score = ${total}`)
}

const runItAll = async () => {
  try {
    const day = numberFromCurrentModule(import.meta.url)
    const data = await readInput(day)
    const parsed = parseLinesToArray(data)
    part1(parsed)
    part2(parsed)
  } catch (err) {
    console.error(err)
  }
}

runItAll()
