import React from 'react'
import { Banner, Cover } from 'src/components'
import { Button } from 'src/components/buttons/ButtonFeatures'

import RoomsContainer from './containers/RoomContainer'

const RoomsPage = () => {
  return (
    <>
      <Cover coverClass="roomsHero">
        <Banner title="Nuestras Habitaciones">
          <Button title={'Regresar'} />
        </Banner>
      </Cover>
      <RoomsContainer />
    </>
  )
}

export default RoomsPage
