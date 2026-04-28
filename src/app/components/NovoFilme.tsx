"use client";

import { useState, FormEvent } from "react";
import { Filme } from "../lib/filmes";

type Props = {
  onAdd: (filme: Filme) => void;
};

export default function NovaFilme({ onAdd }: Props) {
  const [nome, setNome] = useState("");
  const [imagem, setImagem] = useState("");
  const [nota, setNota] = useState(0);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!nome.trim()) return;

    onAdd({
      id: Date.now(),
      nome,
      imagem,
      nota,
    });

    setNome("");
    setImagem("");
    setNota(0);
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        placeholder="Nome do filme"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />

      <input
        placeholder="URL da imagem"
        value={imagem}
        onChange={(e) => setImagem(e.target.value)}
      />

      <input
        type="number"
        placeholder="Nota (0-5)"
        value={nota}
        onChange={(e) => setNota(Number(e.target.value))}
      />

      <button type="submit">Adicionar</button>
    </form>
  );
}