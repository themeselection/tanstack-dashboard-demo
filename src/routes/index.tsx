import { Button } from '@/components/ui/button'
import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <div className="text-center space-y-6 px-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Welcome to Your Dashboard
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-md mx-auto">
          Get started by accessing your personalized dashboard
        </p>
        <div className="pt-4">
          <Button size="lg" asChild>
            <Link to="/dashboard">
              Access Dashboard
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
