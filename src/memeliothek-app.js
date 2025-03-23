import express, { Router } from "express";

const app = express();
const router = Router();

app.use((req, res, next) => {
    res.setHeader("Kawasdasistdigga", "testdigga");
    next();
});  

router.get("/", (req, res, next) => {
    return res.json({
        "message": "Home", 
        "data": "This is the Homepage of the Memeliothek App"
    })
});

router.get("/test", (req, res, next) => {
    return res.json({
        "message": "test", 
        "data": "test LMAO"
    })
}); 

export { app, router };