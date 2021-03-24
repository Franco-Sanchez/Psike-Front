import styled from "@emotion/styled";

export default function FormField({ children }) {
  return <StyledDiv>{children}</StyledDiv>;
}

const StyledDiv = styled.div`
  width: 387px;
  padding: 2px 0;
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  gap: 8px;
  p {
    color: #455064;
  }
  input {
    height: 48px;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;
    color: #455064;
    padding: 13px 20px;
    border-radius: 10px;
    border: none;

    &::placeholder {
      color: #d0caca;
    }
    &:focus {
      outline: none;
      border: 1px solid #ffa494;
    }
  }
`;
