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
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import {
  fetchShowProfile,
  fetchUpdateProfile,
} from "../features/profile/profileSlice";

export default function Profile() {
  const [image, setImage] = useState();
  const [preview, setPreview] = useState();
  const options = useMemo(() => countryList().getData(), []);
  const tokenLogin = useSelector((state) => state.session.token);
  const tokenSignup = useSelector((state) => state.signup.token);
  const fileInputRef = useRef();
  const dispatch = useDispatch();
  const infoUser = useSelector((state) => state.profile.profile);
  const status = useSelector((state) => state.profile.status);
  const [form, setForm] = useState({
    name: infoUser.name,
    lastname: infoUser.lastname,
    identity_document: infoUser.identity_document,
    nationality: infoUser.nationality,
    birthdate: infoUser.birthdate,
    email: infoUser.email,
    avatar: null,
  });

  console.log(infoUser);
  if (status === "idle") {
    dispatch(fetchShowProfile(tokenLogin));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (let key in form) {
      formData.append(key, form[key]);
    }
    dispatch(fetchUpdateProfile({ formData, tokenLogin }));
  };

  const {
    name,
    lastname,
    identity_document,
    nationality,
    birthdate,
    email,
  } = form;

  console.log("form",form);

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

  if (!tokenLogin || !tokenSignup) return <Redirect to="/login" />;

  return (
    <StyledContiner>
      <div>
        <form id="edit-profile-form" onSubmit={handleSubmit}>
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
              id="profile-avatar"
              name="avatar"
              type="file"
              style={{ display: "none" }}
              ref={fileInputRef}
              accept="iamge/*"
              onChange={(e) => {
                setForm({ ...form, [e.target.name]: e.target.files[0] });
                const file = e.target.files[0];
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
              <InputField
                name="name"
                value={name}
                type="text"
                placeholder="Grecia Azucena"
                onChange={(e) =>
                  setForm({ ...form, [e.target.name]: e.target.value })
                }
              ></InputField>
            </FormField>

            <FormField>
              <ContentXSB>Apellidos:</ContentXSB>
              <InputField
                name="lastname"
                value={lastname}
                type="text"
                placeholder="Delgado Muñoz"
                onChange={(e) =>
                  setForm({ ...form, [e.target.name]: e.target.value })
                }
              ></InputField>
            </FormField>

            <FormField>
              <ContentXSB>Documento de Identidad:</ContentXSB>
              <InputField
                name="identity_document"
                value={identity_document}
                type="text"
                placeholder="75915178"
                onChange={(e) =>
                  setForm({
                    ...form,
                    [e.target.name]: e.target.value,
                  })
                }
              ></InputField>
            </FormField>

            <FormField>
              <ContentXSB>Fecha de Nacimiento:</ContentXSB>
              <InputField
                name="birthdate"
                value={birthdate}
                type="date"
                onChange={(e) =>
                  setForm({
                    ...form,
                    [e.target.name]: e.target.value,
                  })
                }
              ></InputField>
            </FormField>

            <FormField>
              <ContentXSB>Correo:</ContentXSB>
              <InputField
                name="email"
                value={email}
                type="text"
                placeholder="ejemplo@mail.com"
                onChange={(e) =>
                  setForm({
                    ...form,
                    [e.target.name]: e.target.value,
                  })
                }
              ></InputField>
            </FormField>

            <FormField>
              <ContentXSB>Nacionalidad:</ContentXSB>

              <OptionContainer type="profile">
                <Icon type="arrowDrop" size="25" fill={`${colors.orange}`} />
                <SelectCountry
                  name="nationality"
                  value={nationality}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      [e.target.name]: e.target.value,
                    })
                  }
                >
                  {options.map((option) => (
                    <option>{option.label}</option>
                  ))}
                </SelectCountry>
              </OptionContainer>
            </FormField>
          </div>
        </form>
      </div>
      <div className="save-button">
        <Button form="edit-profile-form" type="submit" bg={colors.blue_ligth}>
          Guardar
        </Button>
      </div>
    </StyledContiner>
  );
}

const StyledContiner = styled.div`
  form {
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
  .save-button {
    width: 387px;
    margin-inline-start: auto;
    button {
      width: 100%;
    }
  }
`;
