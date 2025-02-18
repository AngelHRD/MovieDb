export const createSlug = (title, id) => {
	if (!title || !id) return 'inconnu';
	return (
		`${title}`
			.normalize('NFKD')
			.toLowerCase()
			.replace(/\s+/g, '-')
			.replace(/[^\p{L}\p{N}-]+/gu, '')
			.replace(/-+/g, '-')
			.replace(/^-+|-+$/g, '') + `-${id}`
	);
};
