import { Request, Response } from "express";

import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

class CreateCategoryController {
  private createCategoryUseCase: CreateCategoryUseCase;

  constructor(createCategoryUseCase: CreateCategoryUseCase) {
    this.createCategoryUseCase = createCategoryUseCase;
  }

  handle(request: Request, response: Response) {
    const { name, description } = request.body;

    this.createCategoryUseCase.execute({ description, name });

    return response.status(201).send();
  }
}

export { CreateCategoryController };
