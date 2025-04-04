import { CustomError } from "../lib/custom-error";

export function notFound(req, res, next) {
    return next(new CustomError("Requested Route not found", 404));
}