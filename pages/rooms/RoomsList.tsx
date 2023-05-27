import React from 'react'
import { useSelector } from 'react-redux'
import { StateSelector } from 'src/interfaces'

import Room from '../../src/components/Room'

const RoomsList = () => {
  const rooms = useSelector(
    ({ roomsState }: StateSelector) => roomsState.roomsList
  )

  console.log(rooms, 'rooms in roomsList')

  if (rooms?.length === 0) {
    return (
      <div className="empty-search">
        <h3>unfortunately no rooms matched your search parameters</h3>
      </div>
    )
  }

  return (
    <section className="roomslist">
      <div className="roomslist-center">
        {rooms?.map((item: any) => {
          return <Room key={item.id} room={item} />
        })}
      </div>
    </section>
  )
}

export default RoomsList
