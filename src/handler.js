const { nanoid } = require('nanoid');


const addingBook = (req, h) => {
	const {
		name,
		year,
		author,
		summary,
		publisher,
		pageCount,
		readPage,
		reading
	} = req.payload;
	const id = nanoid(16);
	const insertedAt = new Date().toISOString();
	const updatedAt = insertedAt;
	if ()

}