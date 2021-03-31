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

export default function CardSchedule({ id }) {
  const [day, setDay] = useState(new Date());
  const schedules = useSelector((state) => state.showPsychologist.schedules);
  const appointments = useSelector((state) => state.showAppointments.items);
  const psychologistStatus = useSelector((state) => state.showPsychologist.status);
  const appointmentsStatus = useSelector((state) => state.showAppointments.status);
  const dispatch = useDispatch();

  if (psychologistStatus === "idle") {
    dispatch(fetchShowPsychologist({ id: 1 }));
  }

  if (appointmentsStatus === "idle") {
    dispatch(fetchShowAppointments({ id: 1 }));
  }

  const options = { weekday: "long", month: "long", day: "numeric" };
  const dateTimeFormat = new Intl.DateTimeFormat("es-ES", options);

  const taken = false;

  const filterSchedules = schedules.filter(
    (schedule) => schedule.day.day_number === day.getDay()
  );
  let orderedSchedules = [];
  for (let _element of filterSchedules) {
    orderedSchedules = [...orderedSchedules, filterSchedules.splice(0, 2)];
    orderedSchedules = [...orderedSchedules, filterSchedules.splice(0, 3)];
  }

  const goPastDay = () => setDay(new Date(day.setDate(day.getDate() - 1)));

  const goNextDay = () => setDay(new Date(day.setDate(day.getDate() + 1)));

  const transformTime = (time) => time.toString().length === 1 ? `0${time.toString()}` : time

  const isDisabled = (time) => {
    let now = new Date();
    let compareOne = new Date(Date.UTC(day.getFullYear(), day.getMonth(), day.getDate())).getTime();
    let compareTwo = new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate())).getTime();
    return compareOne < compareTwo
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
              {orderedSchedules.map((schedule) => (
                <StyledRow>
                  {schedule.map((time) => (
                    <Button
                      size="small"
                      outline
                      disabled={isDisabled(time)}
                      css={buttonHour}
                    >
                      {transformTime(new Date(time.hour.start_hour).getUTCHours())}
                      :{transformTime(new Date(time.hour.start_hour).getUTCMinutes())} a{" "}
                      {transformTime(new Date(time.hour.end_hour).getUTCHours())}:
                      {transformTime(new Date(time.hour.end_hour).getUTCMinutes())}
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
