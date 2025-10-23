# Blog Implementation Plan - 100 Articles

## Overview
Complete implementation plan for all ~108 articles organized by content clusters. This document provides the roadmap for systematic article creation.

---

## Content Structure

### Main Pillars (4 categories for navigation)

#### 1. **Understanding PUFAs** (18 articles)
- **PUFAs & Metabolism** (10 articles) ✅ 1 written
- **Sugar & Obesity Myth** (8 articles) ✅ 1 written

#### 2. **Hormone Health** (26 articles)
- **Thyroid Health & Hormones** (10 articles) ✅ 1 written
- **Women's Hormones** (8 articles) ✅ 1 written
- **Testosterone & Men's Health** (8 articles) ✅ 1 written

#### 3. **Self-Tracking & Experimentation** (23 articles)
- **Temperature & Pulse Tracking** (10 articles) ✅ 1 written
- **Experiments & Self-Tracking** (8 articles) ✅ 1 written
- **Tools & Devices** (5 articles)

#### 4. **Practical Implementation** (41 articles)
- **Restaurant Survival & Food Labeling** (8 articles) ✅ 1 written
- **Digestion & Gut** (6 articles) ✅ 1 written
- **Sleep** (6 articles) ✅ 1 written
- **Lifestyle & Social Freedoms** (6 articles)
- **Ingredient Database & Food Ratings** (6 articles)
- **Success Stories & Mindset** (5 articles)
- **Post-Purchase & Implementation** (4 articles)

---

## Current Status

### ✅ Completed (10 articles)
1. PUFAs vs Saturated Fat (PUFAs & Metabolism)
2. Seed Oils and Thyroid (Thyroid Health)
3. Temperature Tracking (Temperature & Pulse)
4. PUFAs & Women's Hormones (Women's Hormones)
5. Seed Oils & Testosterone (Men's Health)
6. Hidden PUFAs in Food (Restaurant Survival)
7. PUFAs & Digestion (Digestion & Gut)
8. Temperature & Sleep (Sleep)
9. PUFAs vs Sugar & Obesity (Sugar & Obesity)
10. 7-Day PUFA Purge (Experiments)

### 🔄 Remaining (98 articles)

---

## Writing System

### Template Location
`/blog/_tonality-guide/first-principles-system.md`

### Article Requirements
- **Length:** 850-1,150 words
- **Style:** Chuck Palahniuk (short sentences, second person, no hedging)
- **Structure:**
  - Title (as question)
  - TL;DR (40-60 words)
  - Hook (2-4 paragraphs)
  - One-sentence analogy (italicized)
  - Explanation sections
  - Practical "What You Do" section
  - FAQ (3-4 questions)
  - Disclaimer
  - CTA (course $297 → quiz)

### Internal Linking Strategy
- 2-3 contextual links per article
- Link to related topics within same pillar
- Cross-link between pillars where relevant

---

## Implementation Phases

### Phase 1: Complete Main Pillars (Priorities 1-3)
**Target:** 54 articles total

#### Batch 1: Understanding PUFAs (8 remaining)
- **PUFAs & Metabolism cluster** (9 more articles)
- **Sugar & Obesity cluster** (7 more articles)
- **Priority:** HIGH - Foundation knowledge

#### Batch 2: Hormone Health (15 remaining)
- **Thyroid Health** (9 more articles)
- **Women's Hormones** (7 more articles)
- **Men's Health** (7 more articles)
- **Priority:** HIGH - Core transformations

#### Batch 3: Self-Tracking (13 remaining)
- **Temperature & Pulse** (9 more articles)
- **Experiments** (7 more articles)
- **Priority:** HIGH - Practical application

### Phase 2: Practical Implementation (Priority 4)
**Target:** 35 articles

#### Batch 4: Food Navigation (14 remaining)
- **Restaurant Survival** (7 more articles)
- **Food Labeling** (included in Restaurant)
- **Ingredient Database** (6 articles)
- **Priority:** MEDIUM - Daily use

#### Batch 5: Body Systems (11 remaining)
- **Digestion & Gut** (5 more articles)
- **Sleep** (5 more articles)
- **Priority:** MEDIUM - Health improvements

#### Batch 6: Lifestyle (10 remaining)
- **Lifestyle & Social Freedoms** (6 articles)
- **Post-Purchase** (4 articles)
- **Priority:** MEDIUM - Long-term sustainability

### Phase 3: Supporting Content (Priority 5)
**Target:** 10 articles

#### Batch 7: Tools & Stories
- **Tools & Devices** (5 articles)
- **Success Stories & Mindset** (5 articles)
- **Priority:** LOW - Supplementary

---

## Production Schedule

### Recommended Pace
- **1 article/day:** 98 days (~14 weeks)
- **2 articles/day:** 49 days (~7 weeks)
- **5 articles/week:** 20 weeks (~5 months)

### Batch Writing Approach
1. Write 5 articles in one cluster at once (1 week)
2. Maintain voice consistency within cluster
3. Add internal links as batch
4. Review and edit batch
5. Publish batch

### Quality Checkpoints
Every 10 articles, review for:
- Voice consistency (Palahniuk style)
- Internal linking completeness
- FAQ quality
- CTA effectiveness
- Schema markup

---

## Technical Implementation

### File Structure
```
blog/
├── articles/
│   ├── 01-pufas-vs-saturated-fat.md (✅)
│   ├── 02-seed-oils-and-thyroid.md (✅)
│   ├── ...
│   ├── 10-seven-day-pufa-purge.md (✅)
│   ├── 11-[next-article].md
│   └── ...108-[final-article].md
├── _tonality-guide/
│   ├── first-principles-system.md (writing template)
│   └── ...
└── IMPLEMENTATION-PLAN.md (this file)
```

### Naming Convention
- Number prefix for order (01-108)
- Slug from title
- Consistent with URL structure

### Frontmatter Required
```yaml
---
title: "Article Title"
slug: article-slug
keyword: primary keyword
cluster: Content Cluster Name
date: YYYY-MM-DD
---
```

---

## SEO Strategy

### Schema Markup
Every article includes:
- **Article schema** (headline, date, author, publisher, keywords)
- **FAQPage schema** (from FAQ section)

### Internal Linking Matrix
- Link from older articles to newer related articles
- Update link strategy every 20 articles
- Aim for 2-3 outbound links per article
- Build topic authority through cluster linking

### Meta Optimization
- Title from article H1
- Description from TL;DR
- Keywords from frontmatter
- OG tags for social sharing

---

## Content Quality Assurance

### Voice Checklist (per article)
- [ ] Sentences under 15 words (mostly)
- [ ] Second person (you, your)
- [ ] One italicized analogy
- [ ] Active voice throughout
- [ ] No hedging words
- [ ] Direct and practical tone

### Content Checklist (per article)
- [ ] TL;DR: 40-60 words
- [ ] Hook: Shows problem clearly
- [ ] Analogy: One sentence, italicized
- [ ] Explanation: Clear mechanisms
- [ ] Solution: Actionable steps
- [ ] FAQ: 3-4 questions
- [ ] Disclaimer present
- [ ] CTA present (course + quiz)

### Technical Checklist (per article)
- [ ] Frontmatter complete
- [ ] 2-3 internal links added
- [ ] Schema markup in template
- [ ] Mobile responsive
- [ ] Build successful
- [ ] Links tested

---

## Next Steps

### Immediate (This Week)
1. ✅ Fix navigation structure (4 main pillars)
2. ✅ Create implementation plan
3. Test responsive navigation
4. Commit and push changes

### Short Term (Next 2 Weeks)
1. Write Batch 1: Complete "Understanding PUFAs" pillar (8 articles)
2. Add comprehensive internal linking
3. Test all links and navigation
4. Deploy updates

### Medium Term (Next 2 Months)
1. Complete Phase 1: Main Pillars (54 articles total)
2. Review and optimize existing 10 articles
3. Update internal linking strategy
4. Submit sitemap to Google

### Long Term (Next 6 Months)
1. Complete all 108 articles
2. Build topic authority through comprehensive coverage
3. Monitor AEO/GEO performance
4. Iterate based on traffic and conversions

---

## Notes

### Writing Velocity
- First 10 articles: ~6 hours total (~36 min/article average)
- With template mastery: ~20-30 min/article expected
- Batch writing increases efficiency by 30-40%

### CSV Reference
All article ideas, keywords, and strategies documented in:
`/blog/AEO GEO Strategy Map Ideas.csv`

### AI-Assisted Writing
- Use first-principles template as prompt
- Maintain consistent voice instructions
- Edit for voice after generation
- Always review FAQ quality

---

**Last Updated:** 2025-10-23
**Status:** Phase 1 - Batch 1 (10/108 articles complete)
**Next Milestone:** Complete "Understanding PUFAs" pillar (18 articles)
