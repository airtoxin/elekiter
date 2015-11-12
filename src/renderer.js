const _ipc = require('ipc');
const CALLBACK_SUFFIX = '-elekiter-callback-suffix';

export default class RendererElekiter {

    constructor() {
        this._ipc = _ipc;
    };

    /**
     * request to browser process
     * @param  {string}    path - routing path
     * @param  {...any} params - request parameters
     * @return {promise}
     */
    request(path, ...params) {
        let ipc = this._ipc;
        return new Promise((resolve, reject) => {
            ipc.once(`${path}${CALLBACK_SUFFIX}`, (data) => {
                if (data.status) {
                    resolve(data.results);
                } else {
                    reject(data.results);
                }
            });
            ipc.send(path, params);
        });
    };

};
