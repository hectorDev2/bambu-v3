import React from 'react'
import './style.css'

export const Comments = () => {
  return (
    <>
      <h2 style={{ textAlign: 'center' }}>Comentarios </h2>
      <div id='scene'>
        <div id='left-zone'>
          <ul className='list'>
            <li className='item'>
              <input
                type='radio'
                id='radio_The garden strawberry (or simply strawberry /ˈstrɔːbᵊri/; Fragaria × ananassa) is a widely grown hybrid species of the genus Fragaria (collectively known as the strawberries)'
                name='basic_carousel'
                value='The garden strawberry (or simply strawberry /ˈstrɔːbᵊri/; Fragaria × ananassa) is a widely grown hybrid species of the genus Fragaria (collectively known as the strawberries)'
              />
              <label
                className='label_strawberry'
                htmlFor='radio_The garden strawberry (or simply strawberry /ˈstrɔːbᵊri/; Fragaria × ananassa) is a widely grown hybrid species of the genus Fragaria (collectively known as the strawberries)'
              >
                strawberry
              </label>
              <div className='content content_strawberry'>
                <span className='picto'></span>
                <h1>strawberry</h1>
                <p>
                  The garden strawberry (or simply strawberry /ˈstrɔːbᵊri/;
                  Fragaria × ananassa) is a widely grown hybrid species of the
                  genus Fragaria (collectively known as the strawberries)
                </p>
              </div>
            </li>
            <li className='item'>
              <input
                type='radio'
                id='radio_A banana is an edible fruit, botanically a berry, produced by several kinds of large herbaceous flowering plants in the genus Musa.'
                name='basic_carousel'
                value='A banana is an edible fruit, botanically a berry, produced by several kinds of large herbaceous flowering plants in the genus Musa.'
              />
              <label
                className='label_banana'
                htmlFor='radio_A banana is an edible fruit, botanically a berry, produced by several kinds of large herbaceous flowering plants in the genus Musa.'
              >
                banana
              </label>
              <div className='content content_banana'>
                <span className='picto'></span>
                <h1>banana</h1>
                <p>
                  A banana is an edible fruit, botanically a berry, produced by
                  several kinds of large herbaceous flowering plants in the
                  genus Musa.
                </p>
              </div>
            </li>
            <li className='item'>
              <input
                type='radio'
                id='radio_The apple tree (Malus domestica) is a deciduous tree in the rose family best known for its sweet, pomaceous fruit, the apple. It is cultivated worldwide as a fruit tree, and is the most widely grown species in the genus Malus.'
                name='basic_carousel'
                value='The apple tree (Malus domestica) is a deciduous tree in the rose family best known for its sweet, pomaceous fruit, the apple. It is cultivated worldwide as a fruit tree, and is the most widely grown species in the genus Malus.'
              />
              <label
                className='label_apple'
                htmlFor='radio_The apple tree (Malus domestica) is a deciduous tree in the rose family best known for its sweet, pomaceous fruit, the apple. It is cultivated worldwide as a fruit tree, and is the most widely grown species in the genus Malus.'
              >
                apple
              </label>
              <div className='content content_apple'>
                <span className='picto'></span>
                <h1>apple</h1>
                <p>
                  The apple tree (Malus domestica) is a deciduous tree in the
                  rose family best known for its sweet, pomaceous fruit, the
                  apple. It is cultivated worldwide as a fruit tree, and is the
                  most widely grown species in the genus Malus.
                </p>
              </div>
            </li>
            <li className='item'>
              <input
                type='radio'
                id='radio_The orange (specifically, the sweet orange) is the fruit of the citrus species Citrus × sinensis in the family Rutaceae.'
                name='basic_carousel'
                value='The orange (specifically, the sweet orange) is the fruit of the citrus species Citrus × sinensis in the family Rutaceae.'
              />
              <label
                className='label_orange'
                htmlFor='radio_The orange (specifically, the sweet orange) is the fruit of the citrus species Citrus × sinensis in the family Rutaceae.'
              >
                orange
              </label>
              <div className='content content_orange'>
                <span className='picto'></span>
                <h1>orange</h1>
                <p>
                  The orange (specifically, the sweet orange) is the fruit of
                  the citrus species Citrus × sinensis in the family Rutaceae.
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div id='middle-border'></div>
        <div id='right-zone'></div>
      </div>
    </>
  )
}
