import styled from "@emotion/styled";
import { colors } from "../../ui";

export default function SelectItem({ name, children }) {
  return <StyledSelect name={name}>{children}</StyledSelect>;
}

const StyledSelect = styled.select`
  // A reset of styles, including removing the default dropdown arrow
  appearance: none;
  background: ${colors.white2};
  border: none;
  border-radius: 10px;
  height: 48px;
  width: max-content;
  padding: 16px;
  cursor: pointer;
`;
