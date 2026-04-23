export type Tarefa = {
  id: number;
  titulo: string;
};

export async function getTarefas(): Promise<Tarefa[]> {
  return Promise.resolve([
    { id: 1, titulo: "Estudar Next.js" },
    { id: 2, titulo: "Aprender testes" },
  ]);
}