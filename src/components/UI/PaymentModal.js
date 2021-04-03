import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { colors } from "../../ui";
import Paypal from "../payment/Paypal";
import { Content, ContentS, ContentSB } from "../text/Content";
import { Heading3, Heading4, Heading5, Heading6 } from "../text/Heading";
import Modal from "./Modal";
import { useHistory } from "react-router";
export default function PaymentModal({ isOpen, toggle, schedule, day }) {
  const history = useHistory();
  const [reason, setReason] = useState("");
  const psychologist = useSelector((state) => state.showPsychologist.single);
  const statusCreateAppointment = useSelector(
    (state) => state.createAppointment.status
  );
  function handleOpenModal(open) {
    toggle(open);
  }


  if(statusCreateAppointment === "succeeded"){
    history.push("/dashboard")
  }
  useEffect(() => {}, [reason]);

  const options = { weekday: "long", month: "long", day: "numeric" };
  const dateTimeFormat = new Intl.DateTimeFormat("es-ES", options);

  const transformTime = (time) => {
    let convertTime = new Date(time);
    let hours = toStringTime(convertTime.getUTCHours());
    let minutes = toStringTime(convertTime.getUTCMinutes());
    return `${hours}:${minutes}`;
  };

  const toStringTime = (time) => {
    return time.toString().length === 1 ? `0${time.toString()}` : time;
  };

  const LoadingPayment = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 12px;
    width: 100%;
    height: 100%;
    z-index: 10000;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      margin-bottom: 20px;
    }
  `;
  return (
    <>
      <Modal isOpen={isOpen} handleClose={() => handleOpenModal(false)}>
        {statusCreateAppointment == "loading" && (
          <LoadingPayment>
            <img src="/images/doctor-woman.svg" width="80" />
            <Heading4>Reservando la cita</Heading4>
            <p>Espere un momento mientras se registra su cita</p>
          </LoadingPayment>
        )}
        <Heading4>Reserva de cita :</Heading4>
        <SectionPayment>
          <Heading5>Motivo de Consulta :</Heading5>
          <textarea
            onChange={(e) => setReason(e.target.value)}
            rows="5"
            value={reason}
            className="motivo"
            placeholder="El motivo de mi consulta es ..."
            minLength="50"
          />
        </SectionPayment>
        <SectionPayment>
          <Heading5>Detalle de Consulta : </Heading5>
          <div className="details">
            <ContentSB>
              Tendras una cita con{" "}
              <span className="name">
                {psychologist.name + " " + psychologist.lastname}
              </span>
            </ContentSB>
            <div className="schedule">
              <p>
                Hora : {transformTime(schedule.hour.start_hour)} a{" "}
                {transformTime(schedule.hour.end_hour)}
              </p>
              <p>Fecha : {dateTimeFormat.format(day)}</p>
            </div>
          </div>
        </SectionPayment>
        <SectionPayment>
          <Heading5>Pago : </Heading5>
          <div className="details payment">
            {reason.length > 20 && (
              <>
                <small>*Seleccione el metodo de pago</small>
                <Paypal
                  idSchedule={schedule.id}
                  day={day}
                  psychologist={psychologist}
                  reason={reason}
                />
              </>
            )}
          </div>
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

  .payment {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
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
    margin: 10px 0;
  }

  .name {
    color: #5e81f4;
    font-weight: bold;
  }
`;
