import * as socketio from 'socket.io'
import { Rooms } from '../model/rooms'
import { createRoom, joinRoom } from './sockerControllers'

export const createRoomListener = (socket: socketio.Socket, rooms: Rooms) => {
  socket.on('LOBBY:CREATE', ({ roomId }) => {
    createRoom(rooms, roomId)
    // socket.emit('TEST', {data: 'data'})
  })
}

export const joinRoomListener = (socket: socketio.Socket, rooms: Rooms) => {
  socket.on('LOBBY:JOIN', ({ roomId }) => {
    socket.join(roomId)
    joinRoom(rooms, roomId, socket.id)
    // socket.emit('LOBBY:JOIN', { lul: 'lul' })
  })
}
