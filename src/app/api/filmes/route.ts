// ✅ CORRETO — use o singleton do prisma.ts
import { prisma } from "../../lib/prisma";

export async function GET() {
  const filmes = await prisma.filme.findMany();
  return Response.json(filmes);
}

export async function POST(req: Request) {
  const body = await req.json();
  const filme = await prisma.filme.create({
    data: {
      nome: body.nome,
      imagem: body.imagem,
      nota: body.nota,
    },
  });

  return Response.json(filme);
}