import styled from "@emotion/styled";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { ContentXS } from "../components/text/Content";
import { Heading3 } from "../components/text/Heading";
import Tabsession from "../components/UI/Tabsession";
import SingError from "../features/signup/SignError";
import SignForm from "../features/signup/SignForm";
import { cleanError } from "../features/signup/signSlice";
import { colors } from "../ui";

export default function SignUp() {
  const token = useSelector((state) => state.signup.token);
  const history = useHistory();
  const error = useSelector((state) => state.signup.errors);
  const dispatch = useDispatch();
  if(error){
    setTimeout(()=>{
      dispatch(cleanError())
    },1000);
  }

    if (token) {
      sessionStorage.setItem("token", token);
      history.push("/dashboard");
    }

  return (
    <ContainerSign>
      <SignLink>
        <Link to="/login">
          <Tabsession>Iniciar Sesion</Tabsession>
        </Link>
        <Link to="/signup">
          <Tabsession color={colors.orange}>Registrate</Tabsession>
        </Link>
      </SignLink>
      <Heading3>Registrate</Heading3>
      {error && 
      <SingError/>}
      <SignForm />
      <Link to="/login">
        <ContentXS>ya tienes una cuenta ? Ingresar</ContentXS>
      </Link>
    </ContainerSign>
  );
}

const ContainerSign = styled.div`
  display: flex;
  flex-direction: column;
  //width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  gap: 10px;
  & h3 {
    color: ${colors.blue};
    text-align:center;
  }
  & a {
    text-decoration: none;
  }
  @media (max-width: 375px) {
    & {
      width: 100%;
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
