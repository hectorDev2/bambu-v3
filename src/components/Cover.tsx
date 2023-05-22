import React, { ReactNode } from 'react'

interface CoverProps {
  coverClass?: string
  children: ReactNode
}

const Cover = ({ coverClass = 'defaultHero', children }: CoverProps) => {
  return <header className={coverClass}>{children}</header>
}

export default Cover
