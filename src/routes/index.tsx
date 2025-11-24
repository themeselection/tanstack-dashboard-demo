import { createFileRoute } from '@tanstack/react-router'


export const Route = createFileRoute('/')({ component: App })

function App() {


  return (
    <div className="min-h-screen">
      <h1 className="text-3xl">Hello, TanStack Start!</h1>
    </div>
  )
}
