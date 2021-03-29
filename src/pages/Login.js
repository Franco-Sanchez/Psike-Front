import styled from "@emotion/styled";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Heading3 } from "../components/text/Heading";
import Tabsession from "../components/UI/Tabsession";
import LoginForm from "../features/session/LoginForm";
import SessionError from "../features/session/SessionError";
import { colors } from "../ui";

export default function Login() {
  const history = useHistory();
  const token = useSelector((state) => state.session.token);

  useEffect(() => {
    if (token) {
      sessionStorage.setItem("token", token);
      history.push("/psychologists");
    }
  }, [token]);

  return (
    <ContainerLogin>
      <LoginLink>
        <Link to="/login">
          <Tabsession color={colors.orange}>Login</Tabsession>
        </Link>
        <Link to="/signup">
          <Tabsession>Sign-up</Tabsession>
        </Link>
      </LoginLink>
      <Heading3>Log in to your account</Heading3>
      <SessionError />
      <LoginForm />
    </ContainerLogin>
  );
}

const ContainerLogin = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  gap: 10px;
  & h3 {
    color: ${colors.blue};
  }
  & a {
    text-decoration: none;
  }
  @media (max-width: 375px) {
    & {
      width: 100vw;
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    & h3 {
      text-align: center;
    }
  }
`;
const LoginLink = styled.div`
  display: flex;
  width: 387px;
  height: auto;
  justify-content: space-between;
`;
