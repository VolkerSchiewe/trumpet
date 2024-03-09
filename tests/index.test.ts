import { expect, test } from '@playwright/test';

test('index page renders correctly', async ({ page }) => {
	await page.goto('/');

	await expect(page.getByRole('heading', { name: '39. Brüderisches Bläsertreffen' })).toBeVisible();
	await expect(
		page.getByRole('img', { name: 'Moravian Brass Festival Berlin 2023' })
	).toBeVisible();

	await expect(page.getByRole('link', { name: /Details/ })).toHaveAttribute('href', '/information');
	await expect(page.getByRole('link', { name: 'Festschrift' })).toHaveAttribute(
		'href',
		'https://docs.google.com/viewer?url=https%3A%2F%2Fblaesertag2023.de%2Ffestschrift.pdf&embedded=true'
	);
});
