import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../components/ui/Button/button";
import "@testing-library/jest-dom";

/* eslint-disable no-undef */
test("o botão funciona quando clicado", () => {
  const handleClick = jest.fn();

  render(<Button onClick={handleClick}>Buscar personagem</Button>);

  const button = screen.getByText("Buscar personagem");

  expect(button).toBeVisible();

  fireEvent.click(button);

  expect(handleClick).toHaveBeenCalledTimes(1);
});
