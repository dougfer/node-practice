import { Request, Response } from "express";

import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";

class ListSpecificationsController {
  private listSpecificationUseCase: ListSpecificationsUseCase;

  constructor(listSpecificationUseCase: ListSpecificationsUseCase) {
    this.listSpecificationUseCase = listSpecificationUseCase;
  }

  handle(request: Request, response: Response) {
    const list = this.listSpecificationUseCase.execute();

    return response.status(200).json(list);
  }
}

export { ListSpecificationsController };
