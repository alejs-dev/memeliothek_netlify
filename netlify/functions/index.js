import serverless from "serverless-http";
import { database } from "../db/index.mjs";
import { app, router } from "../../src/app";

app.use("/", router);

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

export const handler = serverless(app);