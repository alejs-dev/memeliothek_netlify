import express, { Router } from "express";

const app = express();
const router = Router();

app.use((req, res, next) => {
    res.setHeader("Kawasdasistdigga");
    next();
});  

router.get("/test", (req, res, next) => {
    return res.json({
        "message": "test", 
        "data": "test LMAO"
    })
}); 

export { app, router };