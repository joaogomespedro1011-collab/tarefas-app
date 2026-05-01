"use client"; // ← ADICIONE ESSA LINHA NO TOPO

import { FormEvent, useState } from "react";
import { Filme } from "../lib/filmes";

interface NovoFilmeProps {
  onAdd: (filme: Filme) => void;
}

export default function NovoFilme({ onAdd }: NovoFilmeProps) {
  const [nome, setNome] = useState("");
  const [imagem, setImagem] = useState("");
  const [nota, setNota] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!nome.trim()) return;

    const response = await fetch("/api/filmes", { // ← CORRIJA A URL
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nome,
        imagem,
        nota: Number(nota),
      }),
    });

    if (response.ok) {
      const novoFilme = await response.json();
      onAdd(novoFilme);
      setNome("");
      setImagem("");
      setNota("");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex-column">
      <input value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Nome do filme" />
      <input value={imagem} onChange={(e) => setImagem(e.target.value)} placeholder="URL da imagem" />
      <input value={nota} onChange={(e) => setNota(e.target.value)} placeholder="Nota (ex: 8.5)" type="number" step="0.1" />
      <button type="submit">Adicionar</button>
    </form>
  );
}