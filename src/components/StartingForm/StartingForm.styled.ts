import { TEXT_COLOR_MAP } from "./../../styles/colors";
import styled from "styled-components";

const StartingForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 42px;
`;

const Text = styled.p`
  font-size: 34px;
  font-weight: 600;
  line-height: 32px;
  color: ${TEXT_COLOR_MAP.black};
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 48px;
  width: 452px;
`;

export const Styled = { StartingForm, Text, ButtonGroup };
