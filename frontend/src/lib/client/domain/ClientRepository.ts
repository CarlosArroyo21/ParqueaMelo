import { Client } from "./Client";

export interface ClientRepository {
  getAll(): Promise<Client[]>;
  register(client: Client): Promise<void>;
}
