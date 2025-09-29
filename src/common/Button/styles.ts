import styled from "styled-components";

export const StyledButton = styled("button")<{ color?: string }>`
  /* Cor de fundo padrão preta; se uma cor custom for passada, usa-se ela */
  background: ${(p) => p.color || "#000"};
  /* Ajuste automático da cor do texto para evitar desaparecer em fundo claro */
  color: ${(p) => {
    if (!p.color) return "#fff"; // sem cor custom -> botão padrão escuro
    const c = p.color.toLowerCase();
    if (
      c === "#fff" ||
      c === "#ffffff" ||
      c === "white" ||
      c === "rgb(255,255,255)" ||
      c === "rgba(255,255,255,1)"
    ) {
      return "#000"; // texto preto em fundo branco
    }
    return "#fff"; // fallback para fundos coloridos/escuros
  }};
  font-size: 1rem;
  font-weight: 700;
  width: 100%;
  border: 1px solid #edf3f5;
  border-radius: 4px;
  padding: 13px 0;
  cursor: pointer;
  margin-top: 0.625rem;
  max-width: 180px;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 16px 30px rgb(23 31 114 / 20%);

  &:hover,
  &:active,
  &:focus {
    color: #fff;
    border: 1px solid rgb(255, 130, 92);
    background-color: rgb(255, 130, 92);
  }
`;
