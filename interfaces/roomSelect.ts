export interface RoomSelect {
  name: string
  slug: string
  type: string
  price: number
  size: number
  capacity: number
  pets: boolean
  breakfast: boolean
  featured: boolean
  description: string
  extras: string[]
  images: Image[]
  id: string
}

export interface Image {
  src: string
  height: number
  width: number
  blurDataURL: string
  blurWidth: number
  blurHeight: number
}
