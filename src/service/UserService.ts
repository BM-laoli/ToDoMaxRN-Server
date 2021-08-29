import { Injectable, Inject } from "@nestjs/common";
import { createQueryBuilder, Repository } from "typeorm";
import { User } from "../Dto/User/User.entity";

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

  async findOne(query:any): Promise<any> {
    const { name,id } = query
    if( !name && !id ) return this.findAll()

    const user = await createQueryBuilder("User")
      .where("User.name = :name OR User.id = :id", { name: name ,id:id})
      .getOne();
    return user;
  }

  // 查询用户下的所持有的所有文件
  async findAllList(query): Promise<any> {
    // 注意名称的问题 TodoCategory
    const { name,id } = query
    if( !name && !id ) return await createQueryBuilder("User").leftJoinAndSelect("User.avert", "avert").getOne()
    const user = await createQueryBuilder("User")
      .leftJoinAndSelect("User.avert", "avert")
      .where("User.name = :name OR User.id = :id", { name: name ,id:id})
      .getOne();
    return user;
  }
}
