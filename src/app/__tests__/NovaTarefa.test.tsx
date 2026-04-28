import { render, screen, fireEvent } from "@testing-library/react";
import NovaTarefa from "../components/NovoFilme";

describe("NovaTarefa", () => {
  it("renderiza input e botão", () => {
    render(<NovaTarefa onAdd={jest.fn()} />);

    expect(screen.getByPlaceholderText("Nova tarefa")).toBeInTheDocument();
    expect(screen.getByText("Adicionar")).toBeInTheDocument();
  });

  it("não adiciona tarefa vazia", () => {
    const onAdd = jest.fn();

    render(<NovaTarefa onAdd={onAdd} />);

    fireEvent.click(screen.getByText("Adicionar"));

    expect(onAdd).not.toHaveBeenCalled();
  });

  it("adiciona tarefa válida", () => {
    const onAdd = jest.fn();

    render(<NovaTarefa onAdd={onAdd} />);

    fireEvent.change(screen.getByPlaceholderText("Nova tarefa"), {
      target: { value: "Nova tarefa teste" },
    });

    fireEvent.click(screen.getByText("Adicionar"));

    expect(onAdd).toHaveBeenCalled();
  });
});