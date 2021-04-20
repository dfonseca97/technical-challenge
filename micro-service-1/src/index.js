//Import required modules and set port
const express = require('express')
const axios = require('axios')
const app = express()
const port = 3000

//Configure format for REST requests
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

/**
 * api endpoint, receives a POST request with a message. 
 * Forwards the message to the micro-service-2 /reverse 
 * endpoint and returns the reversed message and a random 
 * number.
 */
app.post('/api', async (request, response) => {

  //The URL used to connect to micro-service-2 is provided by the DNS in Kubernetes.
  var reversedMessageRes = await axios.post('http://service-2.default.svc/reverse',
    { message: request.body.message })
    .then(function (response) {
      return response
    })
    .catch(function (error) {
      console.log(error);
    })
  
  //Building the response object
  const message = {
    message: reversedMessageRes.data['message'],
    rand: Math.random()
  }

  response.send(message)
})

app.listen(port, () => console.log('Listening on port ' + port))

