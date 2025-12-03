import { createBucketClient } from '@cosmicjs/sdk'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
})

// Simple error helper for Cosmic SDK
function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error
}

// Fetch all upcoming events
export async function getUpcomingEvents() {
  try {
    const response = await cosmic.objects
      .find({ 
        type: 'events'
      })
      .props(['id', 'title', 'slug', 'metadata', 'created_at'])
      .depth(1)
    
    const events = response.objects
    const currentDate = new Date()
    
    // Filter and sort upcoming events
    const upcomingEvents = events
      .filter(event => {
        const eventDate = new Date(event.metadata?.date || '')
        return eventDate >= currentDate
      })
      .sort((a, b) => {
        const dateA = new Date(a.metadata?.date || '').getTime()
        const dateB = new Date(b.metadata?.date || '').getTime()
        return dateA - dateB
      })
    
    return upcomingEvents
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch upcoming events')
  }
}

// Fetch all past events
export async function getPastEvents() {
  try {
    const response = await cosmic.objects
      .find({ 
        type: 'events'
      })
      .props(['id', 'title', 'slug', 'metadata', 'created_at'])
      .depth(1)
    
    const events = response.objects
    const currentDate = new Date()
    
    // Filter and sort past events (newest first)
    const pastEvents = events
      .filter(event => {
        const eventDate = new Date(event.metadata?.date || '')
        return eventDate < currentDate
      })
      .sort((a, b) => {
        const dateA = new Date(a.metadata?.date || '').getTime()
        const dateB = new Date(b.metadata?.date || '').getTime()
        return dateB - dateA
      })
    
    return pastEvents
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch past events')
  }
}

// Fetch a single event by slug
export async function getEventBySlug(slug: string) {
  try {
    const response = await cosmic.objects
      .findOne({
        type: 'events',
        slug
      })
      .props(['id', 'title', 'slug', 'metadata', 'content', 'created_at'])
      .depth(1)
    
    return response.object
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    throw new Error('Failed to fetch event')
  }
}