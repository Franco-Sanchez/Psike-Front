import styled from "@emotion/styled";
import { colors } from "../../ui";
const sizes = {
  tiny: {
    width: "100px",
    height: "30px",
    size: "12px",
  },
  small: {
    width: "144px",
    height: "48px",
    size: "16px",
  },
  medium: {
    width: "387px",
    height: "48px",
    size: "18px",
  },
  large: {
    width: "374px",
    height: "73px",
    size: "24px",
  },
};

export default function Button({
  color = colors.white,
  bg = colors.orange,
  size = "medium",
  outline,
  type,
  children,
}) {
  if (!sizes[size]) size = "medium";
  return (
    <StyledButton
      outline={outline}
      size={size}
      bg={bg}
      color={color}
      type={type}
    >
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  outline: none;
  min-width: ${(props) => sizes[props.size].width};
  height: ${(props) => sizes[props.size].height};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: "1px solid transparent";
  border-radius: 10px;
  color: ${(props) => props.color};
  font-family: Raleway;
  font-style: normal;
  font-weight: 800;
  font-size: ${(props) => sizes[props.size].size};
  line-height: 28px;
  background-color: ${(props) => props.bg};
  cursor: pointer;
  ${(props) => props.outline 
    ? (`
     border:3px solid ${colors.blue_ligth};
     background:${colors.white2};
     color:${colors.blue_ligth}
    `)
    : "border:1px solid transparent"};
  
  &:hover {
    opacity: 0.8;
  }
`;
