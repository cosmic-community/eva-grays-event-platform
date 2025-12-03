import { getEventBySlug, getUpcomingEvents, getPastEvents } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'

interface EventPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: EventPageProps): Promise<Metadata> {
  const { slug } = await params
  const event = await getEventBySlug(slug)
  
  if (!event) {
    return {
      title: 'Event Not Found',
    }
  }
  
  return {
    title: `${event.title} | Eva Gray Events`,
    description: event.metadata?.description || event.title,
    openGraph: {
      title: event.title,
      description: event.metadata?.description || event.title,
      images: event.metadata?.cover_image?.imgix_url ? [
        {
          url: `${event.metadata.cover_image.imgix_url}?w=1200&h=630&fit=crop&auto=format,compress`,
        }
      ] : [],
    },
  }
}

export async function generateStaticParams() {
  const upcomingEvents = await getUpcomingEvents()
  const pastEvents = await getPastEvents()
  const allEvents = [...upcomingEvents, ...pastEvents]
  
  return allEvents.map((event) => ({
    slug: event.slug,
  }))
}

export default async function EventPage({ params }: EventPageProps) {
  const { slug } = await params
  const event = await getEventBySlug(slug)
  
  if (!event) {
    notFound()
  }
  
  const eventDate = new Date(event.metadata?.date || '')
  const isPastEvent = eventDate < new Date()
  const formattedDate = eventDate.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
  
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Back Navigation */}
      <Link 
        href={isPastEvent ? '/past' : '/upcoming'}
        className="inline-flex items-center text-primary hover:text-primary-dark mb-8 transition-colors duration-200"
      >
        ← Back to {isPastEvent ? 'Past' : 'Upcoming'} Events
      </Link>
      
      <article className="max-w-4xl mx-auto">
        {/* Event Header */}
        <header className="mb-8">
          {isPastEvent && (
            <span className="inline-block bg-gray-200 text-gray-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
              Past Event
            </span>
          )}
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{event.title}</h1>
          
          <div className="flex flex-wrap gap-6 text-gray-600">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{formattedDate}</span>
            </div>
            
            {event.metadata?.time && (
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{event.metadata.time}</span>
              </div>
            )}
            
            {event.metadata?.location && (
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{event.metadata.location}</span>
              </div>
            )}
          </div>
        </header>
        
        {/* Cover Image */}
        {event.metadata?.cover_image && (
          <div className="mb-8 rounded-xl overflow-hidden">
            <img
              src={`${event.metadata.cover_image.imgix_url}?w=1600&h=900&fit=crop&auto=format,compress`}
              alt={event.title}
              width={800}
              height={450}
              className="w-full h-auto"
            />
          </div>
        )}
        
        {/* Event Description */}
        {event.metadata?.description && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">About This Event</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {event.metadata.description}
            </p>
          </div>
        )}
        
        {/* Event Content */}
        {event.content && (
          <div className="prose prose-lg max-w-none mb-8">
            <div dangerouslySetInnerHTML={{ __html: event.content }} />
          </div>
        )}
        
        {/* Ticket/RSVP Button */}
        {!isPastEvent && event.metadata?.ticket_url && (
          <div className="mt-12 p-8 bg-gradient-to-r from-primary to-secondary rounded-xl text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Join?</h3>
            <a
              href={event.metadata.ticket_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Get Tickets
            </a>
          </div>
        )}
      </article>
    </div>
  )
}