'use strict'

const controller = (request, response, next) => {
  response.send({
    message: 'Hello, capstone!'
  });

  next();
}

module.exports = controller
