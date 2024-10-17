import { useEffect, useState } from "react";
import { createClientService } from "../../lib/client/aplication/ClientService";
import { CreateHttpClientRepository } from "../../lib/client/infrastructure/HttpClientRepository";
import { Client } from "../../lib/client/domain/Client";

const repository = CreateHttpClientRepository();
const service = createClientService(repository);

export default function ClientView() {
  const [clients, setClients] = useState<Client[]>([]);
  const [clientCc, setClientCc] = useState(0);
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");

  const submit: React.FormEventHandler = (event) => {
    event.preventDefault();

    service
      .register(clientCc, clientName, clientEmail)
      .then(() => {
        registerClient();
        setClientCc(0);
        setClientName("");
        setClientEmail("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const registerClient = () => {
    service
      .getAll()
      .then((clients) => {
        setClients(clients);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    registerClient();
  }, []);

  return (
    <div>
      <h1>Vista del cliente</h1>
      {clients.length === 0 && <p>No hay clientes</p>}
      <ul>
        {clients.map((client) => (
          <li key={client.cc}>
            {client.cc} - {client.name} - {client.email}
          </li>
        ))}
      </ul>

      <form onSubmit={submit}>
        <input
          type="text"
          name="cc"
          value={clientCc}
          onChange={(e) => setClientCc(parseInt(e.target.value))}
        />
        <input
          type="text"
          name="name"
          value={clientName}
          onChange={(e) => setClientName(e.target.value)}
        />
        <input
          type="text"
          name="email"
          value={clientEmail}
          onChange={(e) => setClientEmail(e.target.value)}
        />

        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}
