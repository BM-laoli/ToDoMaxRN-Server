import { Module } from "@nestjs/common";
import { DatabaseModule } from "./database.module";
import { TodoListController } from "src/controller/Todo/TodoList.controller";
import { TodoListProviders } from "src/providers/TodoList.providers";
import { TodoListService } from "src/service/TodoList.service";

@Module({
  imports: [DatabaseModule],
  controllers: [TodoListController],
  providers: [...TodoListProviders, TodoListService],
})
export class TodoListModule {}
