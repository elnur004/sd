/* global test, describe, it, expect */
'use strict'
import diets from '../../../files.js'

describe('diets data files returns array', () => {
  test('test for Diet', () => {
    expect(diets).not.toBe('')
  })
})
