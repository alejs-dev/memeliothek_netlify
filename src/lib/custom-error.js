export class CustomError extends Error {
    message;
    statusCode;
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    } 
}