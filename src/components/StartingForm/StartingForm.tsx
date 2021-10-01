import { Button } from "../../components-ui/Button/Button";
import { BUTTON_COLOR_MAP, TEXT_COLOR_MAP } from "../../styles/colors";
import { Styled } from "./StartingForm.styled";

interface StartingFormProps {}

export const StartingForm: React.FC<StartingFormProps> = () => {
  return (
    <Styled.StartingForm>
      <Styled.Text>Я</Styled.Text>
      <Styled.ButtonGroup>
        <Button
          style={{
            color: BUTTON_COLOR_MAP.color,
            background: BUTTON_COLOR_MAP.background,
          }}
        >
          Ученик
        </Button>
        <Button style={{ color: BUTTON_COLOR_MAP.color, background: BUTTON_COLOR_MAP.background }}>
          Учитель
        </Button>
      </Styled.ButtonGroup>
    </Styled.StartingForm>
  );
};
