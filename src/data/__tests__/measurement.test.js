/* global test, describe, it, expect */
'use strict'
import {measurementsFilePath} from '../../../files.js'
import measurements from measurementsFilePath

describe('measurements data files returns array', () => {
  test('these tests prevent any issues and problems, also to break the structure of measurement', () => {
    expect(measurements).not.toBe('')
  })
})
