import styled from "@emotion/styled";

export default function CardContainer({ size, children }) {
  return <StyledDiv size={size}>{children}</StyledDiv>;
}

const StyledDiv = styled.div`
  height: ${(props) =>
    props.size === "specialties" || "schedule" || "coment"
      ? sizes[props.size].width
      : "373px"};
  width: ${(props) =>
    props.size === "specialties" || "schedule" || "coment"
      ? sizes[props.size].height
      : "303px"};
  background: #ffffff;
  border-radius: 20px;
  border-radius: 20px;
  padding: 14px;

  :hover {
    box-shadow: 8px 17px 14px rgba(0, 0, 0, 0.25);
    transition: 300ms;
  }
`;

const sizes = {
  specialties: { width: "340px", height: "390px" },
  schedule: { width: "1040px", height: "390px" },
  coment: { width: "400px", height: "300px" },
};
