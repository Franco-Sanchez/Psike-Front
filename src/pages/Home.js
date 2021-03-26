import styled from "@emotion/styled";
import React from "react";
import Header from "../components/Containers/Header";
import LandingContent from "../components/Containers/LandingContent";
import { ContentMB, ContentS } from "../components/text/Content";
import { Heading1 } from "../components/text/Heading";
import Button from "../components/UI/Button";
import Icon from "../components/UI/Icon";
import Image from "../components/UI/Image";
import { colors } from "../ui";

export default function Home() {
  return (
    <StyledHome>
      <Header />
      <LandingContent />
    </StyledHome>
  );
}

const StyledHome = styled.div``;
