import React from 'react'
import { urlForImage } from 'src/lib/sanity.image'
import Banner from './Banner'
import { Button } from './buttons/ButtonFeatures'
import StyledCover from './StyledCover'
import Image from 'next/image'

export const RoomDetails = ({ room }) => {
  const {
    title,
    description,
    capacity,
    size,
    price,
    extras,
    breakfast,
    pets,
    images,
  } = room

  return (
    <>
      <StyledCover img={`${urlForImage(images[0]).width(500).url()}`}>
        <Banner title={`${title} `}>
          <Button title={'ver habitaciones'} route={'/rooms'} />
        </Banner>
      </StyledCover>

      <section className="single-room">
        <div className="single-room-images">
          {images.map((item: any, index: any) => (
            <>
              <Image
                key={index}
                src={`${urlForImage(item).width(250).url()}`}
                alt={title}
                width={250}
                height={200}
              />
            </>
          ))}
        </div>
        <div className="single-room-info">
          <article className="desc">
            <h3>details</h3>
            <p>{description}</p>
          </article>
          <article className="info">
            <h3>info</h3>
            <h6>price : ${price}</h6>
            <h6>size : {size} </h6>
            <h6>
              max capacity:{' '}
              {capacity > 1 ? `${capacity} people` : `${capacity} person`}
            </h6>
            <h6>{pets ? 'pets allowed' : 'no pets allowed'}</h6>
            <h6>{breakfast && 'free breakfast included'}</h6>
          </article>
        </div>
      </section>
      <section className="room-extras">
        <h6>extras</h6>
        <ul className="extras">
          {extras.map((item: any, index: number) => {
            return <li key={index}> - {item.extra}</li>
          })}
        </ul>
      </section>
    </>
  )
}
