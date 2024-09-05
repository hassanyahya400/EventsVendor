export function extractIdFromPath(path: string): number | null {
	const match = path.match(/^\/events\/(\d+)$/);
	if (match) {
		const idString = match[1];
		const id = Number(idString);
		// Ensure the converted ID is a valid number
		return isNaN(id) ? null : id;
	}
	return null;
}
