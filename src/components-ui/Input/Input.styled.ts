import styled from "styled-components";

interface InputProps {
  background?: string;
  color?: string;
}

const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input<InputProps>`
  box-sizing: border-box;
  border-radius: 3px;
  height: 56px;
  padding: 14px;
  font-size: 24px;
`;

const Span = styled.span`
  margin-bottom: 8px;
`;

export const Styled = {
  Label,
  Input,
  Span,
};
