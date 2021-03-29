import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "../../components/UI/Button";
import { colors } from "../../ui";
import styled from "@emotion/styled";
import { fetchSign } from "./signSlice";
import { ContentXS } from "../../components/text/Content";
import InputField from "../../components/UI/Input";
import Icon from "../../components/UI/Icon";
import { SpanError } from "../session/LoginForm";

export default function SignForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const status = useSelector((state) => state.signup.status);
  const [validName, setValidName] = useState(false);
  const [validLastName, setValidLast] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [validPassword, setValidPassword] = useState(false);

  // const token = useSelector((state) => state.signup.token);

  // useEffect(() => {
  //   if (token) {
  //     sessionStorage.setItem("token", token);
  //     history.push("/dashboard");
  //   }
  // }, [token]);

  // if(status=="loading"){
  //   setTimeout(()=>{
  //     dispatch(cleanError())
  //   },1000);
  // }

  const handleSubmitSign = async (e) => {
    e.preventDefault();
    if (validSign(name, lastname, email, password) === true) {
      await dispatch(fetchSign({ name, lastname, email, password }));
    }
  };

  const validSign = (name, lastname, email, password) => {
    function validName(name) {
      return !name.length == 0
        ? true
        : (setValidName(true), setTimeout(setValidName, 2000));
    }
    function validLastName(lastname) {
      return !lastname.length == 0
        ? true
        : (setValidLast(true), setTimeout(setValidLast, 2000));
    }
    function validEmail(email) {
      return email.match(/\S+@\S+\.\S+/i) || !email.length == 0
        ? true
        : (setValidEmail(true), setTimeout(setValidEmail, 1000));
    }
    function validPassword(password) {
      return password.length >= 6
        ? true
        : (setValidPassword(true), setTimeout(setValidPassword, 1000));
    }
    return (
      validName(name),
      validLastName(lastname),
      validEmail(email),
      validPassword(password)
    );
  };

  return (
    <FormSign onSubmit={handleSubmitSign}>
      <SignText>
        <ContentXS>
          Coloca tus datos por favor, para poder generar una cuenta, tu
          psicologo ideal te espera!!!.
        </ContentXS>
      </SignText>
      <ContainerInput>
        <ContentXS>Nombre</ContentXS>
        <InputField
          type="text"
          placeholder="Nombre"
          onChange={(e) => setName(e.target.value)}
        />
        {validName && (
          <ContentXS>
            {" "}
            <SpanError>el campo no puede estar vacio</SpanError>{" "}
          </ContentXS>
        )}
      </ContainerInput>

      <ContainerInput>
        <ContentXS>Apellido</ContentXS>
        <InputField
          type="text"
          placeholder="Apellido"
          onChange={(e) => setLastname(e.target.value)}
        />
        {validLastName && (
          <ContentXS>
            <SpanError>el campo no puede estar vacio</SpanError>
          </ContentXS>
        )}
      </ContainerInput>

      <ContainerInput>
        <ContentXS>Correo Electronico</ContentXS>
        <ContainerEmail>
          <Icon type="email" size="18" fiil={colors.black} />
        </ContainerEmail>
        <InputField
          type="email"
          placeholder="Correo Electronico"
          onChange={(e) => setEmail(e.target.value)}
        />
        {validEmail && (
          <ContentXS>
            <SpanError>
              el campo no pude estar vacio y debe contener @gmail.com...
            </SpanError>
          </ContentXS>
        )}
      </ContainerInput>

      <ContainerInput>
        <ContentXS>Contraseña</ContentXS>
        <InputField
          type="password"
          placeholder="******"
          onChange={(e) => setPassword(e.target.value)}
        />
        {validPassword && (
          <ContentXS>
            <SpanError>el password tiene que ser mayor a 6 digitos</SpanError>
          </ContentXS>
        )}
      </ContainerInput>

      <Button
        size="medium"
        outline={false}
        bg={colors.blue_ligth}
        color={colors.white}
        type="submit"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Cargando..." : "Iniciar Session"};
      </Button>
    </FormSign>
  );
}

const FormSign = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 387px;
  height: auto;
  @media (max-width: 375px) {
    & {
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;
const ContainerEmail = styled.div`
  align-items: center;
  width: auto;
  height: auto;
  position: absolute;
  margin-top: 45px;
  margin-left: 10px;
`;

const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 10px;
`;
const SignText = styled.div`
  margin-bottom: 15px;
  color: ${colors.gray};
`;
