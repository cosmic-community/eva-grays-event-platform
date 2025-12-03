'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Something went wrong!</h2>
        <p className="text-gray-600 mb-8">
          We encountered an error while loading this page. Please try again.
        </p>
        <button
          onClick={reset}
          className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
        >
          Try again
        </button>
      </div>
    </div>
  )
}