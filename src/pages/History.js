import styled from "@emotion/styled";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router";
import FilterDate from "../components/core/Appointments/FilterDate";
import { Heading3 } from "../components/text/Heading";
import Button from "../components/UI/Button";
import CardHistory from "../components/UI/CardHistory";
import { fetchAppointments } from "../features/appointment/appointmentSlice";
import { colors } from "../ui";
import { resetFilter } from "../features/appointment/appointmentSlice";
import { Link } from "react-router-dom";

export default function HistoryPage() {
  const tokenLogin = useSelector((state) => state.session.token);
  const tokenSignup = useSelector((state) => state.signup.token);
  const status = useSelector((state) => state.appointment.status);
  const dispatch = useDispatch();
  const filterAppointments = useSelector(
    (state) => state.appointment.filterAppointments
  );
  const history = useHistory();

  if (status === "idle") {
    dispatch(fetchAppointments(tokenLogin));
  }

  if (!tokenLogin && !tokenSignup) return <Redirect to="/login" />;

  const today = new Date(Date.now());

  function orderBoard() {
    return filterAppointments
      .filter((obj) => {
        let [year, month, day] = obj.date.split("-");
        let date = new Date(Number(year), Number(month) - 1, Number(day));
        return date < today;
      })
      .sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      });
  }

  function handleShowAppointment(id) {
    history.push(`/appoitments/${id}`);
  }

  console.log("fuera");
  return (
    <StyledHistory>
      <Heading3>Tu historial de citas es: </Heading3>
      <div className="filterSection">
        <FilterDate />
        <Button onClick={() => dispatch(resetFilter())}>Limpiar</Button>
      </div>
      <StyledContinerCard>
        {orderBoard().map((appt) => (
          <CardHistory
            key={appt.id}
            avatar={appt.psychologist.avatar}
            name={appt.psychologist.name}
            lastname={appt.psychologist.lastname}
            status={appt.status}
            date={appt.date}
            onClick={() => handleShowAppointment(appt.id)}
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
  .filterSection {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 32px;
  }
`;
