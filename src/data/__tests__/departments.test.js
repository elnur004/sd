/* global test, describe, it, expect */
'use strict'
import {departmentsFilePath} from '../../../files.js'
import departments from departmentsFilePath

describe('departments data files returns array', () => {
  test('these tests prevent any issues and problems, also to break the structure of departments', () => {
    expect(departments).not.toBe('')
  })
})
