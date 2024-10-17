// lib/client/infrastructure/HttpClientRepository.ts
import { Client } from "../domain/Client";
import { ClientRepository } from "../domain/ClientRepository";

export const CreateHttpClientRepository = (): ClientRepository => {
  return {
    getAll: async (): Promise<Client[]> => {
      const response = await fetch("http://localhost:8000/clients/");
      if (!response.ok) {
        throw new Error("Failed to fetch clients");
      }
      const clients: Client[] = await response.json();
      return clients;
    },

    register: async (client: Client): Promise<void> => {
      const response = await fetch("http://localhost:8000/clients/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(client),
      });

      if (!response.ok) {
        throw new Error("Failed to register client");
      }
    },
  };
};
