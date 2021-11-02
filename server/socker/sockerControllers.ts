import { Rooms } from '../model/room'

export const createRoom = (rooms: Rooms, roomId: string) => {
  rooms.createRoom(roomId)
}

export const joinRoom = (rooms: Rooms, roomId: string, userId: string) => {
  rooms.joinRoom(roomId, userId)
}
