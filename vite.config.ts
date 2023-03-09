import { sveltekit } from '@sveltejs/kit/vite';
import { configDefaults, type UserConfig } from 'vitest/config';

const config: UserConfig = {
	plugins: [sveltekit() as any],
	test: {
		exclude: [...configDefaults.exclude, 'tests/**']
	}
};

export default config;
