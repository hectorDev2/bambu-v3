'use client'
import { createSlice } from '@reduxjs/toolkit'

import { RoomObject } from '../../src/interfaces'
import { RoomSelect } from '../../src/interfaces/roomSelect'
const rooms=[]

export interface InitialState {
  roomsList: RoomObject[]
  favorites?: RoomObject[]
  filters: {
    type: string
    breakfast: boolean
    capacity: number
    pets: boolean

  }
  featuredRooms?: any[]
}
const formatRooms = rooms

let featuredRooms = formatRooms.filter(
  (room: RoomSelect) => room.featured === true
)

export const initialState: InitialState = {
  roomsList: formatRooms,
  favorites: [],
  filters: {
    type: 'all',
    breakfast: false,
    capacity: 1,
    pets: false,
  },
  featuredRooms
}

export const roomSlice = createSlice({
  name: 'roomState',
  initialState: initialState,
  reducers: {
    setFilter: ({ filters}: InitialState, { payload }: any) => {
      const { name, value } = payload
      filters[name] = value
    },

    filterRooms: ({ filters,roomsList }: InitialState) => {
      const rooms = roomsList
      let { type, capacity, breakfast, pets } = filters
      // all the rooms

      let tempRooms = [...rooms]

      // transform value
      capacity = Number(capacity)

      // filter by type
      if (type !== 'all') {
        console.log(tempRooms,'tempRooms before' );
        tempRooms = tempRooms.filter((room: any) => room.type === type)
        console.log(tempRooms,'tempRooms after');
        
      }

      // // filter by capacity
      if (capacity !== 1) {
        tempRooms = tempRooms.filter((room: any) => room.capacity >= capacity)
      }


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
    },
    initializeData: (state: InitialState, { payload }: any):any => {

      return {...state,roomsList: payload}
    }
  }
})

export const { setFilter, filterRooms,initializeData } = roomSlice.actions

export default roomSlice.reducer
