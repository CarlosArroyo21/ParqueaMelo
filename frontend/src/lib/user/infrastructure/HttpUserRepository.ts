import { User } from "../domain/User";
import { UserRepository } from "../domain/UserRepository";

export const CreateHttpUserRepository = (): UserRepository => {
  return {
    // getAll: async (): Promise<User[]> => {
    //   const response = await fetch("http://localhost:8000/users/");
    //   if (!response.ok) {
    //     throw new Error("Failed to fetch users");
    //   }
    //   const users: User[] = await response.json();
    //   return users;
    // },

    signup: async (name : string, email: string, password: string): Promise<number> => {
      const response = await fetch("http://localhost:8000/users/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (!response.ok) {
        throw new Error("Failed to register user");
      }

      const data = await response.json(); // Suponemos que el backend devuelve el JSON con statusCode y message
    
      return data.statusCode

    },
    login: async (email: string, password: string): Promise<number> => {
      const response = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
    
      if (!response.ok) {
        throw new Error("Failed to login");
      }
    
      const data = await response.json(); // Suponemos que el backend devuelve el JSON con statusCode y message
    
      return data.statusCode
    },    
  };
};
