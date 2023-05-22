const {
	addingBook
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
	handler: 
}]

module.exports = routes;