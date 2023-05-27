import Link from 'next/link'
import React from 'react'

export const Button = ({
  title,
  slug = '',
  route = '/',
  className,
}: {
  title: string
  slug?: string
  route?
  className?: string
}) => {
  return (
    <Link className={className} href={route}>
      <button className="button"> {title}</button>
    </Link>
  )
}
