import serverless from "serverless-http";

import { app, router } from "../../src/home-app";

app.use("/", router);

export const handler = serverless(app);