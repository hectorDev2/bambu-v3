export interface IStateContext {
  rooms: any[]
  sortedRooms: any[]
  featuredRooms: any[]
  loading: boolean
  type: string
  capacity: number
  price: number
  minPrice: number
  maxPrice: number
  minSize: number
  maxSize: number
  breakfast: boolean
  pets: boolean
}

export interface RoomObject {
  name: string
  slug: string
  images: string[]
  price: number
}

export interface RoomsObject {
  rooms: any[]
  sortedRooms: any[]
  featuredRooms: any[]
  loading: boolean
  type: string
  capacity: number
  price: number
  minPrice: number
  maxPrice: number
  minSize: number
  maxSize: number
  breakfast: boolean
  pets: boolean
  getRoom: (slug: string) => any
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => any
  handleChecked: (event: any) => any
}

export interface StateSelector {
  roomsState: {
    roomsList: []
    filters: {
      type: string
      capacity: number
      maxPrice: number
      minPrice: number
      price: number
      maxSize: number
      minSize: number
    }
    featuredRooms: []
  }
}
