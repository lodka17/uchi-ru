import styled from "styled-components";

interface ButtonProps {
  style: object;
}

const Button = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  width: 100%;
  border-radius: 8px;
  border: none;
  outline: none;
  cursor: pointer;
  color: ${(props) => {
    console.log(props);
    return "white";
  }};
  background-color: ${(props) => {
    console.log(props.style?.background?.main);
    return "white";
    /* console.log(style.background.main.uiMinGreen); */
    /* return "white"; */
    /* return style.background.main.uiMinGreen; */
  }};
  &:hover {
    background-color: ${({ style: { background } }) => background};
  }
`;

export const Styled = {
  Button,
};
