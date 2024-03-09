import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
	testDir: 'tests',
	webServer: !process.env.CI
		? {
				command: 'yarn dev --host',
				port: 5173
			}
		: undefined,
	use: {
		browserName: 'chromium',
		baseURL: !process.env.CI ? 'http://localhost:5173/' : undefined,
		screenshot: { mode: 'only-on-failure', fullPage: true }
	}
};

export default config;
