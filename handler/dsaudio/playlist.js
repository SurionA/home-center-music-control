const axios = require('axios');
const DSAUDIO = require('../../lib/constants');

module.exports = {
    addToQueue,
    pause,
    play,
};

function play() {
    return DSAudioPlayOrPause('play');
}

function pause() {
    return DSAudioPlayOrPause('pause');
}

function addToQueue(playlistID, limit = 0, offset = 0) {
    axios.get(`${process.env.DSAUDIO_URL}/${DSAUDIO.baseurl}/${DSAUDIO.remote_player.path}`, {
        params: {
            _sid: process.env.DSAUDIO_TOKEN,
            api: DSAUDIO.remote_player.api,
            containers_json: JSON.stringify([{
                type: DSAUDIO.playlist.type,
                id: playlistID,
            }]),
            id: DSAUDIO.remote_player.id,
            library: DSAUDIO.remote_player.library.personal,
            limit,
            method: DSAUDIO.remote_player.method.updateQueue,
            offset,
            play: true,
            version: DSAUDIO.remote_player.version,
        },
    })
        .then((response) => {
            console.log(response);
            return DSAudioPlayOrPause('play');
        })
        .catch((error) => {
            console.log(error);
        });
}

function DSAudioPlayOrPause(action) {
    axios.get(`${process.env.DSAUDIO_URL}/${DSAUDIO.baseurl}/${DSAUDIO.remote_player.path}`, {
        params: {
            _sid: process.env.DSAUDIO_TOKEN,
            action,
            api: DSAUDIO.remote_player.api,
            id: DSAUDIO.remote_player.id,
            method: DSAUDIO.remote_player.method.control,
            version: DSAUDIO.remote_player.version,
        },
    })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
}
