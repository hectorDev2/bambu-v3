'use client'

import Link from 'next/link'
import RoomsContainer from 'pages/containers/RoomContainer'

import Banner from '../../src/components/Banner'
import { Button } from '../../src/components/buttons/ButtonFeatures'
import Cover from '../../src/components/Cover'

export default function Home() {
  return (
    <>
      <Cover coverClass="roomsHero">
        <Banner title="Nuestras Habitaciones">
          <Button to={'/'} title={'Regresar'} />
        </Banner>
      </Cover>
      <RoomsContainer />
    </>
  )
}
