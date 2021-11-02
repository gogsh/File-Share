import { Rooms } from '../model/rooms'

export const createRoom = (rooms: Rooms, roomId: string) => {
  rooms.createRoom(roomId)
}

export const joinRoom = (rooms: Rooms, roomId: string, userId: string) => {
  rooms.joinRoom(roomId, userId)
}
