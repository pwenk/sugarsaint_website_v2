# SUGAR SAINT - COMPLETE DESIGN SYSTEM & TEMPLATE

## TABLE OF CONTENTS
1. [Brand Identity](#brand-identity)
2. [Color System](#color-system)
3. [Typography System](#typography-system)
4. [Spacing & Layout](#spacing--layout)
5. [Component Library](#component-library)
6. [Page Templates](#page-templates)
7. [Animation Guidelines](#animation-guidelines)
8. [Responsive Design](#responsive-design)
9. [Implementation Notes](#implementation-notes)

---

## BRAND IDENTITY

### Core Aesthetic
**"Sacred minimalism meets metabolic science"**

**Mood:** Modern monastery with divine gold accents
**Feel:** Ethereal yet grounded, divine yet scientific, warm yet clean

**Reference Vibes:**
- Apple's minimalism + Goop's wellness aesthetic
- Religious iconography (subtle, not cheesy)
- High-end supplement packaging
- Scandinavian design + Mediterranean warmth

### Design Principles
1. **Restraint** - Less is more, white space is sacred
2. **Clarity** - Easy to scan and understand
3. **Warmth** - Inviting, not clinical
4. **Authority** - Professional, credible, scientific
5. **Delight** - Subtle surprises, smooth interactions

---

## COLOR SYSTEM

### Primary Palette

#### Sacred Gold
- **Hex:** `#D4AF37`
- **RGB:** 212, 175, 55
- **Usage:** CTAs, accents, highlights, icons, hover states
- **Percentage:** 10-15% of design
- **Psychology:** Divine wisdom, honey, metabolic "glow"

#### Pure Cream
- **Hex:** `#FFFBF5`
- **RGB:** 255, 251, 245
- **Usage:** Primary backgrounds, cards, sections
- **Percentage:** 60-70% of design
- **Psychology:** Purity, milk, clarity, warmth

#### Deep Charcoal
- **Hex:** `#2C2C2C`
- **RGB:** 44, 44, 44
- **Usage:** Primary text, headlines, dark sections
- **Percentage:** 20-25% of design
- **Psychology:** Authority, depth, science

### Secondary Palette

#### Honey Amber
- **Hex:** `#FFB84D`
- **RGB:** 255, 184, 77
- **Usage:** Secondary CTAs, warm highlights, hover states
- **Application:** Use sparingly for warmth

#### Soft Sage
- **Hex:** `#E8F0E8`
- **RGB:** 232, 240, 232
- **Usage:** Alternative backgrounds, calm sections
- **Application:** For visual variety, secondary content

#### Warm White
- **Hex:** `#FFFFFF`
- **RGB:** 255, 255, 255
- **Usage:** Clean sections, text on dark backgrounds, cards

#### Medium Gray
- **Hex:** `#8B8B8B`
- **RGB:** 139, 139, 139
- **Usage:** Secondary text, captions, subtle elements

### Color Usage Rules

**Backgrounds:**
- Primary: Cream (#FFFBF5)
- Secondary: White (#FFFFFF)
- Accent: Soft Sage (#E8F0E8)
- Dark: Deep Charcoal (#2C2C2C)

**Text:**
- Primary: Deep Charcoal (#2C2C2C) on light backgrounds
- Secondary: Medium Gray (#8B8B8B) on light backgrounds
- On Dark: Warm White (#FFFFFF) on dark backgrounds
- Accent: Sacred Gold (#D4AF37) for emphasis

**Interactive Elements:**
- Primary CTA: Gold background, dark text
- Secondary CTA: Gold border, gold text
- Hover: Darken by 10%, lift by 2px
- Links: Dark text, gold underline on hover

**Contrast Requirements:**
- Text on cream: Minimum 4.5:1 ratio (use deep charcoal)
- Text on white: Minimum 4.5:1 ratio
- CTA text on gold: Minimum 4.5:1 ratio (use deep charcoal)

---

## TYPOGRAPHY SYSTEM

### Font Families

#### Primary Font: **Inter**
- **Source:** Google Fonts (free) / Available in Framer
- **Usage:** Headlines, body text, UI elements
- **Why:** Modern, clean, highly readable, versatile
- **Weights Used:** 400 (Regular), 500 (Medium), 600 (Semi-Bold), 700 (Bold)

#### Alternative Option: **Satoshi**
- **Usage:** If available in Framer, can replace Inter
- **Similar aesthetic, slightly more unique**

#### Accent Font (Optional): **Crimson Pro** or **Lora**
- **Usage:** Pull quotes, testimonials only
- **Serif for contrast and elegance**

### Type Scale

#### Desktop Sizes

**Display (Hero Headlines)**
- Size: 72px
- Weight: 700 (Bold)
- Line Height: 1.1 (79px)
- Letter Spacing: -1px
- Usage: Main hero headline only

**H1 (Primary Headlines)**
- Size: 48px
- Weight: 600 (Semi-Bold)
- Line Height: 1.2 (58px)
- Letter Spacing: -0.5px
- Usage: Page titles, major section headers

**H2 (Section Headlines)**
- Size: 36px
- Weight: 600 (Semi-Bold)
- Line Height: 1.3 (47px)
- Letter Spacing: -0.25px
- Usage: Section headers, content blocks

**H3 (Sub-Section Headlines)**
- Size: 24px
- Weight: 600 (Semi-Bold)
- Line Height: 1.4 (34px)
- Letter Spacing: 0
- Usage: Sub-sections, card titles

**H4 (Small Headlines)**
- Size: 20px
- Weight: 600 (Semi-Bold)
- Line Height: 1.4 (28px)
- Letter Spacing: 0
- Usage: Small headlines, list headers

**Body Large**
- Size: 18px
- Weight: 400 (Regular)
- Line Height: 1.7 (31px)
- Letter Spacing: 0
- Usage: Intro paragraphs, important body text

**Body Regular**
- Size: 16px
- Weight: 400 (Regular)
- Line Height: 1.6 (26px)
- Letter Spacing: 0
- Usage: Standard body text, paragraphs

**Body Small**
- Size: 14px
- Weight: 400 (Regular)
- Line Height: 1.6 (22px)
- Letter Spacing: 0
- Usage: Captions, fine print, metadata

**Eyebrow Text**
- Size: 12px
- Weight: 600 (Semi-Bold)
- Line Height: 1.5 (18px)
- Letter Spacing: 1px
- Transform: UPPERCASE
- Color: Sacred Gold
- Usage: Category labels, section intro text

#### Mobile Sizes

**Display:** 48px (33% reduction)
**H1:** 36px (25% reduction)
**H2:** 28px (22% reduction)
**H3:** 22px (8% reduction)
**H4:** 18px (10% reduction)
**Body Large:** 17px (minor reduction)
**Body Regular:** 16px (no change)
**Body Small:** 14px (no change)

### Typography Rules

**Headlines:**
- Maximum width: 800px (for readability)
- Use weight 600+ for hierarchy
- Tighter letter spacing for large sizes
- Short, punchy, scannable

**Body Text:**
- Maximum width: 700px (ideal reading length)
- Generous line height (1.6-1.8)
- Break into short paragraphs (2-4 lines)
- Use list formatting when appropriate

**Links:**
- Inherit body text size
- Color: Deep Charcoal
- Underline: None by default
- Hover: Gold underline (2px) with 0.3s transition

**Emphasis:**
- Bold: Weight 600 or 700
- Italic: Use sparingly
- Color emphasis: Sacred Gold for key phrases

---

## SPACING & LAYOUT

### Spacing System (8px Base)

**Base Unit:** 8px

**Scale:**
- XXS: 4px (0.5 units)
- XS: 8px (1 unit)
- S: 16px (2 units)
- M: 24px (3 units)
- L: 32px (4 units)
- XL: 48px (6 units)
- XXL: 64px (8 units)
- XXXL: 96px (12 units)
- XXXXL: 128px (16 units)

### Usage Guidelines

**Micro Spacing (Within Components):**
- Button padding: 16px vertical, 32px horizontal
- Card padding: 32px all sides
- List item spacing: 16px between items
- Icon spacing: 8px from text

**Component Spacing:**
- Between related elements: 24px
- Between unrelated elements: 48px
- Between major sections: 96px desktop, 64px mobile

**Section Padding:**
- Desktop: 96px top/bottom, 120px for hero
- Tablet: 64px top/bottom
- Mobile: 48px top/bottom

**Container Margins:**
- Desktop: 80px side margins
- Tablet: 40px side margins
- Mobile: 24px side margins

### Grid System

**Desktop Layout:**
- 12-column grid
- Max content width: 1400px
- Column gap: 32px
- Outer margins: 80px

**Content Width Limits:**
- Full width: 1400px (for sections)
- Content width: 1200px (for main content)
- Reading width: 700px (for articles, long text)
- Narrow width: 600px (for forms, focused content)

**Tablet Layout:**
- 8-column grid
- Max width: 1024px
- Column gap: 24px
- Outer margins: 40px

**Mobile Layout:**
- Single column
- Max width: 100%
- Outer margins: 24px
- Stack all elements vertically

### Vertical Rhythm

**Section Structure:**
```
[96px top padding]
  Eyebrow Text (12px, gold, uppercase)
  [16px gap]
  Headline (H2, 36px)
  [24px gap]
  Subtext/Description (Body Large, 18px)
  [48px gap]
  Content blocks
[96px bottom padding]
```

---

## COMPONENT LIBRARY

### Buttons

#### Primary Button
```
Background: Sacred Gold (#D4AF37)
Text: Deep Charcoal (#2C2C2C)
Font Size: 16px
Font Weight: 600
Padding: 16px 32px
Border Radius: 8px
Border: None
Shadow: 0 2px 8px rgba(212,175,55,0.2)

Hover State:
  Background: #C29F2F (darken 10%)
  Transform: translateY(-2px)
  Shadow: 0 4px 12px rgba(212,175,55,0.3)
  Transition: all 0.3s ease

Active State:
  Transform: translateY(0)
  Shadow: 0 1px 4px rgba(212,175,55,0.2)

Disabled State:
  Background: #E8E8E8
  Text: #A0A0A0
  Cursor: not-allowed
  Shadow: none
```

#### Secondary Button (Outline)
```
Background: Transparent
Text: Sacred Gold (#D4AF37)
Font Size: 16px
Font Weight: 600
Padding: 16px 32px
Border Radius: 8px
Border: 2px solid #D4AF37
Shadow: None

Hover State:
  Background: Sacred Gold (#D4AF37)
  Text: Deep Charcoal (#2C2C2C)
  Transform: translateY(-2px)
  Transition: all 0.3s ease
```

#### Ghost Button (Text Only)
```
Background: None
Text: Deep Charcoal (#2C2C2C)
Font Size: 16px
Font Weight: 600
Padding: 8px 16px
Border: None
Shadow: None

Hover State:
  Text: Sacred Gold (#D4AF37)
  Text Decoration: underline
  Text Underline Offset: 4px
```

#### Button Sizes

**Large:**
- Padding: 20px 48px
- Font Size: 18px
- Use for primary CTAs

**Regular:**
- Padding: 16px 32px
- Font Size: 16px
- Use for standard actions

**Small:**
- Padding: 12px 24px
- Font Size: 14px
- Use for secondary actions

### Cards

#### Standard Card
```
Background: White (#FFFFFF)
Padding: 32px
Border Radius: 16px
Border: 1px solid rgba(212,175,55,0.15)
Shadow: 0 4px 20px rgba(0,0,0,0.06)

Hover State:
  Transform: translateY(-4px)
  Shadow: 0 8px 28px rgba(0,0,0,0.10)
  Border: 1px solid rgba(212,175,55,0.3)
  Transition: all 0.3s ease

Content Structure:
  Icon or Image (optional)
  [16px gap]
  Headline (H3, 24px)
  [12px gap]
  Description (Body Regular, 16px)
  [24px gap]
  CTA Link or Button (optional)
```

#### Testimonial Card
```
Background: Pure Cream (#FFFBF5)
Padding: 32px
Border Radius: 12px
Border Left: 4px solid Sacred Gold (#D4AF37)
Shadow: None

Content Structure:
  Quote Text (Body Large, 18px, italic)
  [24px gap]
  Name (16px, Semi-Bold)
  Result/Title (14px, Medium Gray)

No photo (keep faceless)
```

#### Stat Card
```
Background: White (#FFFFFF)
Padding: 48px 32px
Border Radius: 16px
Border: 1px solid rgba(212,175,55,0.2)
Text Align: Center

Content Structure:
  Number (Display size, 72px, Bold, Sacred Gold)
  [8px gap]
  Label (Body Regular, 16px, Deep Charcoal)
```

### Forms

#### Input Field
```
Background: White (#FFFFFF)
Padding: 16px 20px
Border Radius: 8px
Border: 1px solid #E0E0E0
Font Size: 16px
Font Weight: 400

Focus State:
  Border: 2px solid Sacred Gold (#D4AF37)
  Outline: none
  Shadow: 0 0 0 3px rgba(212,175,55,0.1)

Error State:
  Border: 2px solid #DC2626

Placeholder:
  Color: Medium Gray (#8B8B8B)
```

#### Text Area
```
Same as Input Field
Min Height: 120px
Resize: vertical
```

#### Checkbox/Radio
```
Size: 20px × 20px
Border: 2px solid #E0E0E0
Border Radius: 4px (checkbox) / 50% (radio)

Checked State:
  Background: Sacred Gold (#D4AF37)
  Border: Sacred Gold
  Checkmark: White
```

#### Form Layout
```
Field Spacing: 24px between fields
Label Position: Above field
Label Style: 14px, Semi-Bold, 8px margin bottom
Help Text: 12px, Medium Gray, 4px margin top
Error Text: 12px, Red, 4px margin top
```

### Icons

**Style:** Line icons (outlined, not filled)
**Stroke Width:** 2px
**Size Options:** 16px, 20px, 24px, 32px
**Color:** Sacred Gold (#D4AF37)
**Border Radius:** 4px rounded corners

**Icon Sets:**
- Lucide Icons (recommended)
- Feather Icons
- Phosphor Icons

**Common Icons Needed:**
- Arrow right (CTAs)
- Check mark (benefits, lists)
- Quote marks (testimonials)
- Lightning bolt (energy)
- Flame (metabolism)
- Heart (health)

### Dividers

#### Standard Divider
```
Height: 1px
Background: #E8E8E8
Margin: 48px 0
```

#### Gold Accent Divider
```
Height: 2px
Width: 80px
Background: Sacred Gold (#D4AF37)
Margin: 32px auto (centered)
Use: Between major sections
```

### Badges

#### Pill Badge
```
Background: rgba(212,175,55,0.1)
Text: Sacred Gold (#D4AF37)
Font Size: 12px
Font Weight: 600
Padding: 6px 16px
Border Radius: 20px
Text Transform: UPPERCASE
Letter Spacing: 0.5px
```

### Tooltips

```
Background: Deep Charcoal (#2C2C2C)
Text: White (#FFFFFF)
Font Size: 14px
Padding: 8px 12px
Border Radius: 6px
Shadow: 0 4px 12px rgba(0,0,0,0.15)
Max Width: 240px

Arrow: 6px triangle in charcoal
```

### Navigation

#### Desktop Nav
```
Height: 80px
Background: White (#FFFFFF) with 90% opacity (slightly transparent)
Position: Fixed top (sticky)
Padding: 0 80px
Shadow: 0 2px 8px rgba(0,0,0,0.05) when scrolled

Logo:
  Text: "SUGAR SAINT"
  Font Size: 24px
  Font Weight: 700
  Color: Deep Charcoal

Menu Items:
  Font Size: 16px
  Font Weight: 500
  Color: Deep Charcoal
  Spacing: 40px between items

  Hover:
    Color: Sacred Gold
    Transition: 0.3s

CTA Button:
  Primary button style
  "Take Quiz" or "Start Here"
```

#### Mobile Nav
```
Hamburger Menu Icon (top right)
  3 lines, 24px width, 2px height
  Color: Deep Charcoal

Slide-in Menu:
  Full screen overlay
  Background: White
  Items centered, large text (24px)
  Smooth slide animation (0.3s)
```

### Footer

```
Background: Deep Charcoal (#2C2C2C)
Text: White (#FFFFFF)
Padding: 64px 80px 32px

Structure:
  [Logo/Brand Name]
  [Navigation Links in row]
  [Social Icons]
  [16px gap]
  [Divider]
  [16px gap]
  [Copyright + Disclaimer]

Link Hover:
  Color: Sacred Gold

Font Size: 14px for most text
Line Height: 1.6
```

---

## PAGE TEMPLATES

### Homepage Template

```
SECTION 1: HERO - "THE CONTRARIAN HOOK"
──────────────────────────────────────
Background: Cream (#FFFBF5) with subtle radial gradient (Sacred Gold at 10% opacity from top-right)
Height: 100vh (minimum 700px)
Padding: 120px 80px
Layout: Split screen desktop (60% text / 40% visual)
Max Width: 1400px centered

TEXT CONTAINER (Left 60%):
  Eyebrow Text: "WHAT IF EVERYTHING WAS BACKWARDS?"
    - Font: 12px, Sacred Gold (#D4AF37)
    - Weight: 600 (Semi-Bold)
    - Transform: UPPERCASE
    - Letter Spacing: 1px

  [16px gap]

  Display Headline:
    "Stop Blaming Sugar.
     Start Trusting Your Body."
    - Font: 72px, Deep Charcoal (#2C2C2C)
    - Weight: 700 (Bold)
    - Line Height: 1.1 (79px)
    - Letter Spacing: -1px
    - Max Width: 600px

  [24px gap]

  Subheadline:
    "The real enemy isn't carbs. It's the PUFAs they never warned you about.
     Discover the metabolic truth that 2,847 people have used to reclaim their energy."
    - Font: 20px, Medium Gray (#8B8B8B)
    - Weight: 400 (Regular)
    - Line Height: 1.6 (32px)
    - Max Width: 540px

  [40px gap]

  CTA Container:
    - Display: Flex row
    - Gap: 16px

    Primary CTA: "Take The 2-Minute Quiz"
      - Size: Large (20px vertical, 48px horizontal padding)
      - Font: 18px, Weight 600
      - Background: Sacred Gold (#D4AF37)
      - Text: Deep Charcoal (#2C2C2C)
      - Border Radius: 8px
      - Shadow: 0 2px 8px rgba(212,175,55,0.2)
      - Hover: translateY(-2px), shadow increases

    Secondary CTA: "Watch The Truth"
      - Style: Outline button
      - Border: 2px solid Sacred Gold
      - Text: Sacred Gold
      - Icon: Play icon (left side, 20px)
      - Padding: 16px 32px

  [24px gap]

  Trust Badge: "⚡ 94% report higher energy within 30 days"
    - Font: 14px, Medium Gray
    - Icon: Lightning bolt (Sacred Gold)

VISUAL CONTAINER (Right 40%):
  Before/After Comparison:
    - Left: Tired/foggy person (grayscale or desaturated)
    - Right: Energized person with subtle golden glow overlay
    - Border Radius: 16px
    - Shadow: 0 8px 32px rgba(0,0,0,0.08)
    - Position: Relative
    - Optional: Slider component for interactive before/after

Background Effects:
  - CSS Radial Gradient: Sacred Gold from top-right corner
    - Start: rgba(212,175,55,0.10)
    - End: transparent
    - Position: 80% 20%
    - Radius: 50%

Animations:
  - Headline words: Fade in sequentially (0.1s stagger)
  - Gold glow: Subtle pulse (opacity 8% → 12% → 8%, 4s infinite)
  - Visual: Fade up on load (0.6s delay)

MOBILE ADAPTATIONS (< 768px):
  - Layout: Stack vertically (text first, then image)
  - Padding: 80px 24px
  - Headline: 48px (reduce from 72px)
  - Subheadline: 17px (reduce from 20px)
  - CTAs: Stack vertically, full-width, gap 12px
  - Visual: Reduce height or show simplified version
  - Remove or simplify background gradient


SECTION 2: PROBLEM STATEMENT
──────────────────────────────────────
Background: White (#FFFFFF)
Padding: 96px 80px

Content (Max Width 900px, Centered):
  Eyebrow: "THE OLD GOSPEL WAS WRONG"
  [16px gap]
  H2: "What if sugar isn't the enemy?"
  [24px gap]
  Body Text: 2-3 paragraphs explaining the problem


SECTION 3: THREE CARDS
──────────────────────────────────────
Background: Cream (#FFFBF5)
Padding: 96px 80px

Content:
  3-column grid (desktop) / Stack (mobile)
  Gap: 32px

  Each Card:
    - Icon (line style, gold, 32px)
    - Headline (H3)
    - Description (Body Regular)
    - Optional: Link with arrow


SECTION 4: TESTIMONIALS
──────────────────────────────────────
Background: White (#FFFFFF)
Padding: 96px 80px

Content (Max Width 1200px):
  H2: "Transformations From The Faithful" (centered)
  [48px gap]

  Testimonial Carousel:
    - 2-3 testimonials visible (desktop)
    - Testimonial card style (cream bg, gold border)
    - Auto-scroll with pause on hover
    - Navigation dots at bottom


SECTION 5: BENEFITS/FEATURES
──────────────────────────────────────
Background: Soft Sage (#E8F0E8) [optional variety]
Padding: 96px 80px

Content:
  H2: "The Three Pillars" (centered)
  [48px gap]

  3-column grid:
    Each benefit:
      - Large icon or simple graphic
      - Headline
      - Description
      - List of key points


SECTION 6: STATS
──────────────────────────────────────
Background: Deep Charcoal (#2C2C2C)
Padding: 96px 80px

Content (Centered):
  3 stat cards in a row

  Each stat:
    - Large number (72px, gold)
    - Label below (white text)

  Example:
    2,847 | 94% | 10,000+
    Transformations | More Energy | Saints Worldwide


SECTION 7: FINAL CTA
──────────────────────────────────────
Background: Cream with gold radial glow behind content
Padding: 128px 80px

Content (Max Width 700px, Centered):
  H2: "Ready to join the congregation?"
  [24px gap]
  Body Text: Brief value prop
  [32px gap]
  Large Primary Button: "Take The Quiz"
  [16px gap]
  Small text: "No credit card required"
```

### Blog Post Template

```
ARTICLE HEADER
──────────────────────────────────────
Background: Cream (#FFFBF5)
Padding: 128px 80px 64px
Max Width: 800px (centered)

Content:
  Eyebrow: Category (gold, uppercase)
  [16px gap]
  H1: Article Title (48px)
  [24px gap]
  Meta: Date • Read Time (14px, gray)
  [40px gap]
  Featured Image:
    - Border radius 16px
    - Max width 100%
    - Aspect ratio 16:9


ARTICLE BODY
──────────────────────────────────────
Background: White (#FFFFFF)
Padding: 64px 80px
Max Width: 700px (centered)

Content:
  Body text (18px, line height 1.8)

  Elements:
    - H2 section breaks
    - Paragraph spacing: 32px
    - Pull quotes:
      * Cream background box
      * Gold left border
      * Larger text (20px)
      * Italic
    - Images:
      * Full width of content column
      * Border radius 12px
      * 48px margin top/bottom
    - Lists:
      * 24px spacing between items
      * Gold bullet color
    - Links:
      * Gold underline on hover


SIDEBAR (Desktop Sticky)
──────────────────────────────────────
Position: Right side
Width: 300px
Top: 32px offset

Content:
  Card with cream background:
    "Join The Congregation"
    - Email input
    - Submit button
    - Small benefits list with gold checkmarks


RELATED ARTICLES
──────────────────────────────────────
Background: Cream (#FFFBF5)
Padding: 96px 80px

Content:
  H2: "Continue Reading"
  [48px gap]

  3-column grid (desktop) / Stack (mobile):
    Each article card:
      - Thumbnail image
      - Category badge (gold)
      - Title (H3)
      - Excerpt (2 lines)
      - "Read more →" link
```

### Quiz Landing Page

```
HERO
──────────────────────────────────────
Background: Cream with gold radial glow
Padding: 96px 80px
Max Width: 800px (centered)

Content (Centered):
  Icon: Clipboard/Assessment (gold, 48px)
  [24px gap]
  H1: "Discover Your Metabolic Truth"
  [16px gap]
  Subtext: "The 2-minute assessment"
  [32px gap]

  Benefits (3 checkmarks):
    ✓ Identify metabolic mistakes
    ✓ Get your personalized archetype
    ✓ Receive custom roadmap

  [40px gap]
  Large Primary Button: "Start Quiz"
  [16px gap]
  Trust badge: "5,247 taken this week"


HOW IT WORKS
──────────────────────────────────────
Background: White
Padding: 96px 80px

Content:
  3 steps in a row (desktop):
    Connected with gold arrows

    Each step:
      - Numbered icon (gold circle)
      - Title
      - Brief description


QUIZ EMBED
──────────────────────────────────────
Background: Cream
Padding: 64px 80px
Max Width: 800px (centered)

Content:
  Embedded quiz from Typeform/etc
  OR
  Native Framer form styled to match
```

### Sales Page Template

```
HERO
──────────────────────────────────────
Background: Deep Charcoal (#2C2C2C)
Padding: 128px 80px
Text: White

Content (Max Width 900px, Centered):
  Pre-headline: "For people tired of restrictive diets..."
  [16px gap]
  H1: "The SugarSaint Method"
  [24px gap]
  Subheadline: Core promise
  [40px gap]
  Large Primary Button
  [16px gap]
  Trust elements:
    - Money-back guarantee badge
    - "Join 2,847 Saints"


PROBLEM SECTION
──────────────────────────────────────
Background: White
Padding: 96px 80px
Max Width: 800px (Centered)

Content:
  Story/empathy copy
  Bullet list of pain points


SOLUTION OVERVIEW
──────────────────────────────────────
Background: Cream
Padding: 96px 80px

Content:
  H2: "There's A Better Way"
  Description of approach
  3-column benefits


WHAT'S INCLUDED
──────────────────────────────────────
Background: White
Padding: 96px 80px
Max Width: 1000px

Content:
  Grid of cards (2-3 columns)
  Each module/component:
    - Icon
    - Name
    - What's included
    - Value


TESTIMONIALS
──────────────────────────────────────
Background: Cream
Padding: 96px 80px

Content:
  Multiple testimonial cards
  Detailed, specific transformations


PRICING
──────────────────────────────────────
Background: White
Padding: 96px 80px

Content (Max Width 600px, Centered):
  Single pricing card:
    - White background
    - Gold border (2px)
    - Lift shadow
    - Program name
    - Price (large, bold)
    - Value stack (checkmarks)
    - Primary CTA button
    - Guarantee text
    - Payment logos


FAQ
──────────────────────────────────────
Background: Cream
Padding: 96px 80px
Max Width: 800px (Centered)

Content:
  Accordion-style FAQ
  10-15 questions
  Gold plus/minus icons


FINAL CTA
──────────────────────────────────────
Background: Deep Charcoal with gold glow
Padding: 128px 80px

Content (Centered):
  H2: "Ready to Begin?"
  Brief reminder of offer
  Large Primary Button
  Small text: Guarantee + No risk
```

---

## ANIMATION GUIDELINES

### Scroll Animations

#### Fade Up
```
Initial State:
  Opacity: 0
  Transform: translateY(20px)

Final State:
  Opacity: 1
  Transform: translateY(0)

Timing: 0.6s ease-out
Delay: Stagger by 0.1s for multiple elements
```

#### Scale In
```
Initial State:
  Opacity: 0
  Transform: scale(0.9)

Final State:
  Opacity: 1
  Transform: scale(1)

Timing: 0.5s ease-out
Use for: Stats, cards, images
```

#### Slide In (from left/right)
```
Initial State:
  Opacity: 0
  Transform: translateX(-30px) [or +30px for right]

Final State:
  Opacity: 1
  Transform: translateX(0)

Timing: 0.7s ease-out
Use for: Images, feature blocks
```

### Hover Animations

#### Button Hover
```
Transform: translateY(-2px)
Shadow: Increase intensity
Timing: 0.3s ease
```

#### Card Hover
```
Transform: translateY(-4px)
Shadow: 0 8px 28px rgba(0,0,0,0.10)
Border: Brighten gold
Timing: 0.3s ease
```

#### Link Hover
```
Underline: Animate in from left
Color: Shift to gold
Timing: 0.2s ease
```

### Page Transitions

```
Between pages:
  Fade duration: 0.3s
  Feels premium and smooth
```

### Micro-interactions

#### Loading States
```
Shimmer effect with gold
Opacity pulsing: 0.5 → 1 → 0.5
Duration: 1.5s infinite
```

#### Success States
```
Checkmark animation:
  Draw in with stroke animation
  Duration: 0.5s
  Color: Sacred Gold
```

### Animation Performance Rules

1. **Use transform and opacity only** (GPU accelerated)
2. **Avoid animating:** width, height, top, left (causes repaints)
3. **Use will-change** for elements that will animate
4. **Disable heavy animations on mobile** if performance suffers
5. **Respect prefers-reduced-motion** for accessibility

---

## RESPONSIVE DESIGN

### Breakpoints

```
Mobile: 0-767px
Tablet: 768px-1023px
Desktop: 1024px+
Large Desktop: 1440px+
```

### Mobile Adaptations (< 768px)

**Layout:**
- Single column everything
- Stack all grid elements vertically
- Reduce padding to 24px sides, 48px top/bottom
- Full-width images

**Typography:**
- Reduce headline sizes by 25-33%
- Maintain body text at 16px minimum
- Reduce line height slightly (1.5-1.6)

**Navigation:**
- Hamburger menu
- Full-screen overlay
- Logo remains visible

**Buttons:**
- Full width or minimum 48px height for tap targets
- Increase padding slightly for larger touch area

**Cards:**
- Full width with 24px margin
- Stack vertically with 24px gap

**Forms:**
- Full width inputs
- Larger touch targets (minimum 44px height)

**Spacing:**
- Reduce section padding to 48px vertical
- Reduce element spacing to 24px between items

### Tablet Adaptations (768-1023px)

**Layout:**
- 2-column grids where possible
- Reduce to single column for complex content
- Side padding: 40px

**Typography:**
- Reduce sizes by ~15% from desktop
- Maintain readability

**Navigation:**
- May use hamburger or show full menu
- Depends on number of items

### Touch Targets

**Minimum sizes:**
- Buttons: 44px × 44px
- Links: 44px height minimum
- Form inputs: 44px height minimum
- Icons: 32px × 32px clickable area

### Image Optimization

**Desktop:**
- Max width: 1400px
- Format: WebP with JPEG fallback
- Lazy load below fold

**Mobile:**
- Serve smaller versions (max 800px width)
- Prioritize above-fold images
- Compress heavily (60-70% quality)

---

## IMPLEMENTATION NOTES

### Framer-Specific Tips

#### Color Variables
```
1. Create color variables in Assets panel
2. Name them: Gold, Cream, Charcoal, etc.
3. Apply throughout site
4. Changing variable updates everywhere
```

#### Typography Styles
```
1. Create text styles for each heading level
2. Name: Display, H1, H2, H3, Body, etc.
3. Apply styles instead of manual formatting
4. Update styles to update all instances
```

#### Components
```
Create reusable components for:
- Primary Button
- Secondary Button
- Standard Card
- Testimonial Card
- Input Field
- Section Header

Benefits:
- Update once, changes everywhere
- Consistent design
- Faster iteration
```

#### Responsive Design
```
1. Design desktop first in Framer
2. Use breakpoint controls in right panel
3. Adjust for tablet and mobile
4. Test on actual devices
5. Use Framer's preview on device feature
```

#### Animations
```
1. Select element
2. Right panel → Effects tab
3. Add "Scroll" or "While Hover" effect
4. Choose animation type
5. Set timing and delay
6. Preview and adjust
```

#### CMS Setup
```
Collections needed:
- Blog Posts (title, slug, content, image, date, category)
- Testimonials (quote, name, result)
- FAQs (question, answer)

Create collection → Add fields → Connect to page
```

### Performance Checklist

- [ ] Compress all images (use WebP)
- [ ] Lazy load images below fold
- [ ] Minimize animations on mobile
- [ ] Use system fonts (Inter) for speed
- [ ] Keep total page size under 3MB
- [ ] Enable caching in Framer
- [ ] Test page speed with Lighthouse
- [ ] Aim for 90+ performance score

### Accessibility Checklist

- [ ] Color contrast meets WCAG AA (4.5:1)
- [ ] All images have alt text
- [ ] Proper heading hierarchy (H1 → H2 → H3)
- [ ] Keyboard navigation works
- [ ] Focus states visible
- [ ] Form labels associated with inputs
- [ ] Respect prefers-reduced-motion
- [ ] Minimum 16px body text
- [ ] Touch targets minimum 44px

### SEO Checklist

- [ ] Unique page titles (50-60 characters)
- [ ] Meta descriptions (150-160 characters)
- [ ] H1 on every page (only one)
- [ ] Logical heading hierarchy
- [ ] Alt text on all images
- [ ] Clean, descriptive URLs
- [ ] Internal linking between pages
- [ ] Fast page load times
- [ ] Mobile-friendly
- [ ] Structured data where relevant

---

## DESIGN QA CHECKLIST

Before publishing any page:

**Visual:**
- [ ] Colors match brand palette exactly
- [ ] Typography is consistent with system
- [ ] Spacing follows 8px grid
- [ ] Alignment is perfect (use guides)
- [ ] Images are high quality and compressed
- [ ] No pixelation or blur
- [ ] Shadows are subtle and consistent
- [ ] Border radius consistent

**Functional:**
- [ ] All links work
- [ ] All buttons have correct actions
- [ ] Forms submit properly
- [ ] Animations work smoothly
- [ ] No janky transitions
- [ ] Hover states all work
- [ ] No broken images

**Responsive:**
- [ ] Test on iPhone (various sizes)
- [ ] Test on Android
- [ ] Test on iPad
- [ ] Test on desktop (1920px)
- [ ] Test on laptop (1280px)
- [ ] Everything stacks correctly on mobile
- [ ] No horizontal scroll on mobile
- [ ] Touch targets large enough

**Content:**
- [ ] No typos (run Grammarly)
- [ ] Headings follow hierarchy
- [ ] Copy is on-brand
- [ ] CTAs are clear
- [ ] No lorem ipsum
- [ ] Legal disclaimers included

**Performance:**
- [ ] Page loads under 3 seconds
- [ ] Images optimized
- [ ] Lighthouse score 90+
- [ ] No console errors

---

## REFERENCE QUICK GUIDE

### Color Codes (Copy-Paste Ready)

```
Sacred Gold: #D4AF37
Pure Cream: #FFFBF5
Deep Charcoal: #2C2C2C
Honey Amber: #FFB84D
Soft Sage: #E8F0E8
Warm White: #FFFFFF
Medium Gray: #8B8B8B
```

### Spacing Values

```
XXS: 4px
XS: 8px
S: 16px
M: 24px
L: 32px
XL: 48px
XXL: 64px
XXXL: 96px
XXXXL: 128px
```

### Font Sizes

```
Display: 72px (mobile: 48px)
H1: 48px (mobile: 36px)
H2: 36px (mobile: 28px)
H3: 24px (mobile: 22px)
Body Large: 18px
Body: 16px
Small: 14px
Eyebrow: 12px
```

### Border Radius

```
Buttons: 8px
Cards: 16px (large) / 12px (medium)
Inputs: 8px
Badges: 20px (pill)
Images: 12-16px
```

### Shadows

```
Subtle: 0 2px 8px rgba(0,0,0,0.05)
Card: 0 4px 20px rgba(0,0,0,0.06)
Hover: 0 8px 28px rgba(0,0,0,0.10)
Gold Button: 0 2px 8px rgba(212,175,55,0.2)
```

---

## FINAL NOTES

**Remember:**
1. **Consistency is key** - Use this system religiously
2. **Less is more** - When in doubt, remove elements
3. **White space is your friend** - Don't be afraid of emptiness
4. **Test everything** - On real devices, with real people
5. **Iterate based on data** - A/B test when possible

**This is your single source of truth for SugarSaint design.**

Reference this document for every design decision. When you're unsure, default to the system. The magic is in the restraint and consistency.

**Now go build something beautiful. 🔥**
