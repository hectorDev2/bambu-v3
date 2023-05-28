import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { StateSelector } from 'src/interfaces'

import Room from '../../src/components/Room'

const RoomsList = () => {
  const rooms = useSelector(
    ({ roomsState }: StateSelector) => roomsState.roomsList
  )

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
