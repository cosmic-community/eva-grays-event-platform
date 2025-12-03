export default function UpcomingLoading() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12">
        <div className="h-12 bg-gray-200 rounded-lg w-64 mb-4 animate-pulse"></div>
        <div className="h-6 bg-gray-200 rounded-lg w-96 animate-pulse"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="bg-white rounded-xl overflow-hidden shadow-md">
            <div className="h-56 bg-gray-200 animate-pulse"></div>
            <div className="p-6">
              <div className="h-4 bg-gray-200 rounded w-24 mb-4 animate-pulse"></div>
              <div className="h-6 bg-gray-200 rounded w-full mb-4 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-2 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}