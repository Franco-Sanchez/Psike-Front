import styled from "@emotion/styled";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ContentXS } from "../components/text/Content";
import { Heading3 } from "../components/text/Heading";
import Tabsession from "../components/UI/Tabsession";
import SignError from "../features/signup/SignError";
import SignForm from "../features/signup/SignForm";
import { colors } from "../ui";

export default function SignUp() {
  return (
    <ContainerSign>
      <SignLink>
        <Link to="/login">
          <Tabsession>Login</Tabsession>
        </Link>
        <Link to="/signup">
          <Tabsession color={colors.orange}>Sign-up</Tabsession>
        </Link>
      </SignLink>
      <Heading3>Sign up for an account</Heading3>
      <SignError />
      <SignForm />
      <Link to="/login">
        <ContentXS>ya tienes una cuenta ? Login</ContentXS>
      </Link>
    </ContainerSign>
  );
}

const ContainerSign = styled.div`
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
      height: 100%;
      padding-top:10px;
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

const SignLink = styled.div`
  display: flex;
  width: 387px;
  height: auto;
  justify-content: space-between;
`;
