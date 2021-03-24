import styled from "@emotion/styled";

export function TagItem({ children }) {
  return <StyledDiv>{children}</StyledDiv>;
}
export function TagItemFill({ children }) {
  return <StyledDivFill>{children}</StyledDivFill>;
}
const StyledDiv = styled.div`
  width: 100px;
  background: #ffffff;
  border: 1px solid #ffa85f;
  border-radius: 10px;
  padding: 5px 8px;
  display: flex;
  justify-content: center;
  
  p {
    color: #ffa85f;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const StyledDivFill = styled.div`
  width: 150px;
  height: 45px;
  background: #dfeaff;
  border-radius: 10px;
  padding: 12px 18px;
  display: flex;
  justify-content: center;
  p {
    color: #2b4170;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
