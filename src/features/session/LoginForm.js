import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { fetchLogin } from "./sessionSlice";
import { ContentXS } from "../../components/text/Content";
import InputField from "../../components/UI/Input";
import styled from "@emotion/styled";
import Button from "../../components/UI/Button";
import { colors } from "../../ui";

export default function LoginForm() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [validPassword, setValidPassword] = useState(false);
  const status = useSelector((state) => state.session.status);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validLogin(email, password) === true) {
      dispatch(fetchLogin({ email, password }));
    }
  };

  function validLogin(email, password) {
    function validEmail(email) {
      if (/\S+@gmail\.com/i.test(email)) {
        return true;
      } else {
        setValidEmail(true);
        setTimeout(() => setValidEmail(false), 1000);
      }
    }

    function validPassword(password) {
      return password.length >= 6
        ? true
        : (setValidPassword(true),
          setTimeout(() => setValidPassword(false), 1000));
    }
    return validEmail(email), validPassword(password);
  }

  return (
    <FormLogin onSubmit={handleSubmit}>
      <ContainerInput>
        <ContentXS>Correo Electronico</ContentXS>
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
        disabled={status === "login"}
      >
        {status === "loading" ? "Ingresando..." : "Iniciar Session"}
      </Button>
    </FormLogin>
  );
}

const FormLogin = styled.form`
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
const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 10px;
`;

const SpanError = styled.span`
  color: red;
`;
export { SpanError };
