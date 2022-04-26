const { Server } = require('socket.io')
const { v4: uuidv4 } = require('uuid')

const io = new Server(5000, {
    cors: {
        origin: '*',
    }
})

const users = new Map()
const messages = []

io.on('connection', socket => {
    // when a user enters chat
    socket.on('user', user => {
        const newUser = {
            id: uuidv4(),
            name: user
        }
        // send new user info and messages to new user
        users.set(socket.id, newUser)
        socket.emit('user', newUser)
        socket.emit('msg', messages)

        // send updated users list to all users
        io.emit('users', Array.from(users.values())) 
    })

    // when a message is sent
    socket.on('msg', msg => {
        messages.push(msg)

        io.emit('msg', messages)
    })

    // when user leaves chat
    socket.on('disconnect', () => {
        users.delete(socket.id)
        io.emit('users', Array.from(users.values())) 
    }) 
})