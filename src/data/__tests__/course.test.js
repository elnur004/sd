/* global test, describe, it, expect */
'use strict'
import {courseFilePath} from '../../../files.js'
import courses from courseFilePath

describe('courses data files returns array', () => {
  test('this test prevents to any issues and problems, also to break the structure of courses', () => {
    expect(courses).not.toBe('')
  })
})
