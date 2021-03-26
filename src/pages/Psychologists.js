import styled from "@emotion/styled";
import React from "react";
import OptionContainer from "../components/Containers/SelectContainer";
import Button from "../components/UI/Button";
import Icon from "../components/UI/Icon";
import MultiSelect from "../components/UI/MultiSelect";
import SelectItem from "../components/UI/Select";
import { colors } from "../ui";
import CardPsychology from "../components/UI/CardPsychology";

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function Psychologists() {
  return (
    <StyledPage>
      <StyledFilterSection>
        <MultiSelect />

        <FilterSelects>
          <OptionContainer>
            <Icon type="arrowDrop" size="25" fill={colors.orange} />
            <SelectItem name={"ranking"}>
              <option value="">Ranking</option>
              <option value="asc">Asendente</option>
              <option value="desc">Desendente</option>
            </SelectItem>
          </OptionContainer>

          <OptionContainer>
            <Icon type="lizer" size="25" fill={colors.orange} />
            <SelectItem name={"ranking"}>
              <option value="">Price</option>
              <option value="asc">Asendente</option>
              <option value="desc">Desendente</option>
            </SelectItem>
          </OptionContainer>
        </FilterSelects>
        <Button size="small">Filtrar</Button>
      </StyledFilterSection>
      <StyledPsychologists>
        {array.map((a, i) => (
          <CardPsychology
            key={i}
            name={"Juanita"}
            bio={
              "Psicoterapeuta conductual contextual, con formación en Terapia Integral de Pareja (ICBT), Terapia de Activación Conductual para la Depresión (AC), Terapia Racional Emotivo Conductual (TREC) y Terapia Cognitivo Conductual (TCC)"
            }
            price={12.5}
            coments={12}
            ranking={4.5}
          />
        ))}
      </StyledPsychologists>
    </StyledPage>
  );
}

const StyledPage = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (max-width: 950px) {
    & {
      padding: 0 10px;
    }
  }
`;

const StyledFilterSection = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 10px;
  justify-content: center;
  @media (max-width: 788px) {
    & {
      grid-template-columns: 100%;
    }
  }
`;

const FilterSelects = styled.div`
  display: flex;
  gap: 10px;
`;

const StyledPsychologists = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
  grid-gap: 10px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  & > div {
    margin: 0 auto;
  }
`;
