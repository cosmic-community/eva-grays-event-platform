import Link from 'next/link'
import type { Event } from '@/types'

interface EventCardProps {
  event: Event
  isPast?: boolean
}

export default function EventCard({ event, isPast = false }: EventCardProps) {
  const eventDate = new Date(event.metadata?.date || '')
  const formattedDate = eventDate.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
  
  const coverImage = event.metadata?.cover_image
  const defaultImage = 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop&auto=format'
  
  return (
    <Link href={`/events/${event.slug}`}>
      <article className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col">
        {/* Event Image */}
        <div className="relative h-56 overflow-hidden">
          <img
            src={coverImage ? `${coverImage.imgix_url}?w=800&h=600&fit=crop&auto=format,compress` : defaultImage}
            alt={event.title}
            width={400}
            height={280}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {isPast && (
            <div className="absolute top-4 right-4 bg-gray-900 bg-opacity-75 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Past Event
            </div>
          )}
        </div>
        
        {/* Event Details */}
        <div className="p-6 flex-grow flex flex-col">
          <div className="mb-4">
            <div className="flex items-center gap-2 text-primary text-sm font-semibold mb-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{formattedDate}</span>
            </div>
            <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-200 line-clamp-2">
              {event.title}
            </h3>
          </div>
          
          {event.metadata?.description && (
            <p className="text-gray-600 line-clamp-3 mb-4 flex-grow">
              {event.metadata.description}
            </p>
          )}
          
          {event.metadata?.location && (
            <div className="flex items-center gap-2 text-gray-600 text-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="line-clamp-1">{event.metadata.location}</span>
            </div>
          )}
          
          <div className="mt-4 pt-4 border-t border-gray-100">
            <span className="text-primary font-semibold group-hover:underline">
              View Details →
            </span>
          </div>
        </div>
      </article>
    </Link>
  )
}