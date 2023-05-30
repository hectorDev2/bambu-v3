import { groq } from 'next-sanity'

const roomFields = groq`
  _id,
  title,
  slug,
  type,
  price,
  pets,
  capacity,
  breakfast,
  featured,
  description,
  extras,
  mainImage,
  images

`

export const settingsQuery = groq`*[_type == "settings"][0]`

export const indexQuery = groq`
*[_type == "room"] | order(date desc, _updatedAt desc) {
  ${roomFields}
}`

export const roomAndMoreStoriesQuery = groq`
{
  "room": *[_type == "room" && slug.current == $slug] | order(_updatedAt desc) [0] {
    content,
    ${roomFields}
  },
  "moreRooms": *[_type == "room" && slug.current != $slug] | order(date desc, _updatedAt desc) [0...2] {
    content,
    ${roomFields}
  }
}`

export const roomSlugsQuery = groq`
*[_type == "room" && defined(slug.current)][].slug.current
`

export const roomBySlugQuery = groq`
*[_type == "room" && slug.current == $slug][0] {
  ${roomFields}
}
`

export interface Room {
  _id: string
  title: string
  slug: any
  price?: number
  capacity?: number
  pet: boolean
  breakfast: boolean
  description: string
  size: string
}

export interface Settings {
  title?: string
  description?: any[]
  ogImage?: {
    title?: string
  }
}
