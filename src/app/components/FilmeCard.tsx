"use client";

import { Filme } from "../lib/filmes";

export default function FilmeCard({
  filme,
  onDelete,
}: {
  filme: Filme;
  onDelete: (id: number) => void;
}) {
  return (
    <div className="card">
      <img src={filme.imagem} alt={filme.nome} />

      <h3>{filme.nome}</h3>

      <p>⭐ {filme.nota}</p>

      <button onClick={() => onDelete(filme.id)}>Remover</button>
    </div>
  );
}