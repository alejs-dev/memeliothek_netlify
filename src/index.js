import { app, router } from "./skrem-app";

app.use("/", router);

const port = 3000;
app.listen(port, () => {
  console.log(`[server]: Server is running`);
});