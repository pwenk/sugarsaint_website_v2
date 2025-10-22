# Brainstorming Summary: SugarSaint Blog Content Strategy

## Date
2025-10-22

## Feature Overview
Create 100+ SEO/AEO/GEO-optimized blog articles for SugarSaint to drive organic traffic and course conversions.

## Core Problem This Solves
- **User Need**: People searching for metabolic health information need answers that AI engines (ChatGPT, Perplexity, etc.) will cite and recommend
- **Business Need**: Convert organic search traffic into course sales ($297)
- **Content Gap**: Most wellness content is boring, academic, or dogmatic. SugarSaint needs to stand out.

## Target Users
1. **Primary**: People experiencing metabolic symptoms (fatigue, cold hands, weight gain) who suspect seed oils/diet might be the cause
2. **Secondary**: Biohackers and self-experimenters looking for practical protocols
3. **Tertiary**: EU/German audience wanting clear food labeling guidance

## Key Decisions Made

### 1. Writing Style & Tonality
**Decision**: Chuck Palahniuk style + Analogy Card approach + Ray Peat scientific grounding

**Why this works**:
- Palahniuk's short, punchy sentences create rhythm and readability
- Analogy Card compartmentalizes the metaphor in one visual element (not overused)
- Rest of article flows naturally without constantly referencing the analogy
- Ray Peat references provide scientific credibility without being academic
- This combination is **unique** in the wellness space (competitive advantage)

**Key principles**:
- One Analogy Card per article (visual callout box, placed early)
- Card presents the complete analogy: intro → mappings → problem → fix
- After card, article stays literal and practical
- Short sentences (max 15 words)
- Second person ("You do this. You notice that.")
- No hedging language ("might," "could," "possibly")
- Active voice throughout
- Ray Peat concepts referenced but not over-quoted

**Analogy Card Standard Structure:**
```markdown
## 🔍 ANALOGY CARD

**[Opening statement]**

[Concept] is [familiar thing] → [explanation]
[Concept] is [familiar thing] → [explanation]
[Concept] is [familiar thing] → [explanation]

**The problem:** [What goes wrong]
**The fix:** [How to solve it]
```

### 2. Content Depth Strategy
**Decision**: Three-tier system based on article purpose

**Short (800-1,200 words)**:
- Tactical, action-oriented content
- Example: "How to Identify Hidden PUFAs in Packaged Foods"
- Quick wins, scannable, checklist-style

**Medium (1,500-2,500 words)**:
- Educational + actionable
- Example: "Seed Oils and Thyroid: How PUFAs Influence Energy"
- Explains mechanism + practical application

**Deep (3,000+ words)**:
- Foundational pillar content
- Example: "PUFAs vs. Saturated Fat: What Your Mitochondria Actually Notice"
- Comprehensive, evidence-based, addresses objections

### 3. Universal Article Structure
Every article, regardless of length, includes:

1. **TL;DR** (40-60 words) - Direct answer to primary question
2. **Body content** with Q&A headings (H2/H3 as questions)
3. **FAQ section** (3-5 questions with short answers)
4. **Disclaimer** (Palahniuk-style: "This isn't medical advice. I'm not your doctor...")
5. **Single end CTA** (Course primary, quiz secondary - no inline interruptions)
6. **Schema markup** (minimum Article + FAQPage, add HowTo/Dataset where appropriate)
7. **Internal links** (2-3 contextual links per article)
8. **EU/German notes** where relevant
9. **Visuals** when available

### 4. File Organization
**Decision**: Each article gets its own folder

```
blog/
├── _tonality-guide/          # Style guides (not published)
│   ├── palahniuk-analogy-style.md
│   ├── example-article-thyroid.md
│   └── analogy-templates.md
├── seed-oils-and-thyroid/
│   ├── index.mdx
│   ├── metadata.json
│   ├── images/
│   └── social/               # Repurposing assets
│       ├── instagram-slides.md
│       ├── tiktok-script.md
│       ├── x-thread.md
│       └── email.md
```

### 5. CTA Strategy
**Decision**: Option A - Single end CTA (clean, non-interruptive)

**Structure**:
```
Want the full system?

The SugarSaint course gives you:
→ Complete PUFA elimination protocol
→ Food database with 500+ items rated
→ Daily tracking templates for temperature, pulse, and energy
→ Step-by-step experiments to find what works for your body

Stop guessing. Start measuring.

[Get the Course – $297]

Not ready?

Take the 2-minute quiz to find out if seed oils are suppressing your metabolism.

[Take the Quiz]
```

**Why**: Maintains reading flow, respects user experience, makes one strong offer at natural decision point.

## Content Clusters (from CSV)
The 100+ articles are organized into strategic clusters:

1. **PUFAs & Metabolism** (10 articles) - Core contrarian message
2. **Thyroid Health & Hormones** (10 articles)
3. **Temperature & Pulse Tracking** (10 articles)
4. **Testosterone & Men's Health** (8 articles)
5. **Women's Hormones** (8 articles)
6. **Restaurant Survival & Food Labeling** (practical EU/US guidance)
7. **Digestion & Gut**
8. **Sleep**
9. **Sugar & Obesity Myth** (supporting the contrarian positioning)
10. **Tools & Devices**
11. **Success Stories & Mindset**
12. **Experiments & Self-Tracking**
13. **Ingredient Database & Food Ratings**

## Success Criteria
1. **AEO/GEO Performance**: Articles get cited by AI engines (ChatGPT, Perplexity, Claude, etc.)
2. **Conversion Rate**: Organic traffic → quiz → course sales
3. **Writing Consistency**: All 100 articles maintain Palahniuk + analogy voice
4. **Production Speed**: Can write 2-3 articles per week sustainably
5. **Technical Excellence**: Proper schema markup, internal linking, mobile-optimized

## Constraints & Considerations
1. **Not medical advice**: Must include disclaimer on every article
2. **Evidence-based**: Reference Ray Peat concepts and credible sources
3. **EU compliance**: Neutral health claims, proper food labeling guidance
4. **Sensitive topics**: Handle hormones, weight, mental health without stigmatizing
5. **Voice consistency**: 100 articles is a LOT - need templates and style guides

## Assets Created During Brainstorm

### 1. Style Guide (`_tonality-guide/palahniuk-analogy-style.md`)
- Complete voice and style guidelines
- Palahniuk sentence structure rules
- Analogy Card approach (default method)
- Ray Peat integration methods
- Voice checklist for quality control

### 2. Analogy Card System (`_tonality-guide/analogy-card-system.md`) ⭐ PRIMARY REFERENCE
- Complete Analogy Card specifications
- Standard template and structure
- React component with Tailwind styling
- Placement guidelines (early in article)
- Quick reference of 8 analogy frameworks by topic
- Quality checklist
- Examples of card variations by article length

### 3. Example Articles
- **With Analogy Card** (`example-article-with-analogy-card.md`) - Thyroid/metabolism, 1,950 words ⭐ DEFAULT STYLE
- **Subtle Analogy** (`example-article-hidden-pufas.md`) - Finding PUFAs, 1,150 words
- **Explicit Analogy** (`example-article-thyroid.md`) - Thyroid/thermostat, 1,850 words (reference only)

### 4. Analogy Templates (`_tonality-guide/analogy-templates.md`)
- 8 ready-to-use analogy frameworks:
  1. Metabolism as Fire
  2. Cell Membranes as Doors
  3. Mitochondria as Power Plants
  4. Body as House (Temperature)
  5. Food as Building Materials
  6. Inflammation as Fire Alarm
  7. Blood Sugar as Fuel Gauge
  8. Hormones as Messengers
- Shows how to map concepts to analogies
- Quick-start generator system

### 5. Article Outline (`blog/seed-oils-and-thyroid/outline.md`)
- Complete structural outline for medium-depth article
- Section-by-section content beats
- Word count breakdowns
- Internal link opportunities
- Schema markup examples
- Social media repurposing templates

## Next Steps

### Immediate
1. **Review style guide and example article** - Does the Palahniuk + analogy + Peat approach hit the right tone?
2. **Create SHORT and DEEP outlines** - Complete the three-tier system
3. **Test write 1-2 articles** - Validate the process before scaling

### Phase 2 (Planning)
1. **Prioritize article order** - Which clusters to write first?
2. **Create production workflow** - Writing → editing → schema → publishing
3. **Build blog infrastructure** - Next.js pages, schema components, internal linking system
4. **Set up tracking** - Monitor AEO/GEO performance, citations, conversions

### Phase 3 (Implementation)
1. **Write first 10 articles** (1 from each major cluster)
2. **Publish and measure** - See what gets traction
3. **Iterate based on data** - Adjust style/structure based on performance
4. **Scale production** - Build to 2-3 articles/week cadence

## Open Questions
1. **Who's writing?** You solo? AI-assisted? Hiring writers? (Affects consistency strategy)
2. **Publishing cadence?** How fast do you want to get to 100 articles?
3. **Course content?** What's the actual course like? (Need to match blog voice to course voice)
4. **Ray Peat quotes?** Do you have access to his newsletters/books for direct quoting, or paraphrase only?

## Key Insights
1. **Extended analogy = teaching tool**: Makes hard concepts feel obvious
2. **Palahniuk style = readability**: Short sentences create rhythm and momentum
3. **Ray Peat = credibility**: Scientific grounding without being academic
4. **Unique voice = competitive advantage**: No one else writes wellness content like this
5. **Structure supports speed**: Templates + style guide = faster, more consistent writing

---

**Status**: Brainstorming complete. Style guide and templates created. Ready to move to planning phase or test-write articles.

**User preference**: Writing consistency/tonality > speed > technical implementation

**Next decision point**: Review style guide → Create remaining outlines → Move to `/phase2:plan` or start writing
