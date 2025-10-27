'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function CourseLoginPage() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const response = await fetch('/api/course/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })

      const data = await response.json()

      if (response.ok) {
        // Redirect to course dashboard
        router.push('/course/dashboard')
      } else {
        setError(data.error || 'Invalid password')
      }
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFFBF5] p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-semibold text-[#2C2C2C]">
            Welcome to SugarSaint
          </CardTitle>
          <CardDescription className="text-base">
            Enter your course access password
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="password">Access Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                className="text-base"
              />
            </div>

            {error && (
              <div className="text-sm text-red-600 bg-red-50 p-3 rounded-md">
                {error}
              </div>
            )}

            <Button
              type="submit"
              className="w-full bg-[#D4AF37] hover:bg-[#C49F27] text-white"
              disabled={loading}
            >
              {loading ? 'Verifying...' : 'Access Course'}
            </Button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-600">
            <p>Your password was sent to you after purchase.</p>
            <p className="mt-2">
              Need help? Contact{' '}
              <a href="mailto:support@sugarsaint.bio" className="text-[#D4AF37] hover:underline">
                support@sugarsaint.bio
              </a>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
