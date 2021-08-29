import { ApiPropertyOptional } from "@nestjs/swagger";
import { OneToMany } from "typeorm";
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { File } from "../File/FIle.entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id?: number;


  @ApiPropertyOptional({ description: "姓名", example: "Joney" })
  @Column()
  name: string;
  
  @ApiPropertyOptional({ description: "密码", example: "12345" })
  @Column()
  password: string;

  @ApiPropertyOptional({ description: "生日", example: new Date() })
  @Column()
  birth?: Date;

  @ApiPropertyOptional({ description: "性别", example: false })
  @Column()
  sex?: boolean;


  // 外键 不会展示在数据表中、
  @OneToMany((type) => File, (file) => file.user)
  avert?: File[];
}
