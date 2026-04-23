import { useMemo } from "react";
import { Tarefa } from "../lib/tarefas";

export function useContadorDeTarefas(tarefas: Tarefa[]) {
  return useMemo(() => tarefas.length, [tarefas]);
}