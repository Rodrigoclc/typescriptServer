import http from 'node:http';

const server = await http.createServer(async (req, res) => {

});

server.listen(3000, () => {
	console.log(`Server running on http://localhost:3000`);
})
