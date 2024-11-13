import { User } from "./User";

export interface UserRepository {
  // getAll(): Promise<User[]>;
  signup(name : string, email: string, password: string): Promise<number>;
  login(email: string, password: string): Promise<number>;
}