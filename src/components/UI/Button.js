import styled from "@emotion/styled";
import colors from "../../ui";

export default function Button({ color, type, size, children }) {
  return (
    <StyledButton size={size} color={color} type={type}>
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  width: ${(props) =>
    props.size === "small-schedule" || "small" || "medium" || "large"
      ? sizes[props.size].width
      : "144px"};
  height: ${(props) =>
    props.size === "small-schedule" || "small" || "medium" || "large"
      ? sizes[props.size].height
      : "48px"};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: ${(props) =>
    props.size === "small-schedule" || "small" || "medium" || "large"
      ? sizes[props.size].border
      : "144px"};
  color: ${(props) =>
    props.size === "small-schedule" || "small" || "medium" || "large"
      ? sizes[props.size].color
      : "144px"};
  font-family: Raleway;
  font-style: normal;
  font-weight: 800;
  font-size: ${(props) =>
    props.size === "small-schedule" || "small" || "medium" || "large"
      ? sizes[props.size].size
      : "16px"};
  line-height: 28px;
  border-radius: 10px;
  background-color: ${(props) => props.color};
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const sizes = {
  "small-schedule": {
    width: "144px",
    height: "48px",
    size: "16px",
    border: "2px solid #5E81F4",
    color: `${colors.blue_ligth}`,
  },
  small: {
    width: "144px",
    height: "48px",
    size: "16px",
    border: "none",
    color: `${colors.white}`,
  },
  medium: {
    width: "387px",
    height: "48px",
    size: "18px",
    border: "none",
    color: `${colors.white}`,
  },
  large: {
    width: "374px",
    height: "73px",
    size: "24px",
    border: "none",
    color: `${colors.white}`,
  },
};
