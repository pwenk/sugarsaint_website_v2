export type Outcome = 'green' | 'yellow' | 'red'

export interface QuizAnswer {
  questionId: number
  answer: string | string[]  // Single or multiple choice
}

export interface QuizResponse {
  email: string
  outcome: Outcome
  totalScore: number
  questionAnswers: QuizAnswer[]
}

export interface Question {
  id: number
  text: string
  subtext?: string
  type: 'single' | 'multiple'
  options: Option[]
}

export interface Option {
  label: string
  value: string
  points: number
}
