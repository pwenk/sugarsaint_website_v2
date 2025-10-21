import { test, expect } from '@playwright/test'

test.describe('Quiz Back Navigation', () => {
  test('should allow navigating back and changing answers', async ({ page }) => {
    // Start quiz
    await page.goto('/quiz')
    await page.getByRole('link', { name: /Start Quiz/i }).click()

    // Question 1: Select one option
    await expect(page.getByText(/Question 1 of 7/i)).toBeVisible()
    await page.getByLabel(/Low energy or chronic fatigue/i).check()
    await page.getByRole('button', { name: /Next/i }).click()

    // Question 2: Select an option
    await expect(page.getByText(/Question 2 of 7/i)).toBeVisible()
    await page.getByLabel(/feel great on my current diet/i).check()
    await page.getByRole('button', { name: /Next/i }).click()

    // Now on Question 3 - go back
    await expect(page.getByText(/Question 3 of 7/i)).toBeVisible()
    await page.getByRole('button', { name: /Back/i }).click()

    // Should be back on Question 2
    await expect(page.getByText(/Question 2 of 7/i)).toBeVisible()

    // Verify previous answer is still selected
    await expect(page.getByLabel(/feel great on my current diet/i)).toBeChecked()

    // Change answer
    await page.getByLabel(/tried diets.*felt worse/i).check()

    // Go back to Question 1
    await page.getByRole('button', { name: /Back/i }).click()
    await expect(page.getByText(/Question 1 of 7/i)).toBeVisible()

    // Verify Back button is disabled on Question 1
    await expect(page.getByRole('button', { name: /Back/i })).toBeDisabled()

    // Go forward again
    await page.getByRole('button', { name: /Next/i }).click()

    // Verify changed answer persisted
    await expect(page.getByLabel(/tried diets.*felt worse/i)).toBeChecked()
    await expect(page.getByLabel(/feel great on my current diet/i)).not.toBeChecked()
  })
})
