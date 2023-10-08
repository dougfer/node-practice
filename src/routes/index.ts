import { Router } from "express";

import { categoriesRoutes } from "./catergories.routes";
import { specificationRoutes } from "./specifications.routes";

const router = Router();

router.use("/categories", categoriesRoutes);

router.use("/specification", specificationRoutes);

export { router };
