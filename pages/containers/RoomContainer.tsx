import { SearchFilters } from 'src/components/RoomFilter'
import RoomsFilter from 'pages/rooms/RoomsFilter'
import RoomsList from 'pages/rooms/RoomsList'
import React from 'react'
import rooms from 'src/schemas/rooms'
import { RoomSearch } from 'src/components/RoomSearch'

interface StateSelector {
  rooms: {
    roomsList: []
  }
}

const RoomsContainer = () => {
  // if (loading) {
  //   return <Loading />
  // }
  return (
    <>
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={rooms} />
      <RoomSearch />
    </>
  )
}

export default RoomsContainer
