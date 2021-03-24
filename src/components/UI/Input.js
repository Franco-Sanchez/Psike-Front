import styled from "@emotion/styled";
import { colors } from "../../ui";

export default function InputField({ type, placeholder, onChange }) {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      onChange={onChange}
    ></StyledInput>
  );
}

const StyledInput = styled.input`
  height: 48px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  color: ${colors.black};
  padding: 13px 20px;
  border-radius: 10px;
  border: none;

  &::placeholder {
    color: ${colors.gray_ligth2};
  }
  &:focus {
    outline: none;
    border: 1px solid ${colors.pink1};
  }
`;
