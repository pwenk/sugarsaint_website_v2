import { test, expect } from '@playwright/test'

test.describe('Quiz Flow - YELLOW Outcome', () => {
  test('should show YELLOW result with low score but willing to eliminate PUFAs', async ({ page }) => {
    // Navigate to quiz
    await page.goto('/quiz')
    await page.getByRole('link', { name: /Start Quiz/i }).click()

    // Answer questions to get low score but pass PUFA check

    // Question 1: Select only 1 symptom (1 point)
    await page.getByLabel(/Low energy or chronic fatigue/i).check()
    await page.getByRole('button', { name: /Next/i }).click()

    // Question 2: "Haven't tried" (0 points)
    await page.getByLabel(/haven't really tried any specific diets/i).check()
    await page.getByRole('button', { name: /Next/i }).click()

    // Question 3: "Trust studies" (0 points)
    await page.getByLabel(/trust nutrition studies/i).check()
    await page.getByRole('button', { name: /Next/i }).click()

    // Question 4: "Scientific backing" (0 points)
    await page.getByLabel(/only if.*strong scientific backing/i).check()
    await page.getByRole('button', { name: /Next/i }).click()

    // Question 5: IMPORTANT - "Willing" (2 points, passes dealbreaker)
    await page.getByLabel(/Yes.*willing to eliminate PUFAs completely/i).check()
    await page.getByRole('button', { name: /Next/i }).click()

    // Question 6: Select only 1 goal (1 point)
    await page.getByLabel(/Higher energy levels/i).check()
    await page.getByRole('button', { name: /Next/i }).click()

    // Question 7: "Researching" (0 points)
    await page.getByLabel(/Researching options/i).check()
    await page.getByRole('button', { name: /Get My Results/i }).click()

    // Total score: 1 + 0 + 0 + 0 + 2 + 1 + 0 = 4 points (YELLOW range: 3-6)

    // Email capture
    const testEmail = `test-yellow-${Date.now()}@example.com`
    await page.getByLabel(/Email address/i).fill(testEmail)
    await page.getByRole('button', { name: /Show My Results/i }).click()

    // Should redirect to YELLOW results page
    await page.waitForURL('**/quiz/results?outcome=yellow')

    // Verify YELLOW result page content
    await expect(page.getByRole('heading', { name: /Could Work For You, But/i })).toBeVisible()
    await expect(page.getByText(/willing to eliminate PUFAs/i)).toBeVisible()

    // Verify SOFT CTA (outline button, not primary)
    await expect(page.getByRole('link', { name: /I Still Want to Enroll/i })).toBeVisible()
  })
})
