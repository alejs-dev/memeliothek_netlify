import { homepage_app, homepage_router } from "./app";

homepage_app.use("/", homepage_router);

const port = 3000;
homepage_app.listen(port, () => {
  console.log(`[server]: Server is running`);
});