import { Router } from "express";

import { SpecificationRepository } from "../modules/cars/repositories/SpecificationRepository";
import { CreateSpecificationService } from "../modules/cars/services/CreateSpecificationService";

const specificationRoutes = Router();

const specificationRepository = new SpecificationRepository();

specificationRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const createSpecificationService = new CreateSpecificationService(
    specificationRepository,
  );

  createSpecificationService.execute({ description, name });

  return response.status(201).send();
});

specificationRoutes.get("/", (request, response) => {
  const list = specificationRepository.list();

  return response.status(200).json(list);
});

export { specificationRoutes };
