import type { QuizAnswer, Outcome } from './types'
import { questions } from './questions'

export function calculateScore(answers: QuizAnswer[]): number {
  let totalScore = 0

  answers.forEach((answer) => {
    const question = questions.find((q) => q.id === answer.questionId)
    if (!question) return

    // Question 1: Current Symptoms (Multiple Choice)
    // 0 symptoms = 0 points, 1-2 symptoms = 1 point, 3+ symptoms = 2 points
    if (question.id === 1) {
      const selectedOptions = Array.isArray(answer.answer) ? answer.answer : [answer.answer]
      // Filter out "none" option
      const symptomsSelected = selectedOptions.filter((opt) => opt !== 'none')

      if (symptomsSelected.length === 0) {
        totalScore += 0
      } else if (symptomsSelected.length <= 2) {
        totalScore += 1
      } else {
        totalScore += 2
      }
      return
    }

    // Question 6: What You're Hoping to Achieve (Multiple Choice)
    // Count aligned goals (excluding "quick-weight-loss")
    if (question.id === 6) {
      const selectedOptions = Array.isArray(answer.answer) ? answer.answer : [answer.answer]
      const alignedGoals = selectedOptions.filter((opt) => opt !== 'quick-weight-loss')

      // Check if "quick-weight-loss" was selected (penalty)
      if (selectedOptions.includes('quick-weight-loss')) {
        totalScore += -1
      }

      // Points for aligned goals: 1-2 aligned = 1pt, 3+ aligned = 2pts
      if (alignedGoals.length >= 3) {
        totalScore += 2
      } else if (alignedGoals.length >= 1) {
        totalScore += 1
      }
      return
    }

    // All other questions: Single choice with direct point values
    const selectedValue = Array.isArray(answer.answer) ? answer.answer[0] : answer.answer
    const option = question.options.find((opt) => opt.value === selectedValue)

    if (option) {
      totalScore += option.points
    }
  })

  return totalScore
}

export function determineOutcome(answers: QuizAnswer[], score: number): Outcome {
  // Check Question 5 (PUFA Dealbreaker) first
  const q5Answer = answers.find((a) => a.questionId === 5)

  if (!q5Answer) {
    // Shouldn't happen, but fallback to yellow
    return 'yellow'
  }

  const q5Value = Array.isArray(q5Answer.answer) ? q5Answer.answer[0] : q5Answer.answer

  // INSTANT RED: Not willing to eliminate PUFAs
  if (q5Value === 'not-willing') {
    return 'red'
  }

  // YELLOW: Not sure about PUFAs (regardless of score)
  if (q5Value === 'not-sure') {
    return 'yellow'
  }

  // If willing or already started, check total score
  // GREEN requires: Q5 = willing/already-started AND score >= 7
  if ((q5Value === 'willing' || q5Value === 'already-started') && score >= 7) {
    return 'green'
  }

  // YELLOW: Willing but low score (3-6 points)
  if ((q5Value === 'willing' || q5Value === 'already-started') && score >= 3 && score < 7) {
    return 'yellow'
  }

  // RED: Score too low (≤ 2 points)
  if (score <= 2) {
    return 'red'
  }

  // Default fallback (shouldn't reach here)
  return 'yellow'
}
