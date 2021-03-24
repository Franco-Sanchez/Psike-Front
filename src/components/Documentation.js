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
import FormField from "./Containers/FormField";
import { TagItem, TagItemFill } from "./UI/Tag";
import InputField from "./UI/Input";
import { RiMailLine } from "react-icons/ri";

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
        <RiMailLine />
        <InputField type="text" placeholder="coloca aqui tu nombre" />
      </FormField>
      {/* Form Field- Input without icon */}
      <FormField>
        <ContentXSB>Contraseña</ContentXSB>
        <InputField type="password" placeholder="****"></InputField>
      </FormField>
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
