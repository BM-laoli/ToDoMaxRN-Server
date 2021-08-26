import { Injectable, Inject } from "@nestjs/common";
import { createQueryBuilder, Repository } from "typeorm";
import { TodoCategory } from "../Dto/ToDo/TodoCategory.entity";

@Injectable()
export class TodoCategoryService {
  constructor(
    @Inject("TodoCategory_REPOSITORY")
    private readonly photoRepository: Repository<TodoCategory>
  ) {}

  // C
  async create(todoCategory: TodoCategory): Promise<any> {
    return this.photoRepository.save(todoCategory);
  }

  // U
  async update(todoCategory: TodoCategory): Promise<any> {
    return this.photoRepository.update(todoCategory.id, todoCategory);
  }

  // D
  async delet(id: number): Promise<any> {
    return this.photoRepository.delete(id);
  }

  // R
  async findAll(): Promise<any> {
    return this.photoRepository.find();
  }

  // 查这个分类下所有的todo
  async findAllList(): Promise<any> {
    // 注意名称的问题 TodoCategory
    const user = await createQueryBuilder("TodoCategory")
      .leftJoinAndSelect("TodoCategory.todoList", "todoList")
      .where("TodoCategory.name = :name", { name: "我的一天" })
      .getOne();
    return user;
  }
}
