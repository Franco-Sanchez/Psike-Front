import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { colors } from "../../ui";
import { ContentXS, ContentXSB, ContentXXSB } from "../text/Content";
import { Heading6 } from "../text/Heading";
import Icon from "./Icon";
import Imagen from "./Image";
import TabPrice from "./TabPrice";
import { TagItem } from "./Tag";

export default function CardPsychology() {
  return (
    <StyledCardPsychology>
      <Imagen
        url="https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg"
        size="small"
      >
        <TabPrice price={125} size="small" />
      </Imagen>
      <Heading6>Lic. Theresa Mullins</Heading6>
      <ContentXXSB>Psicologa Clínica</ContentXXSB>
      <div className="tagsContainer">
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
      </div>
      <div className="bioContainer">
        <ContentXS>
          Lorem Ipsum es simplemente el texto de relleno de las imprentas y
          archivos de texto Lorem Ipsum es simplemente el texto de relleno de
          las imprentas y archivos de texto Lorem Ipsum es simplemente el texto
          de relleno de las imprentas y archivos de texto Lorem Ipsum es
          simplemente el texto de relleno de las imprentas y archivos de texto
        </ContentXS>
      </div>

      <div className="stadisticsContainer" style={{}}>
        <div className="stadisticsItem">
          <Icon type="chat" fill={`${colors.pink1}`} size="25" />
          <ContentXSB>10</ContentXSB>
        </div>

        <div className="stadisticsItem">
          <Icon type="start" fill={`${colors.orange}`} size="25" />
          <ContentXSB>4.5</ContentXSB>
        </div>
      </div>
    </StyledCardPsychology>
  );
}
const StyledCardPsychology = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  & .tagsContainer {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
  }
  & .bioContainer {
    height: 50px;
    overflow: hidden;
  }
  & .stadisticsContainer {
    display: flex;
    justify-content: flex-end;
    gap: 8px;
  }
  & .stadisticsItem {
    display: flex;
    gap: 5px;
    align-items: center;
  }
`;
