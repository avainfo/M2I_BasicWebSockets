const WebSocket = require('ws');

const server = new WebSocket.Server({port: 8080});

server.on('connection', socket => {
	console.log('Client connecté');

	socket.on('message', message => {
		console.log(`Message reçu: ${message}`);

		server.clients.forEach(client => {
			if (client.readyState === WebSocket.OPEN) {
				client.send(message);
			}
		});
	});

	socket.on('close', () => console.log('Client déconnecté'));
});

console.log('Serveur WebSocket démarré sur ws://localhost:8080');
