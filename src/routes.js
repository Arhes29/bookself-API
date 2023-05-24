const {
	addingBook,
	getAllBook,
	getBookById,
	editBookById,
	deleteBookById
} = require('./handler');


const routes = [
{
	method: 'GET',
	path: '/',
	handler: (req, h) => {
		const res = h.response({
			message: "Welcome To Homepage"
		});
		return res
			.code(200);
	},
},
{
	method: '*',
	path: '/',
	handler: (req, h) => {
		const res = h.response({
			message: "Tidak ada apa-apa disini:v"
		});
		return res
			.code(404);
	},
},
{
	method: 'POST',
	path: '/books',
	handler: addingBook,
},
{
	method: 'GET',
	path: '/books',
	handler: getAllBook,
},
{
	method: 'GET',
	path: '/books/{id}',
	handler: getBookById,
},
{
	method: 'PUT',
	path: '/books/{id}',
	handler: editBookById,
},
{
	method: 'DELETE',
	path: '/books/{id}',
	handler: deleteBookById
}];

module.exports = routes;