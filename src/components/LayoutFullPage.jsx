import { ThemeToggle } from '@/components/ThemeToggle'

export function LayoutFullPage({ children }) {
  return (
    <>
      <ThemeToggle />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </main>
    </>
  )
}
