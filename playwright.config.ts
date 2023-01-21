import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
	webServer: {
		command: 'yarn dev --host',
		port: 5173,
		reuseExistingServer: !process.env.CI
	},
	use: {
		baseURL: 'http://localhost:5173/',
		screenshot: 'only-on-failure'
	}
};

export default config;
