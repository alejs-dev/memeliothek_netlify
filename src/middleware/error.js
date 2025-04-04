import { CustomError } from "../lib/custom-error";

export function error(err = CustomError, req, res, next) {
    try {
        const msg = JSON.parse(err.message);
        res.status(err.status).json({ msg });
    } catch (error) {
        res.status(err.status).json({ msg: err.message});
    }
}