import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
	testDir: 'tests',
	webServer: process.env.CI
		? undefined
		: {
				command: 'yarn dev --host',
				port: 5173
			},
	use: {
		browserName: 'chromium',
		baseURL: 'http://localhost:5173/',
		screenshot: { mode: 'only-on-failure', fullPage: true }
	}
};

export default config;
