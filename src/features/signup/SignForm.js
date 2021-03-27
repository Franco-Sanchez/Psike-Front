import { useDispatch } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Button from "../../components/UI/Button";
import { colors } from "../../ui";
import styled from "@emotion/styled";
import { fetchSign } from "./signSlice";
import { ContentXS } from "../../components/text/Content";
import InputField from "../../components/UI/Input";
import Icon from "../../components/UI/Icon";

export default function SignForm() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const viewLogin = () => {
    history.push("/login");
  };

  const handleSubmitSign = async (e) => {
    e.preventDefault();
    await dispatch(fetchSign({ name, lastname, email, password }));
    viewLogin();
  };

  //setForm({ ...form, [e.target.name]: e.target.value })

  return (
    <FormSign onSubmit={handleSubmitSign}>
      <SignText>
        <ContentXS>
          Coloca tus datos por favor, para poder generar una cuenta, tu
          psicologo ideal te espera!!!.
        </ContentXS>
      </SignText>
      <ContainerInput>
        <ContentXS>Name</ContentXS>
        <InputField
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
      </ContainerInput>

      <ContainerInput>
        <ContentXS>LastName</ContentXS>
        <InputField
          type="text"
          placeholder="LastName"
          onChange={(e) => setLastname(e.target.value)}
        />
      </ContainerInput>

      <ContainerInput>
        <ContentXS>Email Address</ContentXS>
        <ContainerEmail>
          <Icon type="email" size="18" fiil={colors.black} />
        </ContainerEmail>
        <InputField
          type="email"
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
        Sign up
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
