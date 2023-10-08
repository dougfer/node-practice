import { Router } from "express";

import { CategoriesRepository } from "../modules/cars/repositories/CategoriesRepository";
import { CreateCategoryService } from "../modules/cars/services/CreateCategoryService";

const categoriesRoutes = Router();

const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const createCategoryService = new CreateCategoryService(categoriesRepository);

  createCategoryService.execute({ description, name });

  return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => {
  const list = categoriesRepository.list();

  return response.status(200).json(list);
});

export { categoriesRoutes };
