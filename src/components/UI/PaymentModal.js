import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useState } from "react";
import { colors } from "../../ui";
import { Content, ContentS, ContentSB } from "../text/Content";
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
        <Heading4>Reserva de cita :</Heading4>
        <SectionPayment>
          <Heading5>Motivo de Consulta :</Heading5>
          <textarea
            rows="5"
            className="motivo"
            placeholder="El motivo de mi consulta es ..."
          />
        </SectionPayment>
        <SectionPayment>
          <Heading5>Detalle de Consulta : </Heading5>
          <div className="details">
            <ContentSB>
              Tendras una cita con <span className="name">Sofia Munoz</span>
            </ContentSB>
            <div className="schedule">
              <p>Hora : 10:00 - 10:45</p>
              <p>Fecha : 25 Marzo 2021</p>
            </div>
          </div>
        </SectionPayment>
        <SectionPayment>
          <Heading5>Pago : </Heading5>
          <div className="details"></div>
        </SectionPayment>
      </Modal>
    </>
  );
}

const SectionPayment = styled.div`
  margin: 20px 0;

  .details {
    background: #ffffff;
    box-shadow: 20px 22px 20px rgba(223, 234, 255, 0.5);
    border-radius: 20px;
    border: none;
    width: 100%;
    padding: 10px;
  }

  .motivo {
    width: 100%;
    outline: none;
    border: none;
    box-shadow: 20px 22px 20px rgba(223, 234, 255, 0.5);
    border-radius: 20px;
    padding: 10px;
    resize: none;
  }

  .schedule {
    margin:10px 0;
  }

  .name{
    color:#5E81F4;
    font-weight:bold;
  }
`;
