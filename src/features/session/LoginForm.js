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
    if (validLogin(email, password)) {
      dispatch(fetchLogin({ email, password }));
    }
  };

  function validLogin(email, password) {
    function validEmail(email) {
      return email.match(/\S+@\S+\.\S+/i) || !email.length == 0
        ? false
        : setValidEmail(true);
    }
    function validPassword(password) {
      return password.length >= 8 ? false : setValidPassword(true);
    }
    return validEmail(email), validPassword(password);
  }

  return (
    <FormLogin onSubmit={handleSubmit}>
      <ContainerInput>
        <ContentXS>Email Address</ContentXS>
        <InputField
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        {validEmail && (
          <SpanError>
            el campo no pude estar vacio y debe contener @gmail.com...
          </SpanError>
        )}
      </ContainerInput>

      <ContainerInput>
        <ContentXS>Password</ContentXS>
        <InputField
          type="password"
          placeholder="********"
          onChange={(e) => setPassword(e.target.value)}
        />
        {validPassword && (
          <SpanError>el password tiene que ser mayor a 8 digitos</SpanError>
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
        {status === "loading" ? "loading..." : "Login"}
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
