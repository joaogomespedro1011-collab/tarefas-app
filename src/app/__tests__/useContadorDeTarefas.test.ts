import { renderHook } from "@testing-library/react";
import { useContadorDeTarefas } from "../hooks/useContadorDeTarefas";

describe("useContadorDeTarefas", () => {
  it("retorna quantidade correta", () => {
    const { result } = renderHook(() =>
      useContadorDeTarefas([
        { id: 1, titulo: "A" },
        { id: 2, titulo: "B" },
      ])
    );

    expect(result.current).toBe(2);
  });
});