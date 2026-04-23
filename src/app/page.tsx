import { getTarefas } from "./lib/tarefas";
import ListaTarefas from "./components/ListaTarefas";

export default async function Page() {
  const tarefasIniciais = await getTarefas();

  return <ListaTarefas tarefasIniciais={tarefasIniciais} />;
}