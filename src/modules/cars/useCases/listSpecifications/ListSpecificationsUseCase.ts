import { SpecificationRepository } from "../../repositories/SpecificationRepository";

class ListSpecificationsUseCase {
  private specificationRepository: SpecificationRepository;

  constructor(specificationRepository: SpecificationRepository) {
    this.specificationRepository = specificationRepository;
  }

  execute() {
    return this.specificationRepository.list();
  }
}

export { ListSpecificationsUseCase };
