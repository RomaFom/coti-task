import React, { memo } from "react";
import { StyledButton } from "./StyledButton";

type Props = {
  children: React.ReactNode;
  onClick: () => void;
};
const Button: React.FC<Props> = ({ children, onClick }) => {
  return (
    <StyledButton onClick={onClick} type={"button"}>
      {children}
    </StyledButton>
  );
};
export default memo(Button);
