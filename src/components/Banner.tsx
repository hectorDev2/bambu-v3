import React, { ReactNode } from 'react'

interface CoverProps {
  title: string
  subtitle?: string
  children: ReactNode
}

const Banner = ({ subtitle, title, children }: CoverProps) => {
  return (
    <div className='banner'>
      <h1>{title}</h1>
      <p>{subtitle}</p>
      {children}
    </div>
  )
}

export default Banner
