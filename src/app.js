import express, { Router } from "express";
import bodyParser from "body-parser";
import { database } from "../src/db/index";
import cors from "cors";

const app = express();
const router = Router();

app.use((request, response, next) => {
    response.setHeader("Kawasdasistdigga", "testdigga");
    next();
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

router.get("/", (request, response, next) => {
    return response.json({
        "message": "Home", 
        "data": "This is the Homepage"
    })
});

//-------------------------------------------------------------------------------------
//------------------------- Routes for Memeliothek ------------------------------------
//-------------------------------------------------------------------------------------

router.get("/memeliothek", (request, response, next) => {
    return response.json({
        "message": "Memeliothek Home", 
        "data": "This is the Memeliothek Page"
    })
});

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

router.get("/memeliothek/nahidwin", (request, response, next) => {
    response.json({
        "message": "success",
        "data": "Nah id win"
    });
});

router.get("/memeliothek/randompics", (request, response, next) => {
    response.json({
        "message": "success",
        "data": "Random pics"
    });
});

//-------------------------------------------------------------------------------------
//------------------------- End Routes for Memeliothek --------------------------------
//-------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------
//------------------------- Routes for Skrem ------------------------------------------
//-------------------------------------------------------------------------------------

router.get("/skrem", (request, response, next) => {
    let sql = "select * from skrem";
    let params = [];
    database.all(sql, params, (error, rows) => {
        if (error) {
            response.status(400).json({"error": error.message});
            return;
        };
        response.json({
            "message": "success",
            "data": rows
        });
    });

    // response.json({
    //     "message": "Skrem", 
    //     "data": "lmao"
    // })
});

router.get("/skrem/:id", (request, response, next) => {
    let sql = "select * from skrem where id = ?";
    let params = [request.params.id];
    database.get(sql, params, (error, row) => {
        if (error) {
            response.status(400).json({"error": error.message});
            return;
        };
        response.json({
            "message": "success",
            "data": row
        });
    });
});

router.post("/skrem", (request, response, next) => {
    let errors = [];
    if (!request.body.producer) {
        errors.push("No producer specified");
    }; 
    if (!request.body.fname) {
        errors.push("No fname specified");
    }; 
    let data = {
        producer: request.body.producer,
        fname: request.body.fname
    }; 
    let insert = 'INSERT INTO skrem (producer, fname) VALUES (?, ?)';
    let params = [data.producer, data.fname];
    database.run(insert, params, function(error) {
        if (error) {
            response.status(400).json({"error": error.message});
            return;
        } else {
            response.json({
                "message": "success",
                "data": data,
                "id": this.lastID
            });
        };
    });
});

router.put("/skrem/:id", (request, response, next) => {
    let data = {
        producer: request.body.producer,
        fname: request.body.fname
    };
    database.run(
        `UPDATE skrem set 
           producer = COALESCE(?, producer),
           fname = COALESCE(?, fname)
           WHERE id = ?`,
        [data.producer, data.fname, request.params.id],
        function(error) {
            if (error) {
                response.status(400).json({"error": response.message});
                return;
            } else {
                response.json({
                    message: "success",
                    data: data
                });
            };
        }
    );
});

router.delete("/skrem/:id", (request, response, next) => {
    database.run(
        'DELETE FROM skrem WHERE id = ?',
        request.params.id,
        function(error) {
            if (error) {
                response.status(400).json({"error": response.message});
                return;
            } else {
                response.json({"message": "deleted", rows: this.changes});
            };
        }
    );
});
export { app, router };