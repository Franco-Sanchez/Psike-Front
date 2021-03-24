import styled from "@emotion/styled";

export default function StadisticsContainer({ children }) {
  return <StyledDiv>{children}</StyledDiv>;
}

const StyledDiv = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`;
