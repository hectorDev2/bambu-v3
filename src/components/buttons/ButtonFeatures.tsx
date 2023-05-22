import Link from 'next/link'
import React from 'react'

export const Button = ({
  title,
  to,
  className,
}: {
  title: string
  to: string
  className?: string
}) => {
  return (
    <Link className={className} href={to}>
      <button className="button"> {title}</button>
    </Link>
  )
}
