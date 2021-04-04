import styled from "@emotion/styled";

export default function CardContainer({ type, children, css, onClick }) {
  return (
    <StyledDiv css={css} type={type} onClick={onClick}>
      {children}
    </StyledDiv>
  );
}

const types = {
  specialties: { width: "340px", height: "390px" },
  schedule: { width: "100%", height: "400px" },
  comment: { width: "400px", height: "300px" },
  history: { width: "350px", height: "170px" },
};

const StyledDiv = styled.div`
  height: ${(props) => (props.type ? types[props.type].height : "373px")};
  width: ${(props) => (props.type ? types[props.type].width : "303px")};
  background-color: #ffffff;
  border-radius: 20px;
  padding: 14px;
  ${(props) => props.css}

  :hover {
    box-shadow: 8px 17px 14px rgba(0, 0, 0, 0.04);
    transition: 300ms;
  }
  @media (max-width: 375px) {
    height: 100%;
    width: 100%;
  }
`;
