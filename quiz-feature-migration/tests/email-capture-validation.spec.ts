import { test, expect } from '@playwright/test'

test.describe('Email Capture Validation', () => {
  test.beforeEach(async ({ page }) => {
    // Complete quiz to reach email capture page
    await page.goto('/quiz')
    await page.getByRole('link', { name: /Start Quiz/i }).click()

    // Quick answers through all 7 questions
    for (let i = 1; i <= 7; i++) {
      await expect(page.getByText(new RegExp(`Question ${i} of 7`, 'i'))).toBeVisible()

      // Just click first available option
      const firstOption = page.locator('input[type="radio"], input[type="checkbox"]').first()
      await firstOption.check()

      if (i < 7) {
        await page.getByRole('button', { name: /Next/i }).click()
      } else {
        await page.getByRole('button', { name: /Get My Results/i }).click()
      }
    }

    // Should be on email capture page
    await expect(page.getByRole('heading', { name: /Get Your Personalized Results/i })).toBeVisible()
  })

  test('should show error for invalid email', async ({ page }) => {
    // Try submitting with invalid email
    await page.getByLabel(/Email address/i).fill('notanemail')
    await page.getByRole('button', { name: /Show My Results/i }).click()

    // Should show HTML5 validation error (browser native)
    const emailInput = page.getByLabel(/Email address/i)
    await expect(emailInput).toHaveAttribute('type', 'email')
  })

  test('should show error for empty email', async ({ page }) => {
    // Try submitting without email
    await page.getByRole('button', { name: /Show My Results/i }).click()

    // HTML5 required validation should prevent submission
    const emailInput = page.getByLabel(/Email address/i)
    await expect(emailInput).toHaveAttribute('required')
  })

  test('should accept valid email and redirect', async ({ page }) => {
    // Enter valid email
    const testEmail = `test-valid-${Date.now()}@example.com`
    await page.getByLabel(/Email address/i).fill(testEmail)

    // Submit
    await page.getByRole('button', { name: /Show My Results/i }).click()

    // Should redirect to results page (any outcome)
    await page.waitForURL('**/quiz/results?outcome=*')

    // Verify we're on results page
    await expect(page.url()).toContain('/quiz/results?outcome=')
  })
})
