import RoomsFilter from 'pages/rooms/components/RoomsFilter'
import RoomsList from 'pages/rooms/RoomsList'
import React from 'react'
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
      <RoomsFilter />
      <RoomsList />
      {/* <RoomSearch /> */}
    </>
  )
}

export default RoomsContainer
