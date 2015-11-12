export default class BrowserElekiter {

    constructor() {
        console.log("@browser:");
    }

    /**
     * regist middleware
     * @param  {function} middleware - middleware function
     */
    use(middleware) {}

    /**
     * regist routes
     * @param  {string}   path     - routing path
     * @param  {function} callback - arguments is (req, res)
     */
    get(path, callback) {}

};
