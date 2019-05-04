const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)
const port = process.env.PORT || 3000

app.use('/', express.static('public'))

io.on('connection', (socket) => {
  console.log('new connection')
  socket.on('disconnect', () => {
    console.log('a user disconected...')
  })
})

http.listen(port, () => console.log(`Listning on http://localhost:${port}`))
