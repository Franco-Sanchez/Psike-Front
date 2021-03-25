import styled from "@emotion/styled";

export default function CardContainer({ type, children }) {
  return <StyledDiv type={type}>{children}</StyledDiv>;
}

const types = {
  specialties: { width: "340px", height: "390px" },
  schedule: { width: "1040px", height: "390px" },
  coment: { width: "400px", height: "300px" },
};

const StyledDiv = styled.div`
  height: ${(props) => (props.type ? types[props.type].height : "373px")};
  width: ${(props) => (props.type ? types[props.type].width : "303px")};
  background: #ffffff;
  border-radius: 20px;
  border-radius: 20px;
  padding: 14px;
  border: 1px solid red;
  :hover {
    box-shadow: 8px 17px 14px rgba(0, 0, 0, 0.25);
    transition: 300ms;
  }
  @media (max-width: 375px) {
    height: 100%;
    width: 100%;
  }
`;
