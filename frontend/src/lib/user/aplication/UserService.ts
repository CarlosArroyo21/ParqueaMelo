import { UserRepository } from "../domain/UserRepository";

export const createUserService = (repository: UserRepository) => {
  return {
    // getAll: async () => await repository.getAll(),
    signup: async (name: string, email: string, password: string) =>
      await repository.signup( name, email, password ),
    login: async (email: string, password: string) =>
      await repository.login(email, password),
  };
};
