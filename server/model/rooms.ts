export interface User {
  id: string
}

export interface Room {
  id: string
  users: User[] | []
}

export class Rooms {
  rooms: Room[] | []

  constructor() {
    this.rooms = []
  }
  createRoom(roomId: string) {
    this.rooms = [
      ...this.rooms,
      {
        id: roomId,
        users: [],
      },
    ]
    console.log(this.rooms)
  }

  joinRoom(roomId: string, userId: string) {
    console.log('ROOMS:', this.rooms)
    this.rooms = [
      ...this.rooms.map(room =>
        room.id !== roomId ? room : { ...room, users: [...room.users, { id: userId }] },
      ),
    ]
    console.log(this.rooms[0])
  }
}
