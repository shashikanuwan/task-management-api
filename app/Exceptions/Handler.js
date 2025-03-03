class ExceptionHandler {
    static handle(error, req, res, next) {
        const status = error.status || 500;
        const message = error.message || 'Something went wrong';

        res.status(status).json({
            message,
            errors: process.env.NODE_ENV === 'development' ? {
                stack: error.stack,
                details: error
            } : undefined
        });
    }
}

module.exports = ExceptionHandler.handle;