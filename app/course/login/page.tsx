'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { MINTLIFY_URL, FREE_MODULE_URL } from '@/lib/config'

export default function CourseLoginPage() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

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
        // Redirect to Mintlify course docs
        window.location.href = MINTLIFY_URL
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
    <div className="min-h-screen flex items-center justify-center bg-[#FFFBF5] p-4 py-12">
      <div className="w-full max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-semibold text-[#2C2C2C] mb-3">
            Welcome to SugarSaint
          </h1>
          <p className="text-lg text-gray-600">
            Choose how you&apos;d like to access the course
          </p>
        </div>

        {/* Two Options */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Free Module 1 */}
          <Card className="border-2 border-[#FFB84D]/30 bg-gradient-to-br from-[#FFB84D]/5 to-transparent">
            <CardHeader className="text-center pb-4">
              <div className="inline-block px-3 py-1 bg-[#FFB84D] text-white text-xs font-semibold rounded-full mb-3">
                FREE ACCESS
              </div>
              <CardTitle className="text-2xl font-semibold text-[#2C2C2C]">
                Try Module 1 Free
              </CardTitle>
              <CardDescription className="text-base">
                Start your metabolic journey with no commitment
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3 text-sm text-gray-600">
                <p className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Introduction to the SugarSaint method</span>
                </p>
                <p className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Foundation principles</span>
                </p>
                <p className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Your first elimination steps</span>
                </p>
              </div>

              <Button
                onClick={() => window.location.href = FREE_MODULE_URL}
                className="w-full bg-[#FFB84D] hover:bg-[#FF9F2E] text-white mt-4"
              >
                Access Free Module
              </Button>

              <p className="text-xs text-center text-gray-500 mt-3">
                No password required
              </p>
            </CardContent>
          </Card>

          {/* Full Course Access */}
          <Card className="border-2 border-[#D4AF37]/50 bg-gradient-to-br from-[#D4AF37]/5 to-transparent">
            <CardHeader className="text-center pb-4">
              <div className="inline-block px-3 py-1 bg-[#D4AF37] text-white text-xs font-semibold rounded-full mb-3">
                FULL COURSE
              </div>
              <CardTitle className="text-2xl font-semibold text-[#2C2C2C]">
                Complete Course Access
              </CardTitle>
              <CardDescription className="text-base">
                All modules, resources, and lifetime updates
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-sm font-medium">
                    Access Password
                  </Label>
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
                  {loading ? 'Verifying...' : 'Access Full Course'}
                </Button>
              </form>

              <div className="mt-4 text-center text-xs text-gray-500">
                <p>Password sent to you after purchase</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-gray-600">
          <p>
            Need help? Contact{' '}
            <a href="mailto:support@sugarsaint.bio" className="text-[#D4AF37] hover:underline">
              support@sugarsaint.bio
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
