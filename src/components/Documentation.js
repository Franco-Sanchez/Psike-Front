import React from "react";
import {
  Content,
  ContentXL,
  ContentS,
  ContentSB,
  ContentSBB,
  ContentL,
  ContentM,
  ContentMB,
  ContentXS,
  ContentXSB,
  ContentXXS,
  ContentXXSB,
} from "./text/Content";
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
} from "./text/Heading";

import TabPrice from "./UI/TabPrice";
import FormField from "./Containers/FormField";
import { TagItem, TagItemFill } from "./UI/Tag";
import InputField from "./UI/Input";
import { RiMailLine } from "react-icons/ri";
import Avatar from "./UI/Avatar";
import Image from "./UI/Image";
import Icon from "./UI/Icon";
import OptionContainer from "./Containers/SelectContainer";
import SelectItem from "./UI/Select";
import { colors } from "../ui";
import MultiSelect from "./UI/MultiSelect";
import CardContainer from "./Containers/CardContainer";
import TagsContainer from "./Containers/TagsContainers";
import StadisticsContainer from "./Containers/CardStadisticsContainer";

export default function Documentation() {
  return (
    <div>
      <MultiSelect />
      {/* TITULOS */}
      <Heading1>Heading1</Heading1>
      <Heading2>Heading2</Heading2>
      <Heading3>Heading3</Heading3>
      <Heading4>Heading4</Heading4>
      <Heading5>Heading5</Heading5>
      <Heading6>Heading6</Heading6>
      <hr />
      {/* Contents */}
      <ContentXL>ContentExtraLarge</ContentXL>
      <ContentL>ContentLarge</ContentL>
      <ContentM>ContentMedium</ContentM>
      <ContentMB>ContentMediumBold</ContentMB>
      <Content>Content</Content>
      <ContentS>ContentSmall</ContentS>
      <ContentSB>ContentSmallBold</ContentSB>
      <ContentSBB>ContentSmallBold</ContentSBB>
      <ContentXS>ContentExtraSmall</ContentXS>
      <ContentXSB>ContentExtraSmallBold</ContentXSB>
      <ContentXXS>ContentExtraExtraSmall</ContentXXS>
      <ContentXXSB>ContentExtraExtraSmallBold</ContentXXSB>
      <hr />
      {/* Form Field- Input with icon */}
      <FormField>
        <ContentXSB>Email</ContentXSB>
        <Icon type="email" />
        <InputField type="text" placeholder="coloca aqui tu nombre" />
      </FormField>
      {/* Form Field- Input without icon */}
      <FormField>
        <ContentXSB>Contraseña</ContentXSB>
        <InputField type="password" placeholder="****"></InputField>
      </FormField>
      {/* Select Component */}
      <OptionContainer>
        <Icon type="arrowDrop" size="25" fill={`${colors.orange}`} />
        <SelectItem name={"ranking"}>
          <option value="">Ranking</option>
          <option value="asc">Asendente</option>
          <option value="desc">Desendente</option>
        </SelectItem>
      </OptionContainer>

      <OptionContainer>
        <Icon type="lizer" size="25" fill={`${colors.orange}`} />
        <SelectItem name={"ranking"}>
          <option value="">Price</option>
          <option value="asc">Asendente</option>
          <option value="desc">Desendente</option>
        </SelectItem>
      </OptionContainer>

      {/* Tabs Price */}
      <TabPrice price={120} />
      <TabPrice price={125} size="small" />
      {/* Tags */}
      <TagItem>
        <ContentXXSB>Autoestima</ContentXXSB>
      </TagItem>
      <TagItemFill>
        <ContentM>Terapia de pareja</ContentM>
      </TagItemFill>
      <Avatar url="https://cnnespanol.cnn.com/wp-content/uploads/2019/12/s_64a163f16ecbb099e52f2f8271f73cbbfcfc9034be4d646f7375e4db1ca6f3d7_1573501883482_ap_19001106049831-1.jpg?quality=100&strip=info&w=320&h=240&crop=1" />
      <Avatar url="https://i.pinimg.com/originals/67/54/78/675478c7dcc17f90ffa729387685615a.jpg" />
      <Image
        size="small"
        url="https://i.pinimg.com/originals/67/54/78/675478c7dcc17f90ffa729387685615a.jpg"
      />
      <Image
        size="medium"
        url="https://i.pinimg.com/originals/67/54/78/675478c7dcc17f90ffa729387685615a.jpg"
      />
      <Image
        size="large"
        url="https://i.pinimg.com/originals/67/54/78/675478c7dcc17f90ffa729387685615a.jpg"
      />
      {/* Multi Select */}
      {/* Phycologist small card  */}
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
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y
            archivos de texto Lorem Ipsum es simplemente el texto de relleno de
            las imprentas y archivos de texto Lorem Ipsum es simplemente el
            texto de relleno de las imprentas y archivos de texto Lorem Ipsum es
            simplemente el texto de relleno de las imprentas y archivos de texto
          </ContentXS>
        </div>

        <div style={{
          display:"flex",
          justifyContent: "flex-end",
        }}>
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
    </div>
  );
}
