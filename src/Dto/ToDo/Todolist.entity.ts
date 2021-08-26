import { ApiPropertyOptional } from "@nestjs/swagger";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { TodoCategory } from "./TodoCategory.entity";

@Entity()
export class TodoList {
  @PrimaryGeneratedColumn()
  id?: number;

  @ApiPropertyOptional({
    description: "todo名",
    example: "吃饭",
  })
  @Column()
  name: string;

  @ApiPropertyOptional({
    description: "目前状态",
    example: false,
  })
  @Column()
  state: boolean;

  // 注意这的干关系
  @ManyToOne(() => TodoCategory, (todolistCate) => todolistCate.todoList)
  category: TodoCategory;
}
