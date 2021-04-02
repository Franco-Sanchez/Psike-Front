import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CardContainer from "../components/Containers/CardContainer";
import { Heading3 } from "../components/text/Heading";
import CardHistory from "../components/UI/CardHistory";

export default function HistoryPage() {
  const tokenLogin = useSelector((state) => state.session.token);
  const tokenSignup = useSelector((state) => state.signup.token);
  const dispatch = useDispatch();

  if (tokenLogin || tokenSignup) {
    console.log("heyyyy");
  }

  return (
    <>
      <Heading3>Tu historial de citas es: </Heading3>
      <CardHistory />
    </>
  );
}
