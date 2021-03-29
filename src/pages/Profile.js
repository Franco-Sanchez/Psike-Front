import React, { useEffect, useMemo, useRef, useState } from "react";
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
  const [image, setImage] = useState();
  const [preview, setPreview] = useState();
  const options = useMemo(() => countryList().getData(), []);
  const changeHandler = (value) => {
    setValue(value);
  };
  const fileInputRef = useRef();

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(image);
    } else {
      setPreview(null);
    }
  }, [image]);

  return (
    <>
      <StyledPersonalInfoSection>
        <form>
          <div className="profile-photo">
            <Image
              url={
                preview
                  ? `${preview}`
                  : `https://pngimage.net/wp-content/uploads/2018/06/icono-usuario-png-5.png`
              }
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
              accept="iamge/*"
              onChange={(event) => {
                const file = event.target.files[0];
                if (file && file.type.substr(0, 5) == "image") {
                  setImage(file);
                } else {
                  setImage(null);
                }
              }}
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
