import * as socketio from 'socket.io'
import * as http from 'http'
import { Rooms } from '../model/room'
import { createRoomListener, joinRoomListener } from './sockerListeners'

const socker = (server: http.Server) => {
  const io: socketio.Server = new socketio.Server()
  io.attach(server)
  const rooms = new Rooms()

  io.on('connection', (socket: socketio.Socket) => {
    console.log('connection')
    createRoomListener(socket, rooms)
    joinRoomListener(socket, rooms)

    socket.on('disconnect', () => {
      console.log('client disconnected')
    })
  })

  return rooms
}

export default socker
