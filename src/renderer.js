export default class RendererElekiter {

    constructor() {
        console.log("@renderer:");
    }

    /**
     * request to browser process
     * @param  {string}    path - routing path
     * @param  {...any} params - request parameters
     * @return {promise}
     */
    request(path, ...params) {}

};
