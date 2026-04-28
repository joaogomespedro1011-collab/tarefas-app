import { getFilmes } from "./lib/filmes";
import ListaFilmes from "./components/ListaFilmes";

export default async function Page() {
  const filmesIniciais = await getFilmes();

  return <ListaFilmes filmesIniciais={filmesIniciais} />;
}