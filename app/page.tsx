import { getUpcomingEvents } from '@/lib/cosmic'
import EventCard from '@/components/EventCard'
import Link from 'next/link'

export const revalidate = 60

export default async function HomePage() {
  const upcomingEvents = await getUpcomingEvents()
  
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Eva Gray's Events
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Discover and explore exciting events. Join us for unforgettable experiences.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link 
            href="/upcoming" 
            className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            View Upcoming Events
          </Link>
          <Link 
            href="/past" 
            className="bg-gray-200 hover:bg-gray-300 text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            View Past Events
          </Link>
        </div>
      </section>
      
      {/* Featured Upcoming Events */}
      <section className="mb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Upcoming Events</h2>
          <Link 
            href="/upcoming" 
            className="text-primary hover:text-primary-dark font-semibold transition-colors duration-200"
          >
            View All →
          </Link>
        </div>
        
        {upcomingEvents.length === 0 ? (
          <div className="text-center py-16 bg-gray-50 rounded-lg">
            <p className="text-gray-600 text-lg">No upcoming events at the moment.</p>
            <p className="text-gray-500 mt-2">Check back soon for new events!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.slice(0, 6).map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        )}
      </section>
      
      {/* Call to Action */}
      <section className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-12 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Never Miss an Event</h2>
        <p className="text-lg mb-6 opacity-90">
          Stay updated with the latest events and exclusive opportunities
        </p>
        <Link 
          href="/upcoming" 
          className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
        >
          Browse All Events
        </Link>
      </section>
    </div>
  )
}