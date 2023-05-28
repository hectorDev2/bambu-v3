import { GetStaticProps } from 'next'
import Head from 'next/head'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Settings } from 'sanity'
import { Banner, Cover } from 'src/components'
import { Button } from 'src/components/buttons/ButtonFeatures'
import { title } from 'src/lib/demo.data'
import { getSettings, getAllRooms } from 'src/lib/sanity.client'
import { Room } from 'src/lib/sanity.queries'

import RoomsContainer from './containers/RoomContainer'
import { initializeData } from './rooms/RoomSlice'

interface PageProps {
  rooms: Room[]
  preview: boolean
  token: string | null
}

interface Query {
  [key: string]: string
}

interface PreviewData {
  token?: string
}

const RoomsPage = (props: PageProps) => {
  const { rooms, preview, token } = props
  const dispatch = useDispatch()

  const payload: any = rooms

  useEffect(() => {
    dispatch(initializeData(payload))
  }, [dispatch, payload])

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <title>Habitaciones|{title} </title>
      </Head>
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

export const getStaticProps: GetStaticProps<
  PageProps,
  Query,
  PreviewData
> = async (ctx) => {
  const { preview = false, previewData = {} } = ctx

  const [settings, rooms = []] = await Promise.all([
    getSettings(),
    getAllRooms(),
  ])

  return {
    props: {
      rooms,
      preview,
      token: null,
    },
  }
}
