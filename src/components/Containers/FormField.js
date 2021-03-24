import styled from "@emotion/styled";
import { colors } from "../../ui";

export default function FormField({ children }) {
  return <StyledDiv>{children}</StyledDiv>;
}

const StyledDiv = styled.div`
  width: 387px;
  padding: 2px 0;
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  gap: 8px;
  p {
    color: ${colors.black};
  }
`;
