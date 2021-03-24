import styled from "@emotion/styled";

export function TagItem({ children }) {
  return <StyledDiv>{children}</StyledDiv>;
}
export function TagItemFill({ children }) {
  return <StyledDivFill>{children}</StyledDivFill>;
}

const StyledDivFill = styled.div`
  width: max-content;
  height: 45px;
  background: #dfeaff;
  border-radius: 10px;
  padding: 12px 18px;
  display: flex;
  justify-content: center;
  p {
    color: #2b4170;
  }
`;
const StyledDiv = styled.div`
  width: max-content;
  background: #ffffff;
  border: 1px solid #ffa85f;
  border-radius: 10px;
  padding: 5px 8px;
  display: flex;
  justify-content: center;

  p {
    color: #ffa85f;
  }
`;
