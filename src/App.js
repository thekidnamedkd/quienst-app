import React, { useState, useEffect } from "react";
import "./App.css";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { listAmigos } from "./graphql/queries";
import {
  createAmigo as createAmigoMutation,
  deleteAmigo as deleteAmigoMutation,
} from "./graphql/mutations";
import { API } from "aws-amplify";

const initialFormState = { nombre: "", edad: "", description: "" };

function App() {
  const [amigos, setAmigos] = useState([]);
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    fetchAmigos();
  }, []);

  async function fetchAmigos() {
    const apiData = await API.graphql({ query: listAmigos });
    setAmigos(apiData.data.listAmigos.items);
  }

  async function createAmigo() {
    if (!formData.name || !formData.description) return;
    await API.graphql({
      query: createAmigoMutation,
      variables: { input: formData },
    });
    setAmigos([...amigos, formData]);
    setFormData(initialFormState);
  }

  async function deleteAmigo({ id }) {
    const newAmigosArray = amigos.filter((amigo) => amigo.id !== id);
    setAmigos(newAmigosArray);
    await API.graphql({
      query: deleteAmigoMutation,
      variables: { input: { id } },
    });
  }

  return (
    <div className="App">
      <header>
        <h1>Carmen, bienvenidos a Quienst!</h1>
      </header>
      <input
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        placeholder="Nombre..."
        value={formData.name}
        required
      />
      <input
        onChange={(e) => setFormData({ ...formData, edad: e.target.value })}
        placeholder="Edad..."
        value={formData.edad}
        required
      />
      <input
        onChange={(e) => setFormData({ ...formData, paradero: e.target.value })}
        placeholder="Paradero..."
        value={formData.paradero}
        required
      />
      <input
        onChange={(e) => setFormData({ ...formData, trabajo: e.target.value })}
        placeholder="Descripcion..."
        value={formData.trabajo}
        required
      />
      <input
        onChange={(e) =>
          setFormData({ ...formData, descripcion: e.target.value })
        }
        placeholder="Descripcion..."
        value={formData.descripcion}
        required
      />
      <button onClick={createAmigo}>Añadir Amigo</button>
      <div className="Amigos">
        {amigos.map((amigo) => (
          <div key={amigo.id || amigo.name}>
            <h2>Nombre: {amigo.nombre}</h2>
            <ul>
              <li>Edad: {amigo.edad}</li>
              <li>Paradero: {amigo.paradero}</li>
              <li>Trabajo: {amigo.trabajo}</li>
              <li>Descripción: {amigo.descripcion}</li>
            </ul>
            <button onClick={() => deleteAmigo(amigo)}>Quitar Amigo</button>
          </div>
        ))}
      </div>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
