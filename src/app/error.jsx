'use client'

export default function Error({ error, reset }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-dvh text-center">
      <h2 className="text-2xl font-semibold">Something went wrong</h2>

      <button
        onClick={() => reset()}
        className="mt-4 px-4 py-2 border"
      >
        Try again
      </button>
    </div>
  )
}