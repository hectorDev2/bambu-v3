import AirportShuttleIcon from '@mui/icons-material/AirportShuttle'
import HikingIcon from '@mui/icons-material/Hiking'
import LiquorIcon from '@mui/icons-material/Liquor'
import SportsBarIcon from '@mui/icons-material/SportsBar'
import React, { Component } from 'react'

import Title from './Title'

interface Service {
  icon: JSX.Element | string
  title: string
  info: string
}

interface IStateServices {
  services: Service[]
}

export default class Services extends Component<{}, IStateServices> {
  public readonly state: Readonly<IStateServices> = {
    services: [
      {
        icon: <LiquorIcon fontSize="large" />,
        title: 'free cocktails',
        info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      },
      {
        icon: <HikingIcon fontSize="large" />,
        title: 'endless hiking',
        info: ' Lorem It was popularised in the 1960s with the release of Letraset sheets containing.',
      },
      {
        icon: <AirportShuttleIcon fontSize="large" />,
        title: 'free shuttles',
        info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      },
      {
        icon: <SportsBarIcon fontSize="large" />,
        title: 'strongest beers',
        info: 'Lorem There are many variations of passages of Lorem Ipsum available, but the majority form.',
      },
    ],
  }

  public render() {
    const { services } = this.state
    return (
      <section className="servicesBody">
        <Title title="servicesBody" />
        <div className="services-center">
          {services.map((item: Service, index: number) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            )
          })}
        </div>
      </section>
    )
  }
}
