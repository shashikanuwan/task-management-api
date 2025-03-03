const ExceptionHandler = require('../../Exceptions/Handler');

module.exports = (err, req, res, next) => {
    ExceptionHandler(err, req, res, next);
};