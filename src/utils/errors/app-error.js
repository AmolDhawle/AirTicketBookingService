const { StatusCodes } = require("http-status-codes");

class AppError extends Error {
        constructor(
            name,
            message,
            explanation,
            statusCode
        ) {
            super(message);
            this.message = message;
            this.explanation = explanation;
            this.statusCode = statusCode;
        }
}

module.exports = AppError;