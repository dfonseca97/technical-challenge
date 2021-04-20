//Import required modules and set port
const express = require('express')
const app = express()
const port = 3000

//Configure format for REST requests
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

/**
 * reverse endpoint, receives a POST request with a message.
 * The message is reversed and sent back in the response.
 * This endpoint will be hidden and only accessed inside
 * the Kubernetes cluster.
 */
app.post('/reverse', (request, response) => {

    //Creates the response object with the reversed message.
    const message = {
        message: request.body.message.split("").reverse().join(""),
    }

    response.send(message)
})

app.listen(port, () => console.log('Listening on port ' + port))

