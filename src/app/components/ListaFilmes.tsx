"use client";

import { useState } from "react";
import { Filme } from "../lib/filmes";
import NovaFilme from "./NovoFilme";
import FilmeCard from "./FilmeCard";
import { useContadorDeFilmes } from "../hooks/useContadorDeFilmes";

export default function ListaFilmes({ filmesIniciais }: { filmesIniciais: Filme[] }) {
  const [filmes, setFilmes] = useState(filmesIniciais);

  const total = useContadorDeFilmes(filmes);

  function adicionar(filme: Filme) {
    setFilmes((prev) => [...prev, filme]);
  }

  function remover(id: number) {
    setFilmes((prev) => prev.filter((f) => f.id !== id));
  }

  return (
    <div className="container">
      <h1>🎬 Mini Netflix</h1>

      <p className="counter">Total: {total}</p>

      <NovaFilme onAdd={adicionar} />

      <div className="grid">
        {filmes.map((f) => (
          <FilmeCard key={f.id} filme={f} onDelete={remover} />
        ))}
      </div>
    </div>
  );
}