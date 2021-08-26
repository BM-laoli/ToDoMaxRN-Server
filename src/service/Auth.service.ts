import { Injectable, Inject } from "@nestjs/common";
import { createQueryBuilder, Repository } from "typeorm";
import { User } from "../Dto/Auth/photo.entity";

@Injectable()
export class UserService {
  constructor(
    @Inject("USER_REPOSITORY")
    private readonly UserRepository: Repository<User>
  ) {}

  // C
  async save(User: User): Promise<any> {
    return this.UserRepository.save(User);
  }

  // R
  async findAll(): Promise<any> {
    return this.UserRepository.find();
  }

  // U
  async update(User: User): Promise<any> {
    const value = await this.UserRepository.update(User.id, User);
    return value;
  }

  // D
  async delete(id: number): Promise<any> {
    const value = await this.UserRepository.delete(id);
    return value;
  }

  async findOne(name: any): Promise<any> {
    const user = await createQueryBuilder("User")
      .where("User.name = :name", { name: name })
      .getOne();
    return user;
  }

  // 查询用户下的所持有的所有文件
  async findAllList(): Promise<any> {
    // 注意名称的问题 TodoCategory
    const user = await createQueryBuilder("User")
      .leftJoinAndSelect("User.avert", "avert")
      .where("User.name = :name", { name: "Aoda" })
      .getOne();
    return user;
  }
}
