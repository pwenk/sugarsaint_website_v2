'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { QuizProgress } from '@/components/quiz/QuizProgress'
import { QuizQuestion } from '@/components/quiz/QuizQuestion'
import { questions } from '@/lib/quiz/questions'
import type { QuizAnswer } from '@/lib/quiz/types'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export default function QuizQuestionsPage() {
  const router = useRouter()
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<QuizAnswer[]>([])
  const [isLoaded, setIsLoaded] = useState(false)

  // Load answers from localStorage on mount
  useEffect(() => {
    const savedAnswers = localStorage.getItem('quizAnswers')
    if (savedAnswers) {
      try {
        setAnswers(JSON.parse(savedAnswers))
      } catch (e) {
        console.error('Failed to parse saved answers:', e)
      }
    }
    setIsLoaded(true)
  }, [])

  // Save answers to localStorage whenever they change
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('quizAnswers', JSON.stringify(answers))
    }
  }, [answers, isLoaded])

  const currentQuestion = questions[currentQuestionIndex]
  const currentAnswer = answers.find((a) => a.questionId === currentQuestion.id)

  const handleAnswerChange = (answer: string | string[]) => {
    const newAnswers = answers.filter((a) => a.questionId !== currentQuestion.id)
    newAnswers.push({
      questionId: currentQuestion.id,
      answer,
    })
    setAnswers(newAnswers)
  }

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      // Last question - redirect to email capture
      router.push('/quiz/email')
    }
  }

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const isAnswered = () => {
    if (!currentAnswer) return false

    if (Array.isArray(currentAnswer.answer)) {
      return currentAnswer.answer.length > 0
    }

    return currentAnswer.answer !== ''
  }

  if (!isLoaded) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#fffbf5]">
        <div className="text-[#9a8f7f]">Loading...</div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-[#fffbf5] px-4 py-8 sm:py-12">
      <div className="mx-auto w-full max-w-3xl space-y-8">
        {/* Progress Bar */}
        <QuizProgress
          currentQuestion={currentQuestionIndex + 1}
          totalQuestions={questions.length}
        />

        {/* Question Card */}
        <div className="rounded-2xl border border-[#efe4cf] bg-white p-6 shadow-lg sm:p-8">
          <QuizQuestion
            question={currentQuestion}
            selectedAnswer={currentAnswer?.answer || (currentQuestion.type === 'multiple' ? [] : '')}
            onAnswerChange={handleAnswerChange}
          />
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between gap-4">
          <Button
            variant="outline"
            onClick={handleBack}
            disabled={currentQuestionIndex === 0}
            className="px-6"
          >
            <ArrowLeft className="mr-2 size-4" />
            Back
          </Button>

          <Button
            onClick={handleNext}
            disabled={!isAnswered()}
            className="px-8"
          >
            {currentQuestionIndex === questions.length - 1 ? 'Get My Results' : 'Next'}
            <ArrowRight className="ml-2 size-4" />
          </Button>
        </div>

        {/* Help Text */}
        {!isAnswered() && (
          <p className="text-center text-sm text-[#9a8f7f]">
            Please select an answer to continue
          </p>
        )}
      </div>
    </main>
  )
}
