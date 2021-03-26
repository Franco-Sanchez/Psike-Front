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
  padding: 16px 35px 16px 16px;
  cursor: pointer;
  color: ${colors.gray_ligth2};
  font-family: "Inter";
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 19px;
  outline: none;
  /* :focus{
    color: red; 
  } */
`;
