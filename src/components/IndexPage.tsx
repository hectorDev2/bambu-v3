import { initializeData } from 'pages/rooms/RoomSlice'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import * as demo from 'src/lib/demo.data'
import type { Room, Settings } from 'src/lib/sanity.queries'

import Banner from './Banner'
import { Button } from './buttons/ButtonFeatures'
import Cover from './Cover'
import { FeaturedRooms } from './FeaturedRooms'
import IndexPageHead from './IndexPageHead'
import Layout from './Layout'
import Services from './Services'

export interface IndexPageProps {
  preview?: boolean
  loading?: boolean
  rooms: Room[]
  settings: Settings
}

export default function IndexPage(props: IndexPageProps) {
  const { preview, loading, settings } = props

  return (
    <>
      <IndexPageHead settings={settings} />

      <Layout preview={preview} loading={loading}>
        <Cover>
          <Banner
            title="Bambu hostel"
            subtitle="el mejor hostel en el centro historico del cusco"
          >
            <Button route="/rooms" title={'Habitaciones'} />
          </Banner>
        </Cover>
        <Services />
        <FeaturedRooms />
      </Layout>
    </>
  )
}
