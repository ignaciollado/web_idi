import React, { useState, useEffect, useRef } from "react";
import socket from "./Socket";
import "../App.css";

const Chat = ({ nombre }) => {
  const [mensaje, setMensaje] = useState("");
  const [mensajes, setMensajes] = useState([]);

  useEffect(() => {
    socket.emit("conectado", nombre);
  }, [nombre]);

  useEffect(() => {
    socket.on("mensajes", (mensaje) => {
      setMensajes([...mensajes, mensaje]);
    });

    return () => {
      socket.off();
    };
  }, [mensajes]);

  const divRef = useRef(null);
  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: "smooth" });
  });

  const submit = (e) => {
    e.preventDefault();
    socket.emit("mensaje", nombre, mensaje);
    setMensaje("");
  };

  return (
    <div className="chat__container">
      <div className="chat">
        {mensajes.map((e, i) => (
          <div key={i}>
            <div><strong>{e.nombre}: </strong>{e.mensaje}</div>
            
          </div>
        ))}
        <div ref={divRef}></div>
      </div>

      <form onSubmit={submit}>
        <label htmlFor="mimensaje">Escriba su mensaje:</label><br></br>
        <textarea
          name="mimensaje"
          id=""
          cols="60"
          rows="2"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
        ></textarea>
        <button>Enviar</button>
      </form>

    </div>
  );
};

export default Chat;
