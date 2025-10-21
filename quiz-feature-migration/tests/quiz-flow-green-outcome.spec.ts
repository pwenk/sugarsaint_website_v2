import { test, expect } from '@playwright/test'

test.describe('Quiz Flow - GREEN Outcome', () => {
  test('should complete quiz with GREEN-qualifying answers and show appropriate result page', async ({ page }) => {
    // Navigate to quiz landing page
    await page.goto('/quiz')

    // Verify landing page loads
    await expect(page.getByRole('heading', { name: /Is Your Fit/i })).toBeVisible()

    // Click "Start Quiz" button
    await page.getByRole('link', { name: /Start Quiz/i }).click()

    // Wait for questions page to load
    await expect(page.getByText(/Question 1 of 7/i)).toBeVisible()

    // Question 1: Select multiple symptoms (3+ for 2 points)
    await page.getByLabel(/Low energy or chronic fatigue/i).check()
    await page.getByLabel(/Cold hands or feet/i).check()
    await page.getByLabel(/Brain fog/i).check()
    await page.getByRole('button', { name: /Next/i }).click()

    // Question 2: Past diet experience (select "felt worse" for 2 points)
    await expect(page.getByText(/Question 2 of 7/i)).toBeVisible()
    await page.getByLabel(/tried diets.*felt worse/i).check()
    await page.getByRole('button', { name: /Next/i }).click()

    // Question 3: Mindset (select "trust body" for 2 points)
    await expect(page.getByText(/Question 3 of 7/i)).toBeVisible()
    await page.getByLabel(/trust my body/i).check()
    await page.getByRole('button', { name: /Next/i }).click()

    // Question 4: Experimentation (select "love experimenting" for 2 points)
    await expect(page.getByText(/Question 4 of 7/i)).toBeVisible()
    await page.getByLabel(/love self-experimentation/i).check()
    await page.getByRole('button', { name: /Next/i }).click()

    // Question 5: PUFA elimination (select "willing" for 2 points - REQUIRED)
    await expect(page.getByText(/Question 5 of 7/i)).toBeVisible()
    await page.getByLabel(/Yes.*willing to eliminate PUFAs completely/i).check()
    await page.getByRole('button', { name: /Next/i }).click()

    // Question 6: Goals (select 3+ aligned goals for 2 points)
    await expect(page.getByText(/Question 6 of 7/i)).toBeVisible()
    await page.getByLabel(/Higher energy levels/i).check()
    await page.getByLabel(/Freedom from food anxiety/i).check()
    await page.getByLabel(/Understanding how to read/i).check()
    await page.getByRole('button', { name: /Next/i }).click()

    // Question 7: Readiness (select "desperate" for 2 points)
    await expect(page.getByText(/Question 7 of 7/i)).toBeVisible()
    await page.getByLabel(/Desperate for a solution/i).check()
    await page.getByRole('button', { name: /Get My Results/i }).click()

    // Should land on email capture page
    await expect(page.getByRole('heading', { name: /Get Your Personalized Results/i })).toBeVisible()

    // Enter email
    const testEmail = `test-green-${Date.now()}@example.com`
    await page.getByLabel(/Email address/i).fill(testEmail)

    // Submit email form
    await page.getByRole('button', { name: /Show My Results/i }).click()

    // Wait for redirect to results page
    await page.waitForURL('**/quiz/results?outcome=green')

    // Verify GREEN result page content
    await expect(page.getByRole('heading', { name: /SugarSaint Was Designed For You/i })).toBeVisible()
    await expect(page.getByText(/ideal candidate/i)).toBeVisible()
    await expect(page.getByRole('link', { name: /Enroll in SugarSaint Now/i })).toBeVisible()
  })
})
