import { useDispatch } from "react-redux";
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

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchLogin({ email, password }));
    console.log("button submit");
  };

  useEffect(() => {
    console.log(email);
    console.log(password);
    /*console.log(data.token);*/
  }, [email, password]);

  return (
    <FormLogin onSubmit={handleSubmit}>
      <ContainerInput>
        <ContentXS>Email Address</ContentXS>
        <InputField
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </ContainerInput>

      <ContainerInput>
        <ContentXS>Password</ContentXS>
        <InputField
          type="password"
          placeholder="******"
          onChange={(e) => setPassword(e.target.value)}
        />
      </ContainerInput>

      <Button
        size="medium"
        outline={false}
        bg={colors.blue_ligth}
        color={colors.white}
        type="submit"
      >
        Login
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
