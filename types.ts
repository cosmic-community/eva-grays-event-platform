// Base Cosmic object interface
export interface CosmicObject {
  id: string
  slug: string
  title: string
  content?: string
  metadata: Record<string, any>
  type: string
  created_at: string
  modified_at: string
}

// Event interface
export interface Event extends CosmicObject {
  type: 'events'
  metadata: {
    date: string
    location?: string
    cover_image?: {
      url: string
      imgix_url: string
    }
    description?: string
    time?: string
    venue?: string
    ticket_url?: string
  }
}

// API response types
export interface CosmicResponse<T> {
  objects: T[]
  total: number
  limit: number
  skip: number
}

// Type guard for runtime validation
export function isEvent(obj: CosmicObject): obj is Event {
  return obj.type === 'events'
}

// Utility type for creating events
export type CreateEventData = Omit<Event, 'id' | 'created_at' | 'modified_at'>