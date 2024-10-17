import { ClientRepository } from "../domain/ClientRepository";

export const createClientService = (repository: ClientRepository) => {
  return {
    getAll: async () => await repository.getAll(),
    register: async (cc: number, name: string, email: string) =>
      await repository.register({ cc, name, email }),
  };
};

