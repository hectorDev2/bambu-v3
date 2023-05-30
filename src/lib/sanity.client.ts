import { apiVersion, dataset, projectId, useCdn } from 'src/lib/sanity.api'
import {
  indexQuery,
  Room,
  type Settings,
  settingsQuery,
  roomSlugsQuery,
  roomBySlugQuery,
  roomAndMoreStoriesQuery,
} from 'src/lib/sanity.queries'
import { createClient } from 'next-sanity'

/**
 * Checks if it's safe to create a client instance, as `@sanity/client` will throw an error if `projectId` is false
 */
const client = projectId
  ? createClient({ projectId, dataset, apiVersion, useCdn })
  : null

export async function getSettings(): Promise<Settings> {
  if (client) {
    return (await client.fetch(settingsQuery)) || {}
  }
  return {}
}

export async function getAllRooms(): Promise<any[]> {
  if (client) {
    return (await client.fetch(indexQuery)) || []
  }
  return []
}

export async function getAllRoomSlugs(): Promise<Pick<any, 'slug'>[]> {
  if (client) {
    const slugs = (await client.fetch<string[]>(roomSlugsQuery)) || []

    return slugs.map((slug) => ({ slug }))
  }
  return []
}

export async function getRoomBySlug(slug: string): Promise<any> {
  if (client) {
    console.log(client, 'client')

    return (await client.fetch(roomBySlugQuery, { slug })) || ({} as any)
  }
  return {} as any
}

export async function getRoomAndMoreStories(
  slug: string
): Promise<{ room: Room; moreRooms: Room[] }> {
  if (projectId) {
    const client = createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn,
    })

    return await client.fetch(roomAndMoreStoriesQuery, { slug })
  }

  return { room: null, moreRooms: [] }
}
