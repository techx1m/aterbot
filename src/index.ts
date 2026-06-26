import http from 'http';

// Railway Health Check Bypass Code
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Bot running 24/7!\n');
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Web server listening on port ${PORT}`);
});
import initBot from "./bot.ts";
import initWeb from "./web.ts";

initBot();
initWeb();
