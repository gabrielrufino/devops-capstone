const { describe, test, expect } = require('@jest/globals')
const controller = require('../controller')

describe('Tests for controller', () => {
  test('Should send the correct response body', () => {
    const request = {}
    const response = { send: jest.fn() }
    const next = jest.fn()

    controller(request, response, next)

    expect(response.send).toBeCalledWith({
      message: 'Hello, capstone!'
    })
  })

  test('Should call the next function', () => {
    const request = {}
    const response = { send: jest.fn() }
    const next = jest.fn()

    controller(request, response, next)

    expect(next).toBeCalled()
  })
})
