/**
 * Created by david on 2/13/17.
 */
module.exports = {
    requireAuthentication: function (req, res, next) {
        console.log('Sup! Private route hea!');
        next();
    },
    logger: function (req, res, next) {
        console.log(`Request: ${new Date().toString()} ${req.method} URL: ${req.originalUrl}`);
        next();
    }
};