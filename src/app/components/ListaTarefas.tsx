"use client";

import { useState } from "react";
import { Tarefa } from "../lib/tarefas";
import NovaTarefa from "./NovaTarefa";
import { useContadorDeTarefas } from "../hooks/useContadorDeTarefas";

export default function ListaTarefas({ tarefasIniciais }: { tarefasIniciais: Tarefa[] }) {
  const [tarefas, setTarefas] = useState(tarefasIniciais);

  const total = useContadorDeTarefas(tarefas);

  function adicionar(tarefa: Tarefa) {
    setTarefas((prev) => [...prev, tarefa]);
  }

  return (
    <div>
      <h1>Lista de Tarefas</h1>

      <p>Total: {total}</p>

      <NovaTarefa onAdd={adicionar} />

      <ul>
        {tarefas.map((t) => (
          <li key={t.id}>{t.titulo}</li>
        ))}
      </ul>
    </div>
  );
}