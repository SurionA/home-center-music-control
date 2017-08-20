module.exports = {
    init,
};

const handler = require('../handler');

function init(socket) {
    socket.on('connection', (client) => {
        client.on('dsaudio:playlist:play', handler.dsaudio.playlist.play);
        client.on('dsaudio:playlist:pause', handler.dsaudio.playlist.pause);
        client.on('dsaudio:playlist:addtoqueue', handler.dsaudio.playlist.addToQueue);
    });
}
