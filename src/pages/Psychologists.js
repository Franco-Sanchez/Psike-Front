import styled from "@emotion/styled";
import React from "react";
import CardContainer from "../components/Containers/CardContainer";
import OptionContainer from "../components/Containers/SelectContainer";
import Button from "../components/UI/Button";
import Icon from "../components/UI/Icon";
import Image from "../components/UI/Image";
import MultiSelect from "../components/UI/MultiSelect";
import SelectItem from "../components/UI/Select";
import TabPrice from "../components/UI/TabPrice";
import { Heading6 } from "../components/text/Heading";
import { colors } from "../ui";
import { ContentXXSB, ContentXS, ContentXSB } from "../components/text/Content";
import TagsContainer from "../components/Containers/TagsContainers";
import { TagItem } from "../components/UI/Tag";
import StadisticsContainer from "../components/Containers/CardStadisticsContainer";

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function Psychologists() {
  return (
    <StyledPage>
      <StyledFilterSection>
        <MultiSelect />
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

        <Button size="small">Guardar</Button>
      </StyledFilterSection>
      <StyledPsychologists>
        {array.map((a) => (
          <CardContainer>
            <Image
              url="https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg"
              size="small"
            >
              <TabPrice price={125} size="small" />
            </Image>
            <Heading6>Lic. Theresa Mullins</Heading6>
            <ContentXXSB>Psicologa Clínica</ContentXXSB>
            <TagsContainer>
              <TagItem>
                <ContentXXSB>Autoestima</ContentXXSB>
              </TagItem>
              <TagItem>
                <ContentXXSB>Terapia de Parjea</ContentXXSB>
              </TagItem>
              <TagItem>
                <ContentXXSB>Ansiedad</ContentXXSB>
              </TagItem>
              <TagItem>
                <ContentXXSB>Manejo de Ira</ContentXXSB>
              </TagItem>
            </TagsContainer>
            <div
              style={{
                height: "50px",
                overflow: "hidden",
              }}
            >
              <ContentXS>
                Lorem Ipsum es simplemente el texto de relleno de las imprentas
                y archivos de texto Lorem Ipsum es simplemente el texto de
                relleno de las imprentas y archivos de texto Lorem Ipsum es
                simplemente el texto de relleno de las imprentas y archivos de
                texto Lorem Ipsum es simplemente el texto de relleno de las
                imprentas y archivos de texto
              </ContentXS>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <StadisticsContainer>
                <Icon type="chat" fill={`${colors.pink1}`} size="25" />
                <ContentXSB>10</ContentXSB>
              </StadisticsContainer>

              <StadisticsContainer>
                <Icon type="start" fill={`${colors.orange}`} size="25" />
                <ContentXSB>4.5</ContentXSB>
              </StadisticsContainer>
            </div>
          </CardContainer>
        ))}
      </StyledPsychologists>
    </StyledPage>
  );
}

const StyledPage = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  display:flex;
  flex-direction:column;
  gap:20px;
`;

const StyledFilterSection = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 10px;
  justify-content: center;
`;

const StyledPsychologists = styled.div`
  display: grid;

  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 10px;
`;
