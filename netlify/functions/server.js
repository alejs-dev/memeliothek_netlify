import express, { Router } from "express";
import serverless from "serverless-http";

const server = express();

const router = Router();
router.get("/hello", (req, res) => res.send("Hello World!"));

server.use("/api/", router);

export const handler = serverless(api);