import { Injectable, Inject } from "@nestjs/common";
import { Repository } from "typeorm";
import { TodoList } from "src/Dto/ToDo/Todolist.entity";

@Injectable()
export class TodoListService {
  constructor(
    @Inject("TodoList_REPOSITORY")
    private readonly photoRepository: Repository<TodoList>
  ) {}

  // C
  async create(todoList: TodoList): Promise<any> {
    return this.photoRepository.save(todoList);
  }

  // U
  async update(todoList: TodoList): Promise<any> {
    return this.photoRepository.update(todoList.id, todoList);
  }

  // D
  async delet(id: number): Promise<any> {
    return this.photoRepository.delete(id);
  }

  // R
  async findAll(): Promise<any> {
    return this.photoRepository.find();
  }
}
