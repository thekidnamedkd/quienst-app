import React, { useState, useEffect } from "react";
import "./App.css";
import { API, Storage } from "aws-amplify";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { listAmigos } from "./graphql/queries";
import {
  createAmigo as createAmigoMutation,
  deleteAmigo as deleteAmigoMutation,
} from "./graphql/mutations";

const initialFormState = {
  nombre: "",
  edad: "",
  paradero: "",
  trabajo: "",
  descripcion: "",
  image: "",
};

function App() {
  const [amigos, setAmigos] = useState([]);
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    fetchAmigos();
  }, []);

  async function fetchAmigos() {
    const apiData = await API.graphql({ query: listAmigos });
    const amigosFromAPI = apiData.data.listAmigos.items;
    await Promise.all(amigosFromAPI.map(async amigo =>{
      if (amigo.image) {
        const image = await Storage.get(amigo.image);
        amigo.image = image;
      }
      return amigo;
    }))
    setAmigos(apiData.data.listAmigos.items);
  }

  async function createAmigo() {
    if (!formData.nombre || !formData.descripcion) return;
    await API.graphql({
      query: createAmigoMutation,
      variables: { input: formData }
    });
    if (formData.image) {
      const image = await Storage.get(formData.image);
      formData.image = image;
    }
    setAmigos([...amigos, formData]);
    setFormData(initialFormState);
  }

  async function addImage(e) {
    if (!e.target.files[0]) return;
    const file = e.target.files[0];
    setFormData({ ...formData, image: file.name});
    await Storage.put(file.name, file);
    fetchAmigos();
  }

  async function deleteAmigo({ id }) {
    const newAmigosArray = amigos.filter((amigo) => amigo.id !== id);
    setAmigos(newAmigosArray);
    await API.graphql({
      query: deleteAmigoMutation,
      variables: { input: { id } }
    });
  }

  return (
    <div className="App">
      <h1>Carmen, bienvenidos a Quienst!</h1>
      <input
        onChange={(e) => setFormData({ ...formData, "nombre": e.target.value })}
        placeholder="Nombre..."
        value={formData.nombre}
      />
      <br />
      <input
        onChange={(e) => setFormData({ ...formData, "edad": e.target.value })}
        placeholder="Edad..."
        value={formData.edad}
      />
      <br />
      <input
        onChange={(e) => setFormData({ ...formData, "paradero": e.target.value })}
        placeholder="Paradero..."
        value={formData.paradero}
      />
      <br />
      <input
        onChange={(e) => setFormData({ ...formData, "trabajo": e.target.value })}
        placeholder="Trabajo..."
        value={formData.trabajo}
      />
      <br />
      <input
        onChange={(e) =>
          setFormData({ ...formData, "descripcion": e.target.value })
        }
        placeholder="Descripcion..."
        value={formData.descripcion}
      />
      <br />
      <input
        type="file"
        onChange={addImage}
      />
      <br />
      <button onClick={()=> createAmigo()}>Añadir Amigo</button>
      <br />
      <div style={{ marginBottom: 30 }}>
        {amigos.map((amigo) => (
          <div key={amigo.id || amigo.nombre}>
            { 
              <img src={amigo.image} style={{width: 300, float: "left"}} alt="Foto de amigo" />
            }
            <h2>{amigo.nombre}</h2>
            <p>Edad: {amigo.edad}</p>
            <p>Paradero: {amigo.paradero}</p>
            <p>Trabajo: {amigo.trabajo}</p> 
            <p>Descripción: {amigo.descripcion}</p>
            
            <button onClick={() => deleteAmigo(amigo)}>Quitar Amigo</button>
          </div>
        ))}
      </div>
      <div>
          
      </div>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
