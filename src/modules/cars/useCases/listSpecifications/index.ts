import { SpecificationRepository } from "../../repositories/SpecificationRepository";
import { ListSpecificationsController } from "./ListSpecificationsController";
import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";

const specificationRepository = SpecificationRepository.getInstance();

const listSpecificationUseCase = new ListSpecificationsUseCase(
  specificationRepository,
);

const listSpecificationsController = new ListSpecificationsController(
  listSpecificationUseCase,
);

export { listSpecificationsController };
