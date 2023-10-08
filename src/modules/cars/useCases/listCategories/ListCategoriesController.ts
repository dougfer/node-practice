import { Request, Response } from "express";

import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

class ListCategoriesController {
  private listCategoriesUseCase: ListCategoriesUseCase;

  constructor(listCategoriesUseCase: ListCategoriesUseCase) {
    this.listCategoriesUseCase = listCategoriesUseCase;
  }

  handle(request: Request, response: Response) {
    const list = this.listCategoriesUseCase.execute();

    return response.status(200).json(list);
  }
}

export { ListCategoriesController };
