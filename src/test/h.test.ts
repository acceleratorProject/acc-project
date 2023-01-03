import { expect, test } from 'vitest'
import { sum } from './sum.js'

test('should sum two numbers', () => {
  const result = sum(1, 2)
  const expected = 3

  expect(result).toBe(expected)
})
