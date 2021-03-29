import styled from "@emotion/styled";
import React from "react";
import OptionContainer from "../components/Containers/SelectContainer";
import Icon from "../components/UI/Icon";
import MultiSelect from "../components/UI/MultiSelect";
import SelectItem from "../components/UI/Select";
import { colors } from "../ui";
import CardPsychology from "../components/UI/CardPsychology";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPsychologists,
  filterPsychologists,
  setFilters,
} from "../features/psychologists/PsychologistsSlice";
import FilterByCategories from "../components/core/Psychologits/FilterCategories";
import FilterRanking from "../components/core/Psychologits/FilterRanking";
import FilterPrice from "../components/core/Psychologits/FilterPrice";
import Button from "../components/UI/Button";

export default function Psychologists() {
  const dispatch = useDispatch();
  const psychologists = useSelector((state) => state.psychologists.items);
  const filterCategories = useSelector(
    (state) => state.psychologists.filterCategories
  );
  const filterItems = useSelector((state) => state.psychologists.filterItems);
  const filterRanking = useSelector(
    (state) => state.psychologists.filterRanking
  );
  const filterPrice = useSelector((state) => state.psychologists.filterPrice);
  const status = useSelector((state) => state.psychologists.status);

  if (status === "idle") {
    dispatch(fetchPsychologists());
  }

  let submitPsychologists = () => {
    let filterCatSubmit =
      filterCategories.length > 0 ? filterByCategory() : psychologists;
    let filterByRanking = orderArray(filterCatSubmit, filterRanking);
    dispatch(setFilters({ name: "filterItems", value: filterByRanking }));
  };

  let orderArray = (array, type) => {
    if (type === "asc") {
      return [...array].sort(function (a, b) {
        return a.ranking_total - b.ranking_total;
      });
    }
    if (type === "desc") {
      return [...array].sort(function (a, b) {
        return b.ranking_total - a.ranking_total;
      });
    }
    return array;
  };

  let filterByCategory = () => {
    let simpleCat = filterCategories.map((cat) => cat.value);
    return psychologists.filter((psy) => {
      let filterSpe = psy.specialties.filter((esp) =>
        simpleCat.includes(esp.name)
      );
      return filterSpe.length > 0;
    });
  };

  return (
    <>
      <StyledFilterSection>
        <FilterByCategories />
        {/* Filter Ranking and Price */}
        <FilterSelects>
          <FilterRanking />
          <FilterPrice />
        </FilterSelects>
        <Button bg={colors.orange} size="small" onClick={submitPsychologists}>
          Filtrar
        </Button>
      </StyledFilterSection>
      <StyledPsychologists>
        {filterItems.map((item) => (
          <CardPsychology
            key={item.id}
            name={item.name + " " + item.lastname}
            bio={item.biography}
            price={item.price}
            coments={item.comments_total}
            ranking={item.ranking_total}
            specialties={item.specialties}
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
