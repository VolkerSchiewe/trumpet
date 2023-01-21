import { expect, test } from '@playwright/test';

test('Registration', async ({ page }) => {
	await page.goto('/registration');

	await expect(page.getByRole('heading', { name: 'Anmeldung' })).toBeVisible();

	await page.getByRole('textbox', { name: 'Name' }).fill('Test Tester');
	await page.getByRole('textbox', { name: 'E-Mail' }).fill('blaesertag2023@example.com');
	await page.getByRole('textbox', { name: 'Adresse' }).fill('Teststraße 1');
	await page.getByRole('textbox', { name: 'PLZ & Ort' }).fill('12345 Berlin');
	await page.getByRole('combobox', { name: 'Ich bin' }).selectOption({ label: 'Bläser:in' });
	await page.getByRole('textbox', { name: 'Zu welchem Chor gehörst du?' }).fill('Berlin');
	await page.getByLabel('II', { exact: true }).check();
	await page.getByRole('combobox', { name: 'Abreise am' }).selectOption({ label: 'Montag' });
	await page.getByRole('button', { name: 'Anmelden' }).click();

	await expect(page.getByRole('heading', { name: 'Anmeldung erfolgreich' })).toBeVisible();
});

test.afterAll(async ({ request }) => {
	console.info('Deleting test data');
	const response = await request.delete('/delete-test-data/');
	expect(response.ok()).toBeTruthy();
});
