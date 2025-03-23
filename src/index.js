import { skrem_app, skrem_router } from "./skrem-app";
import { memeliothek_app, memeliothek_router } from "./memeliothek-app";
import { homepage_app, homepage_router } from "./home-app";

homepage_app.use("/", homepage_router);

const port = 3000;
homepage_app.listen(port, () => {
  console.log(`[server]: Server is running`);
});