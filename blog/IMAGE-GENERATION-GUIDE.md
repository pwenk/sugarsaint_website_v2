# Blog Image Generation Guide

## Overview
You need 100 cover images for blog articles. This guide provides **3 easy methods** to generate them quickly and consistently.

---

## Current Setup

### Image Support Added
- ✅ Optional `image` field in article frontmatter
- ✅ Optional `excerpt` field for card descriptions
- ✅ Fallback gradient system (no image needed!)
- ✅ 16:9 aspect ratio for all images
- ✅ Hover effects and transitions built-in

### Frontmatter Format
```yaml
---
title: "Article Title"
slug: article-slug
keyword: primary keyword
cluster: Content Cluster Name
date: 2025-10-22
image: /images/blog/article-slug.jpg  # Optional
excerpt: Short description for the card  # Optional
---
```

---

## Method 1: No Images (Use Built-in Gradients) ⚡ FASTEST

**Time:** 0 minutes
**Cost:** Free
**Difficulty:** None

### How It Works
- Articles without `image` field automatically get gradient backgrounds
- Three gradient variations rotate through articles
- Shows cluster name on gradient
- Clean, professional, consistent

### Pros
- ✅ Zero work required
- ✅ Always consistent
- ✅ Fast page load (no images to download)
- ✅ Looks clean and modern

### Cons
- ❌ Less visual interest than photos
- ❌ All articles look similar

### Recommendation
**Use this method initially.** You can always add images later to specific high-traffic articles.

---

## Method 2: AI-Generated Images with ChatGPT/DALL-E 🎨 RECOMMENDED

**Time:** ~2-3 hours for 100 images
**Cost:** ChatGPT Plus ($20/month) gives you DALL-E access
**Difficulty:** Easy

### Step-by-Step Process

#### 1. Create a Consistent Style Prompt Template

```
Create a minimal, abstract cover image for a blog article about [TOPIC].

Style requirements:
- Warm gold (#D4AF37) and cream (#FFFBF5) color palette
- Abstract, geometric, or organic shapes
- Minimalist design (not photographic)
- Professional and clean
- 16:9 aspect ratio (1600x900px)
- Subtle texture or grain
- No text on image

Topic: [ARTICLE TOPIC]
```

#### 2. Batch Process by Cluster

**For "PUFAs & Metabolism" cluster:**
```
Generate 10 variations of:
Abstract minimal image representing seed oils and metabolism. Warm gold and cream colors. Geometric shapes suggesting cellular membranes or energy flow. 16:9 ratio. No text.
```

#### 3. Download & Name Consistently
- Save as: `article-slug.jpg`
- Put in: `/public/images/blog/`
- Update frontmatter with: `image: /images/blog/article-slug.jpg`

#### 4. Example Prompts Per Cluster

**Understanding PUFAs:**
```
Abstract representation of oxidized fats vs stable fats. Warm gold and cream palette. Geometric organic shapes. Minimalist. 16:9.
```

**Hormone Health:**
```
Abstract visualization of hormone balance. Gold and cream colors. Flowing organic shapes suggesting thyroid or hormonal systems. Minimal. 16:9.
```

**Self-Tracking:**
```
Abstract representation of body temperature and pulse tracking. Warm colors. Geometric data visualization style. Minimalist. 16:9.
```

**Practical Guide:**
```
Abstract food and nutrition imagery. Gold and cream tones. Simple geometric shapes suggesting meals or ingredients. Clean. 16:9.
```

### Pros
- ✅ Unique images for each article
- ✅ Consistent brand aesthetic
- ✅ Professional quality
- ✅ Full control over style
- ✅ Can regenerate if unsatisfied

### Cons
- ❌ Requires ChatGPT Plus subscription
- ❌ Takes a few hours for 100 images
- ❌ Manual download and naming process

---

## Method 3: Canva Template (Duplicate 100 Times) 🎨

**Time:** ~3-4 hours for 100 images
**Cost:** Free (Canva basic) or $13/month (Canva Pro)
**Difficulty:** Easy

### Step-by-Step Process

#### 1. Create Master Template

**Dimensions:** 1600 x 900 px (16:9 ratio)

**Design Elements:**
- Background: Gradient (gold #D4AF37 to cream #FFFBF5)
- Add geometric shape or pattern
- Optional: Add subtle texture
- Leave space for text overlay

#### 2. Create Text Overlay System

Add text elements for:
- Cluster name (small, uppercase, gold)
- Article keyword (large, center)
- Or leave minimal/abstract

#### 3. Duplicate & Customize

- Duplicate template 100 times
- Change text/colors slightly per cluster
- Keep consistent overall style

#### 4. Batch Export

- Export all as JPG
- Name: `01-article-slug.jpg`, `02-article-slug.jpg`, etc.
- Upload to `/public/images/blog/`

### Pros
- ✅ Full creative control
- ✅ Consistent brand style
- ✅ Can reuse template for future articles
- ✅ Easy to update all images if brand changes

### Cons
- ❌ More manual work than AI
- ❌ Repetitive task
- ❌ Requires some design sense

---

## Method 4: Programmatic Generation (Advanced) 💻

**Time:** 2-3 hours to set up, then instant
**Cost:** Free
**Difficulty:** Medium (requires coding)

### Tools
- Node.js + Canvas library
- Or Python + Pillow
- Or ImageMagick scripts

### Concept
Write a script that:
1. Reads article frontmatter
2. Generates gradient with cluster name
3. Adds geometric shapes based on keyword
4. Saves as `article-slug.jpg`

### Example with Node.js (canvas)

```javascript
const { createCanvas } = require('canvas');
const fs = require('fs');

function generateArticleImage(title, cluster, slug) {
  const canvas = createCanvas(1600, 900);
  const ctx = canvas.getContext('2d');

  // Gradient background
  const gradient = ctx.createLinearGradient(0, 0, 1600, 900);
  gradient.addColorStop(0, '#D4AF37');
  gradient.addColorStop(1, '#FFFBF5');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 1600, 900);

  // Add cluster text
  ctx.fillStyle = '#D4AF37';
  ctx.font = 'bold 48px Inter';
  ctx.textAlign = 'center';
  ctx.fillText(cluster.toUpperCase(), 800, 450);

  // Save
  const buffer = canvas.toJPEG({ quality: 0.9 });
  fs.writeFileSync(`./public/images/blog/${slug}.jpg`, buffer);
}
```

### Pros
- ✅ Instant generation for all 100 articles
- ✅ Perfect consistency
- ✅ Easy to update all images at once
- ✅ No manual work after setup

### Cons
- ❌ Requires coding knowledge
- ❌ Setup time investment
- ❌ Less creative/unique than AI or design

---

## Recommended Workflow

### Phase 1: Launch (Now)
**Use built-in gradients** (Method 1)
- Zero work required
- Professional appearance
- Fast page loads
- Focus on writing articles instead

### Phase 2: Optimization (After 20-30 articles published)
**Add AI images to top 10 articles** (Method 2)
- Identify top 10 most-visited articles from analytics
- Generate custom images for those
- Keep rest on gradients

### Phase 3: Full Implementation (After 50+ articles)
**Decide if you want all custom images**
- If yes: Batch generate with AI (Method 2)
- Or create Canva template system (Method 3)
- Or stay with gradients (looks great!)

---

## Image Specifications

### Technical Requirements
- **Format:** JPG (smaller file size) or WebP (better quality)
- **Dimensions:** 1600 x 900 px (16:9 aspect ratio)
- **File Size:** Under 200KB per image (optimize with TinyJPG)
- **Location:** `/public/images/blog/`
- **Naming:** `article-slug.jpg` (matches slug in frontmatter)

### Brand Guidelines
- **Primary Color:** Gold (#D4AF37)
- **Background:** Cream (#FFFBF5)
- **Style:** Minimal, abstract, professional
- **Avoid:** Text on images, stock photos of people, busy patterns

---

## Quick Start Commands

### Create images directory
```bash
mkdir -p public/images/blog
```

### Add image to article frontmatter
```yaml
---
title: "Article Title"
slug: article-slug
image: /images/blog/article-slug.jpg
excerpt: "Optional short description for card (160 characters max)"
---
```

### Optimize images after creation
```bash
# Install TinyPNG CLI (optional)
npm install -g tinypng-cli

# Optimize all images
tinypng public/images/blog/*.jpg
```

---

## FAQs

**Q: Do I need images for all articles?**
A: No! The gradient fallback looks professional. Only add images if you want extra visual polish.

**Q: What if I don't want to generate 100 images?**
A: Use gradients! They're built-in and look clean. Add images only to your top 10-20 articles.

**Q: Can I use stock photos?**
A: Yes, but keep them consistent. Use Unsplash or Pexels with a filter (e.g., "abstract gold minimal").

**Q: What aspect ratio should images be?**
A: 16:9 (1600x900px). The code automatically enforces this for all cards.

**Q: How do I update all images later?**
A: If using Method 4 (programmatic), regenerate. Otherwise, create new images and replace in `/public/images/blog/`.

---

## Example Frontmatter

### With Image
```yaml
---
title: "PUFAs vs Saturated Fat: What Your Mitochondria Actually Notice"
slug: pufas-vs-saturated-fat
keyword: pufas saturated fat
cluster: PUFAs & Metabolism
date: 2025-10-22
image: /images/blog/pufas-vs-saturated-fat.jpg
excerpt: "Saturated fats are stable and clean-burning. PUFAs oxidize easily and damage cells. Your mitochondria notice the difference."
---
```

### Without Image (Uses Gradient)
```yaml
---
title: "PUFAs vs Saturated Fat: What Your Mitochondria Actually Notice"
slug: pufas-vs-saturated-fat
keyword: pufas saturated fat
cluster: PUFAs & Metabolism
date: 2025-10-22
---
```

---

## Summary

| Method | Time | Cost | Best For |
|--------|------|------|----------|
| **Gradients** (Built-in) | 0 min | Free | Quick launch, minimal effort |
| **AI Images** (DALL-E) | 2-3 hrs | $20/mo | High-quality, unique images |
| **Canva Template** | 3-4 hrs | Free-$13/mo | Full creative control |
| **Programmatic** | 2-3 hrs setup | Free | Perfect consistency, scalability |

**Recommendation:** Start with gradients, add AI images to top articles later.

---

**Last Updated:** 2025-10-23
**Status:** Image support ready, gradients active
**Next Step:** Choose your preferred method and start generating!
