'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function CourseDashboard() {
  const router = useRouter()

  const handleLogout = async () => {
    await fetch('/api/course/logout', { method: 'POST' })
    router.push('/course/login')
  }

  return (
    <div className="min-h-screen bg-[#FFFBF5]">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-[#2C2C2C]">SugarSaint Course</h1>
          <Button
            onClick={handleLogout}
            variant="outline"
            className="text-sm"
          >
            Logout
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-[#2C2C2C] mb-2">
            Welcome to SugarSaint
          </h2>
          <p className="text-lg text-gray-600">
            Your journey to metabolic mastery starts here.
          </p>
        </div>

        {/* Course Modules - Placeholder */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Module 1</CardTitle>
              <CardDescription>Foundation & Elimination</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Learn the fundamentals and eliminate the real metabolic disruptors.
              </p>
              <Button className="w-full bg-[#D4AF37] hover:bg-[#C49F27] text-white">
                Start Module
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Module 2</CardTitle>
              <CardDescription>Experimentation Phase</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Discover what works for YOUR body through systematic testing.
              </p>
              <Button className="w-full" variant="outline" disabled>
                Coming Soon
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Module 3</CardTitle>
              <CardDescription>Personalization</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Build your personalized metabolic optimization system.
              </p>
              <Button className="w-full" variant="outline" disabled>
                Coming Soon
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Placeholder message */}
        <div className="mt-12 p-6 bg-[#FFB84D]/10 border border-[#FFB84D]/20 rounded-lg">
          <h3 className="text-lg font-semibold text-[#2C2C2C] mb-2">
            Course Content Coming Soon
          </h3>
          <p className="text-gray-600">
            This is a placeholder dashboard. Your full course content will be added here.
            You've successfully set up password protection for your MVP!
          </p>
        </div>
      </main>
    </div>
  )
}
