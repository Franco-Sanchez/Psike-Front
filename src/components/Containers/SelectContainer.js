import styled from "@emotion/styled";

export default function OptionContainer({ children }) {
  return <StyledDiv>{children}</StyledDiv>;
}
const StyledDiv = styled.div`
  position: relative;
  svg {
    position: absolute;
    top: 14px;
    left: 115px;
  }
`;
