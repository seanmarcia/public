import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';

/**
 * See https://playwright.dev/docs/test-configuration.
 */
const config: PlaywrightTestConfig = {
	testDir: './tests-e2e',
	reporter: 'html',
	/* Configure projects for major browsers */
	projects: [
		{
			name: 'Google Chrome',
			use: {
				channel: 'chrome',
			},
		},
		/* Test against mobile viewports. */
		{
			name: 'Mobile Chrome',
			use: {
				...devices['Pixel 5'],
			},
		},
		{
			name: 'Mobile Safari',
			use: {
				...devices['iPhone 12'],
			},
		},
	],

	use: {
		screenshot: 'on',
	},

	/* Run your local dev server before starting the tests */
	webServer: {
		command: 'npm run serve',
		port: 3001,
	},
};

export default config;
