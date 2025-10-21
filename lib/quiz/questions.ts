import type { Question } from './types'

export const questions: Question[] = [
  // Question 1: Current Symptoms (Multiple Choice)
  {
    id: 1,
    text: "Which of these symptoms do you currently experience?",
    type: 'multiple',
    options: [
      { label: 'Low energy or chronic fatigue', value: 'low-energy', points: 0 },
      { label: 'Cold hands or feet (poor circulation)', value: 'cold-extremities', points: 0 },
      { label: 'Brain fog or difficulty concentrating', value: 'brain-fog', points: 0 },
      { label: 'Poor sleep quality', value: 'poor-sleep', points: 0 },
      { label: 'Low libido or hormonal issues', value: 'hormonal-issues', points: 0 },
      { label: 'Digestive issues', value: 'digestive-issues', points: 0 },
      { label: 'Mood swings or anxiety', value: 'mood-swings', points: 0 },
      { label: 'None of the above', value: 'none', points: 0 },
    ],
  },

  // Question 2: Past Diet Experience (Single Choice)
  {
    id: 2,
    text: "What's your experience with other dietary approaches?",
    type: 'single',
    options: [
      { label: 'I feel great on my current diet and have no complaints', value: 'feel-great', points: 0 },
      { label: "I haven't really tried any specific diets", value: 'no-diets', points: 0 },
      { label: "I've tried diets (like keto, low-carb, paleo) but felt worse or didn't get results", value: 'felt-worse', points: 2 },
      { label: "I've tried multiple diets with mixed results", value: 'mixed-results', points: 1 },
    ],
  },

  // Question 3: Mindset Toward Nutrition (Single Choice)
  {
    id: 3,
    text: 'Which statement best describes your approach to nutrition?',
    type: 'single',
    options: [
      { label: 'I need rigid meal plans and rules to follow', value: 'rigid-plans', points: -1 },
      { label: 'I trust nutrition studies and scientific consensus above all', value: 'trust-studies', points: 0 },
      { label: "I'm open to ideas that challenge mainstream nutrition advice", value: 'challenge-mainstream', points: 1 },
      { label: "I trust my body's signals more than external rules", value: 'trust-body', points: 2 },
    ],
  },

  // Question 4: Experimentation Willingness (Single Choice)
  {
    id: 4,
    text: 'How do you feel about experimenting with your diet?',
    type: 'single',
    options: [
      { label: 'I want proven, guaranteed results only', value: 'guaranteed-results', points: -1 },
      { label: "I'll experiment, but only if there's strong scientific backing", value: 'scientific-backing', points: 0 },
      { label: "I'm willing to test things and track how my body responds", value: 'willing-test', points: 1 },
      { label: 'I love self-experimentation and find it empowering', value: 'love-experimenting', points: 2 },
    ],
  },

  // Question 5: THE DEALBREAKER - PUFA Elimination (Single Choice)
  {
    id: 5,
    text: 'The foundation of this approach is completely eliminating PUFAs (polyunsaturated fats) from seed oils, nuts, and vegetable oils. Are you willing to do this?',
    subtext: 'This is non-negotiable – the entire course is built on this principle.',
    type: 'single',
    options: [
      { label: "No, I'm not willing to eliminate these foods", value: 'not-willing', points: -999 }, // Instant RED
      { label: "I'm not sure / I need to learn more first", value: 'not-sure', points: 0 },
      { label: "Yes, I'm willing to eliminate PUFAs completely", value: 'willing', points: 2 },
      { label: "I've already started eliminating PUFAs", value: 'already-started', points: 2 },
    ],
  },

  // Question 6: What You're Hoping to Achieve (Multiple Choice)
  {
    id: 6,
    text: 'What are you hoping to get from this course? (Select all that apply)',
    type: 'multiple',
    options: [
      { label: 'Higher energy levels and better metabolic function', value: 'higher-energy', points: 0 },
      { label: 'Freedom from food anxiety and diet confusion', value: 'freedom-anxiety', points: 0 },
      { label: "Understanding how to read my body's signals", value: 'read-signals', points: 0 },
      { label: 'A sustainable eating approach for real life', value: 'sustainable', points: 0 },
      { label: 'Healing hormonal or thyroid issues', value: 'hormonal-healing', points: 0 },
      { label: 'Quick weight loss', value: 'quick-weight-loss', points: -1 },
    ],
  },

  // Question 7: Current Readiness Level (Single Choice)
  {
    id: 7,
    text: 'Where are you right now?',
    type: 'single',
    options: [
      { label: 'Just browsing / not sure if I need this', value: 'browsing', points: 0 },
      { label: 'Researching options and comparing approaches', value: 'researching', points: 0 },
      { label: 'Ready to commit to a new approach', value: 'ready', points: 1 },
      { label: 'Desperate for a solution and willing to do what it takes', value: 'desperate', points: 2 },
    ],
  },
]
