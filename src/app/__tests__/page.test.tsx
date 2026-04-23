import { render, screen } from "@testing-library/react";
import Page from "@/app/page";

jest.mock("@/lib/tarefas", () => ({
  getTarefas: jest.fn().mockResolvedValue([
    { id: 1, titulo: "Mock tarefa" },
  ]),
}));

describe("Page", () => {
  it("renderiza tarefas", async () => {
    const Component = await Page();

    render(Component);

    expect(await screen.findByText("Mock tarefa")).toBeInTheDocument();
  });
});