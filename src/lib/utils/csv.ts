export function jsonToCsv(
	data: Array<Record<string, unknown>>,
	header: Array<string> | undefined = undefined,
	headerTranslation: (header: string) => string = (value: string) => value
): string {
	const replacer = (key: string, value: string) => (value === null ? '' : value);
	const headerArray = header ?? Object.keys(data[0]);
	const csv = [
		headerArray.map(headerTranslation).join(','),
		...data.map((row) =>
			headerArray.map((fieldName) => JSON.stringify(row[fieldName], replacer)).join(',')
		)
	].join('\r\n');
	return csv;
}
