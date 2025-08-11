import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { beforeEach, describe, expect, test, vi } from "vitest";
import LoginPage from "./login";

const mockNavigate = vi.fn();

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual<typeof import("react-router-dom")>(
    "react-router-dom"
  );
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

describe("LoginForm", () => {
  beforeEach(() => {
    localStorage.clear();
    mockNavigate.mockClear();
  });

  test("renderiza título, input e botão", () => {
    render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    );

    expect(screen.getByText(/olá, seja bem-vindo!/i)).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/digite o seu nome:/i)
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /entrar/i })).toBeInTheDocument();
  });

  test("digita o nome, salva no localStorage e navega para '/' ao enviar", async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    );

    const input = screen.getByPlaceholderText(/digite o seu nome:/i);
    const button = screen.getByRole("button", { name: /entrar/i });

    await user.type(input, "Diego");
    await user.click(button);

    expect(localStorage.getItem("teddy-open-finance:name")).toBe("Diego");
    expect(mockNavigate).toHaveBeenCalledWith("/");
  });
});
