import express from "express";

import { categoriesRoutes } from "./routes/catergories.routes";
import { specificationRoutes } from "./routes/specifications.routes";

const app = express();

app.use(express.json());

app.use("/categories", categoriesRoutes);

app.use("/specification", specificationRoutes);

app.listen(3333, () => console.log("Server is running!"));
