const express = require('express');
const socketio = require('socket.io')
const http = require('http')

const PORT = process.env.PORT || 8080

const router = require('./Routes/Routes')

const app = express()
const server = http.createServer(app)
const io = socketio(server, {
  cors: {
    origin: "https://example.com",
    methods: ["GET", "POST"]
  }
})

io.on('connection', () => {
  console.log('New connection')
  socket.on('disconnect', () => {
    console.log('User left the chat')
  })
})

app.use(router)

server.listen(PORT, () => console.log('Server is up and running @ PORT:' + PORT))