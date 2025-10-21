import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import type { Question } from "@/lib/quiz/types"

interface QuizQuestionProps {
  question: Question
  selectedAnswer: string | string[]
  onAnswerChange: (answer: string | string[]) => void
}

export function QuizQuestion({ question, selectedAnswer, onAnswerChange }: QuizQuestionProps) {
  const handleSingleChange = (value: string) => {
    onAnswerChange(value)
  }

  const handleMultipleChange = (value: string, checked: boolean) => {
    const currentAnswers = Array.isArray(selectedAnswer) ? selectedAnswer : []

    if (checked) {
      onAnswerChange([...currentAnswers, value])
    } else {
      onAnswerChange(currentAnswers.filter((v) => v !== value))
    }
  }

  return (
    <div className="space-y-6">
      {/* Question Text */}
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-[#2c2c2c] sm:text-3xl">
          {question.text}
        </h2>
        {question.subtext && (
          <p className="text-sm italic text-[#9a8f7f]">
            {question.subtext}
          </p>
        )}
      </div>

      {/* Options */}
      <div className="space-y-3">
        {question.type === 'single' ? (
          <RadioGroup
            value={Array.isArray(selectedAnswer) ? selectedAnswer[0] : selectedAnswer}
            onValueChange={handleSingleChange}
            className="space-y-3"
          >
            {question.options.map((option) => (
              <div
                key={option.value}
                className="flex items-start space-x-3 rounded-xl border border-[#efe4cf] bg-white p-4 transition-all hover:border-[#d4af37] hover:shadow-md"
              >
                <RadioGroupItem value={option.value} id={option.value} className="mt-0.5" />
                <Label
                  htmlFor={option.value}
                  className="flex-1 cursor-pointer text-base font-normal text-[#2c2c2c]"
                >
                  {option.label}
                </Label>
              </div>
            ))}
          </RadioGroup>
        ) : (
          <div className="space-y-3">
            {question.options.map((option) => {
              const currentAnswers = Array.isArray(selectedAnswer) ? selectedAnswer : []
              const isChecked = currentAnswers.includes(option.value)

              return (
                <div
                  key={option.value}
                  className="flex items-start space-x-3 rounded-xl border border-[#efe4cf] bg-white p-4 transition-all hover:border-[#d4af37] hover:shadow-md"
                >
                  <Checkbox
                    id={option.value}
                    checked={isChecked}
                    onCheckedChange={(checked) => handleMultipleChange(option.value, checked === true)}
                    className="mt-0.5"
                  />
                  <Label
                    htmlFor={option.value}
                    className="flex-1 cursor-pointer text-base font-normal text-[#2c2c2c]"
                  >
                    {option.label}
                  </Label>
                </div>
              )
            })}
          </div>
        )}
      </div>

      {question.type === 'multiple' && (
        <p className="text-sm text-[#6a6258]">
          Select all that apply
        </p>
      )}
    </div>
  )
}
