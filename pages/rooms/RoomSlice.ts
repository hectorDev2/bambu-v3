'use client'
import { createSlice } from '@reduxjs/toolkit'
import { formatData } from 'src/utils/formatData'

// import { products } from '@/app/globalRedux/data'
// import { formatData } from '@/app/utils/formatData'
import { RoomObject } from '../../interfaces'
import { RoomSelect } from '../../interfaces/roomSelect'
const products=[]

export interface InitialState {
  roomsList: RoomObject[]
  favorites?: RoomObject[]
  filters: {
    type: string
    breakfast: boolean
    capacity: number
    pets: boolean

    price: number
    minPrice: number
    maxPrice: number
    minSize: number
    maxSize: number
  }
  featuredRooms?: any[]
}
const formatRooms = formatData(products)
let featuredRooms = formatRooms.filter(
  (room: RoomSelect) => room.featured === true
)
let maxPrice = Math.max(...formatRooms.map((item: RoomSelect) => item.price))
let maxSize = Math.max(...formatRooms.map((item: RoomSelect) => item.size))

export const initialState: InitialState = {
  roomsList: formatRooms,
  favorites: [],
  filters: {
    type: 'all',
    breakfast: false,
    capacity: 1,
    pets: false,
    price: maxPrice,
    minPrice: 0,
    maxPrice,
    minSize: 0,
    maxSize
  },
  featuredRooms
}

export const roomSlice = createSlice({
  name: 'roomState',
  initialState: initialState,
  reducers: {
    setFilter: ({ filters }: any, { payload }: any) => {
      const { name, value } = payload
      filters[name] = value
    },

    filterRooms: ({ filters }: any) => {
      const rooms = initialState.roomsList

      let { type, capacity, minSize, maxSize, breakfast, pets } = filters
      // all the rooms

      let tempRooms = [...rooms]

      // transform value
      capacity = Number(capacity)

      // filter by type
      if (type !== 'all') {
        tempRooms = tempRooms.filter((room: any) => room.type === type)
        console.log(tempRooms, 'rooms')
      }

      // // filter by capacity
      if (capacity !== 1) {
        tempRooms = tempRooms.filter((room: any) => room.capacity >= capacity)
      }

      // // filter by size
      tempRooms = tempRooms.filter(
        (room: any) => room.size >= minSize && room.size <= maxSize
      )

      // // filter by breakfast
      if (breakfast) {
        tempRooms = tempRooms.filter((room: any) => room.breakfast === true)
      }

      // filter by pets
      if (pets) {
        tempRooms = tempRooms.filter((room: any) => room.pets === true)
      }

      // change state
      return { filters, roomsList: tempRooms }
    }
  }
})

export const { setFilter, filterRooms } = roomSlice.actions

export default roomSlice.reducer
