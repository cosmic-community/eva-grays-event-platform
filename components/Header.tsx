import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Eva Gray
          </Link>
          
          <nav>
            <ul className="flex items-center gap-8">
              <li>
                <Link 
                  href="/" 
                  className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/upcoming" 
                  className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
                >
                  Upcoming
                </Link>
              </li>
              <li>
                <Link 
                  href="/past" 
                  className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
                >
                  Past Events
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}