"use client";

// No arquivo FilmeCard.tsx, mude a linha 3 para:
import { Filme } from "@prisma/client";

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