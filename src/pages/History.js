import React from "react";
import CardContainer from "../components/Containers/CardContainer";
import { Heading3 } from "../components/text/Heading";
import CardHistory from "../components/UI/CardHistory";

export default function HistoryPage() {
  return (
    <>
      <Heading3>Tu historial de citas es: </Heading3>
      <CardHistory />
    </>
  );
}
