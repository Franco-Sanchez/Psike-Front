import styled from "@emotion/styled";
import React from "react";
import OptionContainer from "../components/Containers/SelectContainer";
import Icon from "../components/UI/Icon";
import MultiSelect from "../components/UI/MultiSelect";
import SelectItem from "../components/UI/Select";
import { colors } from "../ui";
import CardPsychology from "../components/UI/CardPsychology";
import { useDispatch, useSelector } from "react-redux";
import { fetchPsychologists } from "../features/psychologists/PsychologistsSlice";

export default function Psychologists() {
  const dispatch = useDispatch();
  const psychologists = useSelector((state) => state.psychologists.items);
  const status = useSelector((state) => state.psychologists.status);

  if (status === "idle") {
    console.log("raa");
    dispatch(fetchPsychologists());
  }

  return (
    <>
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
      </StyledFilterSection>
      <StyledPsychologists>
        {psychologists.map((item) => (
          <CardPsychology
            key={Math.random()}
            name={item.name + " " + item.lastname}
            bio={item.biography}
            price={item.price}
            coments={item.comments_total}
            ranking={item.ranking_total}
          />
        ))}
      </StyledPsychologists>
    </>
  );
}

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
  margin: 20px 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: 10px;
  justify-content: center;
  align-items: center;
`;
