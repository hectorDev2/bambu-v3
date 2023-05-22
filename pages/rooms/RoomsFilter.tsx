import { Select } from '@mui/base'
import { FormControl, InputLabel } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Title from '../../src/components/Title'
import { StateSelector } from '../../interfaces'
import { SelectMul } from './components/Select'
import { filterRooms, initialState, setFilter } from './RoomSlice'

interface IPropsRoomsFilter {
  rooms: any[]
}

// Get all unique items
const getUnique = (items: any[], value: string): any => {
  const allRoomTypes: string[] = Array.from(
    new Set(items.map((room) => room[value]))
  )

  return allRoomTypes
}

const RoomsFilter = ({ rooms }: any) => {
  const filters: any = {}
  const { type, capacity, maxPrice, minPrice, price, minSize, maxSize } =
    filters

  const dispatch = useDispatch()

  let types = getUnique(initialState.roomsList, 'type')
  types = ['all', ...types]

  let people = getUnique(initialState.roomsList, 'capacity')

  const handleChange = (e: any) => {
    console.log('readys', e.target)

    const { name, value } = e.target
    const payload = {
      name,
      value,
    }
    dispatch(setFilter(payload as any))
  }

  const handleChecked = (event: any) => {
    const value = event.target.checked
    const name = event.target.name

    const payload = {
      name,
      value,
    }
    dispatch(setFilter(payload as any))
  }

  // useEffect(() => {
  //   dispatch(filterRooms())
  // }, [filters])
  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        <div className="container-select">
          <SelectMul
            label={'tipo'}
            value={type}
            handleChange={handleChange}
            options={types}
            name="type"
          />
          <SelectMul
            label={'capacidad'}
            name="capacity"
            value={capacity}
            handleChange={handleChange}
            options={people}
          />
        </div>
        {/* end of guest */}
        {/* extras */}
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              onChange={handleChecked}
            />
            <label htmlFor="breakfast">breakfast</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="pets"
              id="pets"
              onChange={handleChecked}
            />
            <label htmlFor="pets">pets</label>
          </div>
        </div>
        {/* end of extras */}
      </form>
    </section>
  )
}

export default RoomsFilter
