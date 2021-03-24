import styled from "@emotion/styled";
import React, { useState } from "react";
import Select, { components } from "react-select";
import { colors } from "../../ui";
import Icon from "./Icon";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];
// TODO: Recibir las options y el setSelectedOption que es el metodo on change
export default function MultiSelect() {
  const [selectedOption, setSelectedOption] = useState(null);
  const colourStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "white",
      fontFamily: "Raleway",
      border: "none",
      outline: "none",
      border: 0,
      boxShadow: "none",
      borderRadius: "20px",
      ":focus": {
        outline: "none",
      },
    }),

    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        fontFamily: "Raleway",
        cursor: "pointer",
        backgroundColor: isSelected
          ? data.color
          : isFocused
          ? colors.orange
          : null,
        color: isSelected ? data.color : isFocused ? "white" : null,
        fontWeight: isFocused && "600",
        ":active": {
          ...styles[":active"],
          backgroundColor:
            !isDisabled && (isSelected ? data.color : colors.orange),
        },
      };
    },
    multiValue: (styles, { data }) => {
      return {
        ...styles,
        backgroundColor: "white",
        borderRadius: "50px",
        border: `1px solid ${colors.gray_ligth}`,
      };
    },
    multiValueLabel: (styles, { data }) => ({
      ...styles,
      color: data.color,
    }),
    multiValueRemove: (styles, { data }) => ({
      ...styles,
      color: data.color,
      cursor: "pointer",
      ":hover": {
        backgroundColor: colors.orange,
        borderRadius: "50px",
        color: "white",
      },
    }),
  };

  const DropdownIndicator = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        <Icon type={"add"} size={20} fill={colors.orange} />
      </components.DropdownIndicator>
    );
  };
  return (
    <ContentSelect>
      <Select
        closeMenuOnSelect={false}
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
        isMulti
        components={{ DropdownIndicator }}
        placeholder="Selecciona tus especialidades"
        styles={colourStyles}
        noOptionsMessage={() => "No existe Especialidades!"}
      />
    </ContentSelect>
  );
}

const ContentSelect = styled.div`
  font-family: "Raleway";
  min-width: 300px;
`;
