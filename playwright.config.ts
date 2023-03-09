import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
	testDir: 'tests',
	webServer: {
		command: 'yarn dev --host',
		port: 5173,
		reuseExistingServer: !process.env.CI
	},
	use: {
		browserName: 'chromium',
		baseURL: 'http://localhost:5173/',
		screenshot: { mode: 'only-on-failure', fullPage: true }
	}
};

export default config;
