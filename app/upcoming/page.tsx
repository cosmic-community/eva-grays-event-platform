import { getUpcomingEvents } from '@/lib/cosmic'
import EventCard from '@/components/EventCard'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Upcoming Events | Eva Gray',
  description: 'Browse all upcoming events by Eva Gray',
}

export const revalidate = 60

export default async function UpcomingEventsPage() {
  const upcomingEvents = await getUpcomingEvents()
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Upcoming Events</h1>
        <p className="text-xl text-gray-600">
          Discover what's coming next. Don't miss out on these exciting opportunities!
        </p>
      </div>
      
      {upcomingEvents.length === 0 ? (
        <div className="text-center py-16 bg-gray-50 rounded-lg">
          <p className="text-gray-600 text-lg">No upcoming events at the moment.</p>
          <p className="text-gray-500 mt-2">Check back soon for new events!</p>
        </div>
      ) : (
        <>
          <div className="mb-6 text-gray-600">
            Showing {upcomingEvents.length} {upcomingEvents.length === 1 ? 'event' : 'events'}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </>
      )}
    </div>
  )
}