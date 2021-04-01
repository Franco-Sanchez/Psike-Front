import { css } from "@emotion/react";
import React, { useState } from "react";
import { colors } from "../../ui";
import { Heading3, Heading4, Heading5, Heading6 } from "../text/Heading";
import Modal from "./Modal";

export default function PaymentModal() {
  const [isOpen, toggle] = useState(false);

  function handleOpenModal(open) {
    toggle(open);
  }
  return (
    <>
      <button onClick={() => handleOpenModal(true)}>Abre po favo</button>
      <Modal isOpen={isOpen} handleClose={() => handleOpenModal(false)}>
        Contenido
      </Modal>
    </>
  );
}
