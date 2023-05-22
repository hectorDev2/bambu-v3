import * as demo from 'src/lib/demo.data'
import type { Settings } from 'src/lib/sanity.queries'

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
  rooms: any[]
  settings: Settings
}

export default function IndexPage(props: IndexPageProps) {
  const { preview, loading, rooms, settings } = props
  const { title = demo.title, description = demo.description } = settings || {}
  console.log(rooms, 'rooms')

  return (
    <>
      <IndexPageHead settings={settings} />

      <Layout preview={preview} loading={loading}>
        <Cover>
          <Banner
            title="Bambu hostel"
            subtitle="el mejor hostel en el centro historico del cusco"
          >
            <Button to="/rooms" title={'Habitaciones'} />
          </Banner>
        </Cover>
        <Services />
        <FeaturedRooms />
      </Layout>
    </>
  )
}
