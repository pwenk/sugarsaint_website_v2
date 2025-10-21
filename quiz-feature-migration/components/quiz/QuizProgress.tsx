interface QuizProgressProps {
  currentQuestion: number
  totalQuestions: number
}

export function QuizProgress({ currentQuestion, totalQuestions }: QuizProgressProps) {
  const percentage = (currentQuestion / totalQuestions) * 100

  return (
    <div className="w-full space-y-2">
      <div className="flex items-center justify-between text-sm font-medium text-[#6a6258]">
        <span>Question {currentQuestion} of {totalQuestions}</span>
        <span>{Math.round(percentage)}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-[#efe4cf]">
        <div
          className="h-full bg-[#d4af37] transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}
