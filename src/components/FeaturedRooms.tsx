import React from 'react'
import { useSelector } from 'react-redux'

import { StateSelector } from '../interfaces'
import Room from './Room'
import Title from './Title'

export const FeaturedRooms = () => {
  const rooms = useSelector(
    ({ roomsState }: StateSelector) => roomsState.roomsList
  )

  const Rooms = rooms?.map((room: any) => <Room key={room._id} room={room} />)
  return (
    <section className="featured-rooms">
      <Title title="featured rooms" />
      <div className="featured-rooms-center">{Rooms}</div>
    </section>
  )
}
