"use client";

import { useState } from "react";
import { Tarefa } from "../lib/tarefas";


type Props = {
  onAdd: (tarefa: Tarefa) => void;
};

export default function NovaTarefa({ onAdd }: Props) {
  const [titulo, setTitulo] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!titulo.trim()) return;

    onAdd({
      id: Date.now(),
      titulo,
    });

    setTitulo("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Nova tarefa"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}