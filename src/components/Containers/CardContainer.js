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
  display: flex;
  flex-direction: column;
  gap: 8px;
  :hover {
    box-shadow: 8px 17px 14px rgba(0, 0, 0, 0.25);
    transition: 300ms;
  }
`;
