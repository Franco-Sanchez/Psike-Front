import styled from "@emotion/styled";

export default function CardContainer({ type, children }) {
  return <StyledDiv type={type}>{children}</StyledDiv>;
}

const types = {
  specialties: { width: "340px", height: "390px" },
  schedule: { width: "100%", height: "auto" },
  coment: { width: "400px", height: "300px" },
};

const StyledDiv = styled.div`
  height: ${(props) => (props.type ? types[props.type].height : "373px")};
  width: ${(props) => (props.type ? types[props.type].width : "303px")};
  background-color: #ffffff;
  border-radius: 20px;
  padding: 14px;
  :hover {
    box-shadow: 8px 17px 14px rgba(0, 0, 0, 0.25);
    transition: 300ms;
  }
`;
