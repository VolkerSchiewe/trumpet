import { describe, expect, it } from 'vitest';
import { jsonToCsv } from './csv';
describe('JSON to CSV', () => {
	const data = [
		{ name: 'peter', email: 'peter@example.com' },
		{ name: 'joe', email: 'joe@example.com' }
	];

	it('converts correctly', () => {
		const result = jsonToCsv(data);
		expect(result).toMatchInlineSnapshot(`
          "name,email
          \\"peter\\",\\"peter@example.com\\"
          \\"joe\\",\\"joe@example.com\\""
        `);
	});
	it('converts correctly with custom header', () => {
		const result = jsonToCsv(data, ['email', 'name']);
		expect(result).toMatchInlineSnapshot(`
			"email,name
			\\"peter@example.com\\",\\"peter\\"
			\\"joe@example.com\\",\\"joe\\""
		`);
	});
	it('converts correctly with translator', () => {
		const translation: Record<string, string> = { name: 'Name', email: 'E-Mail' };
		const result = jsonToCsv(data, undefined, (value) => translation[value]);
		expect(result).toMatchInlineSnapshot(`
			"Name,E-Mail
			\\"peter\\",\\"peter@example.com\\"
			\\"joe\\",\\"joe@example.com\\""
		`);
	});
});
