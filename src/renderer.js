import {ipcRenderer as ipc} from "electron";

const CALLBACK_SUFFIX = '-elekiter-callback-suffix';

export default class RendererElekiter {
    constructor() {
        this._ipc = ipc;
    };

    /**
     * request to browser process
     * @param  {string}    path - routing path
     * @param  {...any} params - request parameters
     * @return {promise}
     */
    request(path, ...params) {
        return new Promise((resolve, reject) => {
            this._ipc.once(`${path}${CALLBACK_SUFFIX}`, (event, data) => {
                if (data.status) {
                    resolve(data.results);
                } else {
                    reject(data.results);
                }
            });
            this._ipc.send(path, params);
        });
    };

};
