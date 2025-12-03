export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Eva Gray Events
            </h3>
            <p className="text-gray-600">
              Creating memorable experiences through exceptional events.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-600 hover:text-primary transition-colors duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href="/upcoming" className="text-gray-600 hover:text-primary transition-colors duration-200">
                  Upcoming Events
                </a>
              </li>
              <li>
                <a href="/past" className="text-gray-600 hover:text-primary transition-colors duration-200">
                  Past Events
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <p className="text-gray-600 mb-4">
              Stay updated with the latest events
            </p>
            <div className="flex gap-4">
              <a 
                href="https://luma.com/user/EvaGray" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors duration-200"
              >
                Luma Profile
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 text-center text-gray-600">
          <p>&copy; {currentYear} Eva Gray Events. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Powered by{' '}
            <a 
              href="https://www.cosmicjs.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-dark transition-colors duration-200"
            >
              Cosmic
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}