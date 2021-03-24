import styled from "@emotion/styled";

export default function TagsContainer({ children }) {
  return <StyledDiv>{children}</StyledDiv>;
}

const StyledDiv = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;
