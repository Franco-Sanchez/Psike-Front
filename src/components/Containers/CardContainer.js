import styled from "@emotion/styled";

export default function CardContainer({ children }) {
  return <StyledDiv>{children}</StyledDiv>;
}

const StyledDiv = styled.div`
  background: #ffffff;
  border-radius: 20px;
  height: 373px;
  width: 303px;
  border-radius: 20px;
  padding: 14px;
  border: 1px solid red;
`;
