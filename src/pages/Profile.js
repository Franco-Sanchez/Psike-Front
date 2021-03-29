import React, { useMemo, useRef, useState } from "react";
import styled from "@emotion/styled";
import Image from "../components/UI/Image";
import InputField from "../components/UI/Input";
import { ContentXSB } from "../components/text/Content";
import FormField from "../components/Containers/FormField";
import countryList from "react-select-country-list";
import { SelectCountry } from "../components/UI/Select";
import OptionContainer from "../components/Containers/SelectContainer";
import Icon from "../components/UI/Icon";
import { colors } from "../ui";
import Button from "../components/UI/Button";

export default function Profile() {
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);
  const changeHandler = (value) => {
    setValue(value);
  };
  const fileInputRef = useRef();

  return (
    <>
      <StyledPersonalInfoSection>
        <form>
          <div className="profile-photo">
            <Image
              url="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*"
              size="square"
            />
            <button
              className="button-image"
              onClick={(event) => {
                event.preventDefault();
                fileInputRef.current.click();
              }}
            >
              <Icon type="camera" size={50} fill={colors.black} />
            </button>
            <input
              type="file"
              style={{ display: "none" }}
              ref={fileInputRef}
            ></input>
          </div>
          <div className="profile-inputs">
            <FormField>
              <ContentXSB>Nombres:</ContentXSB>
              <InputField type="text" placeholder="Grecia Azucena"></InputField>
            </FormField>

            <FormField>
              <ContentXSB>Apellidos:</ContentXSB>
              <InputField type="text" placeholder="Delgado Muñoz"></InputField>
            </FormField>

            <FormField>
              <ContentXSB>Documento de Identidad:</ContentXSB>
              <InputField type="text" placeholder="75915178"></InputField>
            </FormField>

            <FormField>
              <ContentXSB>Fecha de Nacimiento:</ContentXSB>
              <InputField type="date"></InputField>
            </FormField>

            <FormField>
              <ContentXSB>Correo:</ContentXSB>
              <InputField
                type="text"
                placeholder="ejemplo@mail.com"
              ></InputField>
            </FormField>

            <FormField>
              <ContentXSB>Nacionalidad:</ContentXSB>

              <OptionContainer type="profile">
                <Icon type="arrowDrop" size="25" fill={`${colors.orange}`} />
                <SelectCountry name={"nacionalidad"}>
                  {options.map((option) => (
                    <option>{option.label}</option>
                  ))}
                </SelectCountry>
              </OptionContainer>
            </FormField>
          </div>
        </form>
      </StyledPersonalInfoSection>
      <Button size="medium" bg={colors.blue_ligth}>
        Guardar
      </Button>
    </>
  );
}

const StyledPersonalInfoSection = styled.div`
  form {
    border: 1px solid red;
    width: fit-content;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: start;
  }
  .profile-photo {
    width: 30%;
    position: relative;
  }
  .profile-inputs {
    width: 70%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    border: 1px solid blue;
  }
  .button-image {
    background-color: rgba(255, 255, 255, 0.7);
    padding: 20px;
    border-radius: 50px;
    border: none;
    position: absolute;
    top: 140px;
    right: 130px;
  }
`;
