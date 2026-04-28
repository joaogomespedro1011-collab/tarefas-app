import { useMemo } from "react";
import { Filme } from "./../lib/filmes";

export function useContadorDeFilmes(filmes: Filme[]) {
  return useMemo(() => filmes.length, [filmes]);
}