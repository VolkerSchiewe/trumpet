import { expect, test } from '@playwright/test';

test('Registration redirect', async ({ page }) => {
	await page.goto('/registration');
	expect(page.url()).toContain('/information');
});
