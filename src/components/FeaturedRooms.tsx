import React from 'react'

import { StateSelector } from '../../interfaces'
import Room from './Room'
import Title from './Title'

export const FeaturedRooms = () => {
  const rooms = []
  const Rooms = rooms?.map((room: any) => {
    return <Room key={room.id} room={room} />
  })
  return (
    <section className="featured-rooms">
      <Title title="featured rooms" />
      <div className="featured-rooms-center">{Rooms}</div>
    </section>
  )
}
