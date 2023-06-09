const Hapi = require('@hapi/hapi');
//const nanoid = require('nanoid');
const routes = require('./routes');
const server = Hapi.server({
	port: 9000,
	host: '0.0.0.0',
	routes: {
		cors: {
			origin: ['*'],
		},
	},
});

const init = async () => {
	server.route(routes);
	await server.start();
	console.log(`Server Running At ${server.info.uri}`);
}
init();