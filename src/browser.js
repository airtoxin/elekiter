const async = require('neo-async');
const _ipc = require('ipc');
const CALLBACK_SUFFIX = '-elekiter-callback-suffix';

export default class BrowserElekiter {

    constructor() {
        this._ipc = _ipc;
        this._middlewares = [];
    };

    /**
     * regist middleware
     * @param  {function} middleware - middleware function
     */
    use(middleware) {
        this._middlewares.push(middleware);
    };

    /**
     * regist routes
     * @param  {string}   path     - routing path
     * @param  {function} callback - arguments is (req, res)
     */
    get(path, callback) {
        let ipc = this._ipc;
        ipc.on(path, (event, params) => {
            let req = {
                params
            };
            let res = {
                ok(...results) {
                    let data = {
                        status: 1,
                        results
                    };
                    event.sender.send(`${path}${CALLBACK_SUFFIX}`, data);
                },
                ng() {}
            };
            // apply middlewares
            async.eachSeries(this._middlewares, function (middleware, next) {
                middleware(req, res, function () {
                    next();
                });
            }, function () {
                callback(req, res);
            });
        });
    };

};
