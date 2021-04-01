import CardContainer from "../Containers/CardContainer";
import SimpleReactComponent from "simple-react-calendar";
import Icon from "./Icon";
import { useState } from "react";
import { ContainerCalendar } from "../showPsychologist/calendarStyles";
import {
  ContainerSchedule,
  ContainerHours,
  StyledOrderedSchedule,
  StyledRow,
} from "../showPsychologist/scheduleStyles";
import { Content, ContentL } from "../text/Content";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { colors } from "../../ui";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { fetchShowPsychologist } from "../../features/psychologist/showPsychologistSlice";
import { fetchShowAppointments } from "../../features/psychologist/showAppointmentsSlice";
import { useHistory } from "react-router";

export default function CardSchedule({ id }) {
  const history = useHistory();
  const [day, setDay] = useState(new Date());
  const tokenLogin = useSelector(state => state.session.token);
  const tokenSignup = useSelector(state => state.signup.token); 
  const schedules = useSelector((state) => state.showPsychologist.schedules);
  const appointments = useSelector((state) => state.showAppointments.items);
  const psychologistStatus = useSelector(
    (state) => state.showPsychologist.status
  );
  const appointmentsStatus = useSelector(
    (state) => state.showAppointments.status
  );
  const dispatch = useDispatch();

  if (psychologistStatus === "idle") {
    dispatch(fetchShowPsychologist({ id: 1 }));
  }

  if (appointmentsStatus === "idle") {
    dispatch(fetchShowAppointments({ id: 1 }));
  }

  const options = { weekday: "long", month: "long", day: "numeric" };
  const dateTimeFormat = new Intl.DateTimeFormat("es-ES", options);

  const filterSchedules = schedules.filter(
    (schedule) => schedule.day.day_number === day.getDay()
  );

  let orderedSchedules = [];
  for (let _element of filterSchedules) {
    orderedSchedules = [...orderedSchedules, filterSchedules.splice(0, 2)];
    orderedSchedules = [...orderedSchedules, filterSchedules.splice(0, 3)];
  }

  const arrToCompareDates = (dateState, dateInput) => {
    let firstDate = new Date(
      Date.UTC(
        dateState.getFullYear(),
        dateState.getMonth(),
        dateState.getDate()
      )
    ).getTime();
    let secondDate = new Date(
      Date.UTC(
        dateInput.getFullYear(),
        dateInput.getMonth(),
        dateInput.getDate()
      )
    ).getTime();
    return [firstDate, secondDate];
  };

  const filterAppointments = appointments.filter((appointment) => {
    let splitDate = appointment.date.split(/\D/);
    let convertDate = new Date(
      splitDate[0],
      splitDate[1] - 1,
      splitDate[2]
    );
    let valuesToCompare = arrToCompareDates(day, convertDate);
    if (valuesToCompare[0] === valuesToCompare[1]) return appointment;
  });

  const goPastDay = () => setDay(new Date(day.setDate(day.getDate() - 1)));

  const goNextDay = () => setDay(new Date(day.setDate(day.getDate() + 1)));

  const transformTime = (time) =>
    time.toString().length === 1 ? `0${time.toString()}` : time;

  const isDisabled = (schedule) => {
    let now = new Date();
    let valuesToCompare = arrToCompareDates(day, now);
    const sameHour = filterAppointments.filter(appointment => (
      appointment.schedule.hour.start_hour === schedule.hour.start_hour
    ))
    return valuesToCompare[0] < valuesToCompare[1] || sameHour.length > 0;
  };

  const bookAppointment = (schedule) => {
    if(!tokenLogin || !tokenSignup) history.push('/login');
    // obtener el formato de la fecha para la cita "dateTimeFormat.format(day)"
    console.log(schedule);
    console.log(day)
  }

  return (
    <CardContainer type="schedule">
      <ContentL>Horarios</ContentL>
      <StyledCard>
        <ContainerCalendar>
          <SimpleReactComponent
            selected={day}
            onSelect={setDay}
            headerPrevArrow={<Icon type={"arrowLeft"} size={25} />}
            headerNextArrow={<Icon type={"arrow"} size={25} />}
          />
        </ContainerCalendar>
        <ContainerSchedule>
          <ContentL
            css={css`
              ${dateFormat}
            `}
          >
            {dateTimeFormat.format(day)}
          </ContentL>
          <Content
            css={css`
              ${description}
            `}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </Content>
          <ContainerHours>
            <Icon
              onClick={goPastDay}
              styles={arrow}
              type="arrowLeft"
              size={50}
              fill={colors.orange}
            />
            <StyledOrderedSchedule>
              {orderedSchedules.length === 0 && <p>No hay horarios</p>}
              {orderedSchedules.map((schedules) => (
                <StyledRow>
                  {schedules.map((schedule) => (
                    <Button
                      size="small"
                      outline
                      disabled={isDisabled(schedule)}
                      css={buttonHour}
                      onClick={()=> bookAppointment(schedule)}
                    >
                      {transformTime(
                        new Date(schedule.hour.start_hour).getUTCHours()
                      )}
                      :
                      {transformTime(
                        new Date(schedule.hour.start_hour).getUTCMinutes()
                      )}{" "}
                      a{" "}
                      {transformTime(
                        new Date(schedule.hour.end_hour).getUTCHours()
                      )}
                      :
                      {transformTime(
                        new Date(schedule.hour.end_hour).getUTCMinutes()
                      )}
                    </Button>
                  ))}
                </StyledRow>
              ))}
            </StyledOrderedSchedule>
            <Icon
              onClick={goNextDay}
              styles={arrow}
              type="arrow"
              size={50}
              fill={colors.orange}
            />
          </ContainerHours>
        </ContainerSchedule>
      </StyledCard>
    </CardContainer>
  );
}

const StyledCard = styled.div`
  width: 100%;
  display: flex;
  gap: 100px;
`;

const dateFormat = css`
  text-align: center;
  text-transform: capitalize;
`;

const description = css`
  text-align: center;
  color: ${colors.gray};
`;

const buttonHour = css`
  font-family: "Inter";
  padding: 16px 27px;
  line-height: 19px;
  font-weight: 600;
`;
const arrow = css`
  cursor: pointer;
`;
