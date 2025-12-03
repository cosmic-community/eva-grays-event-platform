import { getPastEvents } from '@/lib/cosmic'
import EventCard from '@/components/EventCard'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Past Events | Eva Gray',
  description: 'Browse past events by Eva Gray',
}

export const revalidate = 60

export default async function PastEventsPage() {
  const pastEvents = await getPastEvents()
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Past Events</h1>
        <p className="text-xl text-gray-600">
          Take a look back at our successful events and memorable moments.
        </p>
      </div>
      
      {pastEvents.length === 0 ? (
        <div className="text-center py-16 bg-gray-50 rounded-lg">
          <p className="text-gray-600 text-lg">No past events to display yet.</p>
          <p className="text-gray-500 mt-2">Events will appear here after they've concluded.</p>
        </div>
      ) : (
        <>
          <div className="mb-6 text-gray-600">
            Showing {pastEvents.length} {pastEvents.length === 1 ? 'event' : 'events'}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((event) => (
              <EventCard key={event.id} event={event} isPast />
            ))}
          </div>
        </>
      )}
    </div>
  )
}