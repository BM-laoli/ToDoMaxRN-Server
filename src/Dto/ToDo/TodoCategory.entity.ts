import { ApiPropertyOptional } from "@nestjs/swagger";
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { TodoList } from "./Todolist.entity";

@Entity()
export class TodoCategory {
  @ApiPropertyOptional({
    description: "id",
  })
  @PrimaryGeneratedColumn()
  id?: number;

  @ApiPropertyOptional({
    description: "分类名",
    example: "我的一天",
  })
  @Column()
  name: string;

  @ApiPropertyOptional({
    description: "创建时间",
    example: new Date(),
  })
  @Column()
  date: Date;

  // 外键 不会展示在数据表中、
  @OneToMany((type) => TodoList, (todoList) => todoList.category)
  todoList: TodoList[];
}
