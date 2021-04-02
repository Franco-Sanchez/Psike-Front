import styled from "@emotion/styled";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import CardContainer from "../components/Containers/CardContainer";
import { Heading3 } from "../components/text/Heading";
import CardHistory from "../components/UI/CardHistory";
import { fetchAppointments } from "../features/appointment/appointmentSlice";
import { colors } from "../ui";

export default function HistoryPage() {
  const tokenLogin = useSelector((state) => state.session.token);
  const tokenSignup = useSelector((state) => state.signup.token);
  const status = useSelector((state) => state.appointment.status);
  const dispatch = useDispatch();
  const appointments = useSelector((state) => state.appointment.appointments);

  if (status === "idle") {
    dispatch(fetchAppointments(tokenLogin));
  }

  if (!tokenLogin || !tokenSignup) return <Redirect to="/login" />;

  return (
    <StyledHistory>
      <Heading3>Tu historial de citas es: </Heading3>
      <StyledContinerCard>
        {appointments.map((appt) => (
          <CardHistory
            key={appt.id}
            avatar={appt.psychologist.avatar}
            name={appt.psychologist.name}
            lastname={appt.psychologist.lastname}
            status={appt.status}
            date={appt.date}
          />
        ))}
      </StyledContinerCard>
    </StyledHistory>
  );
}

const StyledContinerCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 16px;
`;
const StyledHistory = styled.div`
  h3 {
    color: ${colors.black};
    margin-bottom: 55px;
  }
`;
