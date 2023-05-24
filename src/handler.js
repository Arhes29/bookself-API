const { nanoid } = require('nanoid');
const { books } = require('./books');

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
	const finished = pageCount === readPage;
	
	if (name === undefined ) {
		const response = h.response({
			status: 'fail',
			message: 'Gagal menambahkan buku. Mohon isi nama buku'
		});
		return response
			.code(400);
	}
	if (readPage > pageCount) {
		const response = h.response({
			status: 'fail',
			message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount'
		});
		return response
			.code(400);
	}

	const newbook = {id, name, year, author, summary, publisher, pageCount, readPage, finished, reading, insertedAt, updatedAt};
	books.push(newbook);
	const response = h.response({
		status: 'success',
		message: 'Buku berhasil ditambahkan',
		data: {
			bookId: id
		},
	});
	return response
		.code(201);
}

const getAllBook = (req, h) => {
	let filtered = books;
	

	const response = h.response({
		status: 'success',
		data: {
			books: filtered.map((book) => ({
				id: book.id,
				name: book.name,
				publisher: book.publisher,
			}))
		}
	});
	return response
		.code(200);
	
}

const getBookById = (req, h) => {
	const { id } = req.params;
	const book = books.filter((b) => b.id === id )[0];
	if (book !== undefined) {
		const response = h.response({
			status: 'success',
			data: {
				book,
			},
		});
		return response
			.code(200);
	}
	const response = h.response({
		status: 'fail',
		message: 'Buku tidak ditemukan'
	});
	return response
		.code(404);
}

const editBookById = (req, h) => {
	const { id } = req.params;
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
	const insertedAt = new Date().toISOString();
	const updatedAt = insertedAt;
	const finished = readPage === pageCount;
	if (!name) {
		const response = h.response({
			status: 'fail',
			message: 'Gagal memperbarui buku. Mohon isi nama buku'
		});
		return response
			.code(400);
	}
	if (readPage > pageCount) {
		const response = h.response({
			status: 'fail',
			message: 'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount'
		});
		return response
			.code(400);
	}
	const index = books.findIndex((book) => book.id === id);
	if (index !== -1) {
		books[index] = {
			...books[index],
			name,
			year,
			author,
			summary,
			publisher,
			pageCount,
			readPage,
			finished,
			reading,
			updatedAt
		};
		const response = h.response({
			status: 'success',
			message: 'Buku berhasil diperbarui',
		});
		return response
			.code(200);
	}
	const response = h.response({
		status: 'fail',
		message: 'Gagal memperbarui buku. Id tidak ditemukan',
	});
	return response
		.code(404);
}

const deleteBookById = (req, h) => {
	const { id } = req.params;
	const index = books.findIndex((book) => book.id === id);
	if (index !== -1) {
		books.splice(index, 1);
		const response = h.response({
			status: 'success',
			message: 'Buku berhasil dihapus',
		});
		return response;
	}
	const response = h.response({
		status: 'fail',
		message: 'Buku gagal dihapus. Id tidak ditemukan',
	});
	return response
		.code(404);
	
}


module.exports = {
	addingBook,
	getAllBook,
	getBookById,
	editBookById,
	deleteBookById
};
