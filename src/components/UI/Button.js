import styled from "@emotion/styled";
import { colors } from "../../ui";
const sizes = {
  tiny: {
    // width: "100px",
    // height: "30px",
    padding:"5px 10px",
    size: "12px",
  },
  small: {
    // width: "144px",
    // height: "48px",
    padding:"6px 15px",
    size: "16px",
  },
  medium: {
    // width: "387px",
    // height: "48px",
    size: "18px",
    padding:"10px 20px",
  },
  large: {
    // width: "374px",
    // height: "73px",
    size: "24px",
    padding:"12px 25px",
  },
};

export default function Button({
  color = colors.white,
  bg = colors.orange,
  size = "medium",
  outline,
  type,
  children,
  onClick,
  disabled = false,
  css
}) {
  if (!sizes[size]) size = "medium";
  return (
    <StyledButton
      outline={outline}
      size={size}
      bg={bg}
      color={color}
      type={type}
      disabled={disabled}
      onClick = {onClick}
      disabled={disabled}
      css={css}
    >
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  outline: none;
  padding:${(props) => sizes[props.size].padding};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: 1px solid transparent;
  border-radius: 10px;
  color: ${(props) => props.color};
  font-family: Raleway;
  font-style: normal;
  font-weight: 800;
  font-size: ${(props) => sizes[props.size].size};
  line-height: 28px;
  background-color: ${(props) => props.bg};
  cursor: pointer;
  ${props => props.css}
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

  &:disabled {
    border-color: rgba(94, 129, 244, 0.5);
    color: rgba(94, 129, 244, 0.5);
  }
`;
