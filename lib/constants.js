module.exports = {
    baseurl: 'webapi',
    loggerLabelMain: 'HomeCenter Music Control',
    playlist: {
        type: 'playlist',
    },
    remote_player: {
        api: 'SYNO.AudioStation.RemotePlayer',
        id: '__SYNO_USB_PLAYER__',
        library: {
            personal: 'personal',
            shared: 'shared',
        },
        method: {
            updateQueue: 'updateplaylist',
            control: 'control',
        },
        path: 'AudioStation/remote_player.cgi',
        version: '2',
    },
};
