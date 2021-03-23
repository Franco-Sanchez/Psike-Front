import React from "react";
import { Content, ContentLarge, ContentSmall } from "./text/Content";
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
} from "./text/Heading";

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
      <ContentLarge>ContentLarge</ContentLarge>
      <Content>Content</Content>
      <ContentSmall>ContentSmall</ContentSmall>
    </div>
  );
}
