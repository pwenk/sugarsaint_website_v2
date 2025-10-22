# Analogy Card System
## The Default Approach for SugarSaint Blog Articles

---

## Core Principle

**One Analogy Card per article** that presents the complete metaphor in a visual, compartmentalized way. The rest of the article flows naturally without constantly referencing the analogy.

The card does the conceptual work. The article does the practical work.

---

## Standard Analogy Card Structure

### Template

```markdown
## 🔍 ANALOGY CARD

**[Opening statement introducing the comparison]**

[Concept 1] is [familiar thing] → [brief explanation]
[Concept 2] is [familiar thing] → [brief explanation]
[Concept 3] is [familiar thing] → [brief explanation]
[Concept 4] is [familiar thing] → [brief explanation]

**The problem:** [What goes wrong using analogy language]

**The fix:** [How to solve it using analogy language]
```

### Example (Thyroid/Metabolism)

```markdown
## 🔍 ANALOGY CARD

**Think of your metabolism like a house with a heating system:**

Your thyroid is the thermostat → measures needs, sends signals
T3 is the electrical signal → tells the furnace to fire
Your cell membranes are the wiring → carries the signal
Your mitochondria are the furnace → produces heat when signal arrives

**The problem:** PUFAs corrode the wiring. The thermostat works. The signal is sent. But the furnace never gets the message. Your house stays cold.

**The fix:** Replace the corroded wiring. Clear signal path. Heat returns.
```

---

## When to Place the Card

### Default Position: Early
- After the hook/opening (2-4 paragraphs)
- Before the detailed explanation sections
- Sets conceptual framework for everything that follows

### Why Early Works
- Reader gets the mental model upfront
- Can reference it while reading details
- Doesn't interrupt the flow once you're deep in explanation
- Natural transition from "you have this problem" → "here's how to think about it" → "here's what to do"

### Alternative: Mid-Article
Only use this if:
- You need to explain the problem literally first
- The analogy makes more sense after reader understands the mechanism
- Article is very long (3,000+ words) and card serves as a conceptual break

---

## Card Design Specifications

### Visual Elements

**Icon:** 🔍 (magnifying glass - consistent across all articles)

**Heading:** "ANALOGY CARD" in eyebrow text style
- 12px / 0.75rem
- Uppercase
- Letter-spacing: 0.05em
- Color: Deep Charcoal (#2C2C2C)
- Font-weight: 600

**Border:** 2px solid Sacred Gold (#D4AF37)

**Background:** Pure Cream (#FFFBF5) or white (if article background is Pure Cream, use white for contrast)

**Padding:** 2rem (32px) all sides

**Border-radius:** 8px

**Margin:** 2rem (32px) top and bottom

### Typography Inside Card

**Intro statement:** Bold, 18px
**Mappings:** 16px body text, left border accent (3px Honey Amber)
**Problem/Fix:** Bold labels, 16px body text, top border separator

---

## React Component

```tsx
// components/analogy-card.tsx

interface AnalogyMapping {
  concept: string;
  explanation: string;
}

interface AnalogyCardProps {
  intro: string;
  mappings: AnalogyMapping[];
  problem: string;
  solution: string;
}

export function AnalogyCard({ intro, mappings, problem, solution }: AnalogyCardProps) {
  return (
    <div className="my-8 rounded-lg border-2 border-sacred-gold bg-white p-8">
      {/* Header */}
      <div className="mb-4 flex items-center gap-2">
        <span className="text-2xl">🔍</span>
        <h3 className="text-xs font-semibold uppercase tracking-wider text-deep-charcoal">
          Analogy Card
        </h3>
      </div>

      {/* Intro */}
      <p className="mb-4 text-lg font-semibold">{intro}</p>

      {/* Mappings */}
      <div className="space-y-3">
        {mappings.map((mapping, index) => (
          <div key={index} className="border-l-3 border-honey-amber pl-4">
            <span className="font-semibold">{mapping.concept}</span>
            <span className="text-deep-charcoal/70"> → {mapping.explanation}</span>
          </div>
        ))}
      </div>

      {/* Problem */}
      <div className="mt-6 border-t border-sacred-gold pt-4">
        <p className="text-base">
          <span className="font-semibold">The problem:</span> {problem}
        </p>
      </div>

      {/* Solution */}
      <div className="mt-4">
        <p className="text-base">
          <span className="font-semibold">The fix:</span> {solution}
        </p>
      </div>
    </div>
  );
}
```

### Usage in MDX

```mdx
import { AnalogyCard } from '@/components/analogy-card'

# Seed Oils and Thyroid: How PUFAs Influence Energy

You wake up exhausted. Coffee gets you functional...

<AnalogyCard
  intro="Think of your metabolism like a house with a heating system:"
  mappings={[
    {
      concept: "Your thyroid is the thermostat",
      explanation: "measures needs, sends signals"
    },
    {
      concept: "T3 is the electrical signal",
      explanation: "tells the furnace to fire"
    },
    {
      concept: "Your cell membranes are the wiring",
      explanation: "carries the signal"
    },
    {
      concept: "Your mitochondria are the furnace",
      explanation: "produces heat when signal arrives"
    }
  ]}
  problem="PUFAs corrode the wiring. The thermostat works. The signal is sent. But the furnace never gets the message. Your house stays cold."
  solution="Replace the corroded wiring. Clear signal path. Heat returns."
/>

## What Your Thyroid Does

Your thyroid gland makes two hormones...
```

---

## Analogy Quick Reference by Topic

### Metabolism & Energy
**Analogy:** House heating system
- Thyroid = thermostat
- T3 = electrical signal
- Membranes = wiring
- Mitochondria = furnace
- **Use for:** Articles about thyroid, energy, temperature

### PUFAs & Oxidation
**Analogy:** Engine with contaminated fuel
- Mitochondria = engine
- Saturated fats = clean fuel
- PUFAs = contaminated fuel
- Oxidation = rust/corrosion
- **Use for:** Articles about PUFAs, mitochondrial function

### Cell Membranes & Hormones
**Analogy:** Door with lock and key
- Cell membrane = door
- Hormone (T3, insulin) = key
- Receptor = lock
- PUFAs = rust in hinges
- **Use for:** Articles about hormone resistance, cellular signaling

### Blood Sugar Regulation
**Analogy:** Fuel gauge in a car
- Blood sugar = fuel gauge
- Glycogen = fuel tank
- Eating carbs = refueling
- Hypoglycemia = running on fumes
- **Use for:** Articles about blood sugar, energy crashes, carb intake

### Inflammation
**Analogy:** Fire alarm system
- Immune system = fire alarm
- Real threat = actual fire
- Chronic inflammation = false alarms
- PUFAs = faulty detector
- **Use for:** Articles about inflammation, immune function

### Food Quality
**Analogy:** Building materials
- Body = building under renovation
- Food = construction materials
- Saturated fats = quality hardwood
- Seed oils = cheap particle board
- **Use for:** Articles about food quality, long-term health

### Temperature Tracking
**Analogy:** Dashboard warning lights
- Body = car
- Temperature = check engine light
- Tracking = diagnostics
- Normal temp = all systems go
- **Use for:** Articles about tracking, biometrics

### Metabolism as Fire
**Analogy:** Campfire
- Metabolism = fire
- Saturated fats = dry wood (clean burn)
- PUFAs = wet wood (smoke without heat)
- Carbs = kindling (easy ignition)
- **Use for:** Articles about metabolic rate, weight loss, energy production

---

## Writing the Rest of the Article

### After the Card: Stay Literal

Once you've placed the analogy card, the rest of the article should be:
- **Direct explanations** of mechanisms
- **Practical instructions** for what to do
- **Concrete examples** of where to find/avoid things
- **Specific numbers** and tracking methods

### Don't Keep Referencing the Analogy

**DON'T:**
```
As we mentioned in the analogy, PUFAs are like rust in the wiring.
When the wiring gets corroded, the signal can't get through.
So you need to replace the wiring with clean material.
```

**DO:**
```
PUFAs oxidize and incorporate into cell membranes. This makes
membranes less fluid. T3 can't pass through easily. The hormone
is in your blood but can't reach the mitochondria.

Replace seed oils with saturated fats. Your membranes become
more fluid within two to four weeks.
```

Let the analogy card do its job. Then trust the reader to follow the literal explanation.

---

## Card Variations by Article Length

### Short Articles (800-1,200 words)
**Simplified card with 3 mappings:**

```markdown
## 🔍 ANALOGY CARD

**Finding hidden PUFAs is like tracking an invasive species:**

Seed oils = invasive plants → spread everywhere unseen
Ingredient lists = field guides → show you what to look for
Clean swaps = native species → belong in the ecosystem

**The problem:** Invasive species have taken over your food supply. They're in everything.

**The fix:** Learn to identify them. Remove them. Replant with native species.
```

### Medium Articles (1,500-2,500 words)
**Full card with 4-5 mappings** (as shown in examples above)

### Deep Articles (3,000+ words)
**Option A:** One comprehensive card at the start
**Option B:** Multiple focused cards for different sections

Example of Option B:
- Card 1: The metabolism system (early in article)
- Card 2: The food quality issue (mid-article)
- Card 3: The tracking/measurement approach (later in article)

Only use multiple cards if the article covers genuinely distinct concepts.

---

## Quality Checklist

Before publishing, verify:

- [ ] Card appears early in the article (after hook, before deep explanations)
- [ ] Intro statement clearly introduces the comparison
- [ ] Each mapping follows the format: [Concept] is [familiar thing] → [brief explanation]
- [ ] Problem describes what goes wrong using analogy language
- [ ] Solution describes the fix using analogy language
- [ ] Rest of article doesn't over-reference the analogy
- [ ] Card is visually distinct (border, background, icon)
- [ ] Analogy is appropriate for the topic (see quick reference)
- [ ] All mappings are consistent within the same framework

---

## Accessibility Notes

### For Screen Readers
- Use semantic heading (H2) for "Analogy Card"
- Icon should have aria-label="Analogy"
- Clear hierarchy within the card

### For Visual Design
- Sufficient color contrast (4.5:1 minimum)
- Card should be visually distinct but not overwhelming
- Mobile-responsive (stacks nicely on small screens)
- Don't rely on color alone to convey meaning

---

## Migration Path for Existing Content

If converting existing articles to this system:

1. **Identify the core concept** you're explaining
2. **Choose appropriate analogy** from quick reference
3. **Map all key elements** to the analogy
4. **Create the card** following the template
5. **Place it early** in the article
6. **Remove explicit analogy references** from body text
7. **Keep practical instructions** literal and direct

---

## Examples Repository

See these files for complete examples:
- `example-article-with-analogy-card.md` - Thyroid/metabolism (medium length)
- `example-article-hidden-pufas.md` - Subtle approach (for comparison)
- `example-article-thyroid.md` - Explicit approach (for comparison)

The analogy card approach is the new default. Other approaches remain as options for specific cases.

---

## Summary

**Default approach:** One Analogy Card per article
**Placement:** Early (after hook)
**Structure:** Intro → Mappings → Problem → Solution
**After card:** Direct, literal explanations
**Component:** Reusable React component with consistent styling
**Result:** Clean separation between conceptual framework and practical instruction

The card does the metaphor work. The article does the teaching work. Reader gets both without feeling talked down to.
