const handlers = require('../handlers');
const CONSTANTS = require('../lib/constants');
const { HClogger } = require('home-center-core');

const logger = HClogger(CONSTANTS.loggerLabelMain);

module.exports = {
    init,
};

function init(socket) {
    logger.log('info', 'Initialize Socket connector');
    socket.on('connection', client => {
        client.on('dsaudio:playlist:play', handlers.dsaudio.playlist.play);
        client.on('dsaudio:playlist:pause', handlers.dsaudio.playlist.pause);
        client.on(
            'dsaudio:playlist:addtoqueue',
            handlers.dsaudio.playlist.addToQueue
        );
    });
}
