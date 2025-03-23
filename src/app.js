import express, { Router } from "express";

const app = express();
const router = Router();

app.use((request, response, next) => {
    response.setHeader("Kawasdasistdigga", "testdigga");
    next();
});  

router.get("/", (request, response, next) => {
    return response.json({
        "message": "Home", 
        "data": "This is the Homepage"
    })
});

router.get("/memeliothek", (request, response, next) => {
    return response.json({
        "message": "Memeliothek Home", 
        "data": "This is the Memeliothek Page"
    })
});

// Routes for Azubis
router.get("/memeliothek/azubis/alex", (request, response, next) => {
    response.json({
        "message": "success",
        "data": "Alex"
    });
});

router.get("/memeliothek/azubis/artyom", (request, response, next) => {
    response.json({
        "message": "success",
        "data": "Artyom"
    });
});

router.get("/memeliothek/azubis/christoph", (request, response, next) => {
    response.json({
        "message": "success",
        "data": "Christoph"
    });
});

router.get("/memeliothek/azubis/moritz", (request, response, next) => {
    response.json({
        "message": "success",
        "data": "Moritz"
    });
});

router.get("/memeliothek/azubis/patrick", (request, response, next) => {
    response.json({
        "message": "success",
        "data": "Patrick"
    });
});
// End of Routes for Azubis

// Route for nah id win
router.get("/memeliothek/nahidwin", (request, response, next) => {
    response.json({
        "message": "success",
        "data": "Nah id win"
    });
});
// End of Route for nah id win

// Route for random pics
router.get("/memeliothek/randompics", (request, response, next) => {
    response.json({
        "message": "success",
        "data": "Random pics"
    });
});
// End of Route for random pics 

export { app, router };