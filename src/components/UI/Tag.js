import styled from "@emotion/styled";
import { colors } from "../../ui";

export function TagItem({ children }) {
  return <StyledDiv>{children}</StyledDiv>;
}
export function TagItemFill({ children }) {
  return <StyledDivFill>{children}</StyledDivFill>;
}

const StyledDivFill = styled.div`
  width: max-content;
  height: 45px;
  background: ${colors.sky_blue};
  border-radius: 10px;
  padding: 12px 18px;
  display: flex;
  justify-content: center;
  p {
    color: ${colors.blue};
  }
`;
const StyledDiv = styled.div`
  width: max-content;
  background: #ffffff;
  border: 1px solid ${colors.orange};
  border-radius: 10px;
  padding: 5px 8px;
  display: flex;
  justify-content: center;

  p {
    color: ${colors.orange};
  }
`;
