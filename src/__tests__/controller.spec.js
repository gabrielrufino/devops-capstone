const controller = require('../controller')

describe('Tests for controller', () => {
  it('Should send the correct response body', () => {
    const request = {}
    const response = { send: jest.fn() }
    const next = jest.fn()

    controller(request, response, next)

    expect(response.send).toBeCalledWith({
      message: 'Hello, capstone!'
    })
  })

  it('Should call the next function', () => {
    const request = {}
    const response = { send: jest.fn() }
    const next = jest.fn()

    controller(request, response, next)

    expect(next).toBeCalled()
  })
})
