export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-dvh text-center px-6">
      <h1 className="text-3xl font-semibold">Page not found</h1>

      <p className="mt-4">
        The page you are looking for does not exist.
      </p>

      <a href="/en" className="mt-6 underline">
        Go back home
      </a>
    </div>
  )
}