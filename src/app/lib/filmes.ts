// src/app/lib/filmes.ts

import { prisma } from "./prisma"; // import primeiro!

export interface Filme {
  id: number;
  nome: string;
  imagem: string;
  nota: number;
}

export async function getFilmes() {
  return prisma.filme.findMany();
}



