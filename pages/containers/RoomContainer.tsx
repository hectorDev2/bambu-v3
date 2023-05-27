import RoomsFilter from 'pages/rooms/components/RoomsFilter'
import RoomsList from 'pages/rooms/RoomsList'
import React from 'react'
import { SearchFilters } from 'src/components/RoomFilter'
import { RoomSearch } from 'src/components/RoomSearch'
import rooms from 'src/schemas/rooms'

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
      <RoomsList />
      {/* <RoomSearch /> */}
    </>
  )
}

export default RoomsContainer
