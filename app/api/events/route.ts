import { NextResponse } from 'next/server'
import { getUpcomingEvents, getPastEvents } from '@/lib/cosmic'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const filter = searchParams.get('filter') || 'upcoming'
  
  try {
    const events = filter === 'past' ? await getPastEvents() : await getUpcomingEvents()
    return NextResponse.json({ events })
  } catch (error) {
    console.error('Error fetching events:', error)
    return NextResponse.json(
      { error: 'Failed to fetch events' },
      { status: 500 }
    )
  }
}