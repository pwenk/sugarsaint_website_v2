import { test, expect } from '@playwright/test'

test.describe('Quiz Flow - RED Outcome (PUFA Dealbreaker)', () => {
  test('should show RED result when user refuses to eliminate PUFAs', async ({ page }) => {
    // Navigate to quiz
    await page.goto('/quiz')
    await page.getByRole('link', { name: /Start Quiz/i }).click()

    // Answer questions 1-4 (doesn't matter for RED via dealbreaker)
    // Question 1
    await page.getByLabel(/Low energy or chronic fatigue/i).check()
    await page.getByRole('button', { name: /Next/i }).click()

    // Question 2
    await page.getByLabel(/tried diets.*felt worse/i).check()
    await page.getByRole('button', { name: /Next/i }).click()

    // Question 3
    await page.getByLabel(/trust my body/i).check()
    await page.getByRole('button', { name: /Next/i }).click()

    // Question 4
    await page.getByLabel(/willing to test/i).check()
    await page.getByRole('button', { name: /Next/i }).click()

    // Question 5: THE DEALBREAKER - Select "not willing"
    await expect(page.getByText(/Question 5 of 7/i)).toBeVisible()
    await page.getByLabel(/No.*not willing to eliminate these foods/i).check()
    await page.getByRole('button', { name: /Next/i }).click()

    // Complete remaining questions
    // Question 6
    await page.getByLabel(/Higher energy levels/i).check()
    await page.getByRole('button', { name: /Next/i }).click()

    // Question 7
    await page.getByLabel(/Ready to commit/i).check()
    await page.getByRole('button', { name: /Get My Results/i }).click()

    // Email capture
    const testEmail = `test-red-${Date.now()}@example.com`
    await page.getByLabel(/Email address/i).fill(testEmail)
    await page.getByRole('button', { name: /Show My Results/i }).click()

    // Should redirect to RED results page
    await page.waitForURL('**/quiz/results?outcome=red')

    // Verify RED result page content
    await expect(page.getByRole('heading', { name: /Isn't The Right Fit/i })).toBeVisible()
    await expect(page.getByText(/not willing to eliminate PUFAs/i)).toBeVisible()

    // Verify NO enrollment CTA (should only have "Retake the Quiz")
    await expect(page.getByRole('link', { name: /Retake the Quiz/i })).toBeVisible()
    await expect(page.getByRole('link', { name: /Enroll.*Now/i })).not.toBeVisible()
  })
})
