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
import Icon from "./UI/Icon";
import OptionContainer from "./Containers/SelectContainer";
import SelectItem from "./UI/Select";
import { colors } from "../ui";

export default function Documentation() {
  return (
    <div>
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
    </div>
  );
}
