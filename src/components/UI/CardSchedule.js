import CardContainer from "../Containers/CardContainer";
import SimpleReactComponent from "simple-react-calendar";
import Icon from "./Icon";
import { useState } from "react";
import { ContainerCalendar } from "../showPsychologist/calendarStyles";
import { ContainerSchedule } from "../showPsychologist/scheduleStyles";
import { Content, ContentL } from "../text/Content";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { colors } from "../../ui";

export default function CardSchedule() {
  const [day, setDay] = useState(new Date());

  const options = { weekday: 'long', month: 'long', day: 'numeric' }
  const dateTimeFormat = new Intl.DateTimeFormat('es-ES', options);

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
              text-align: center;
              text-transform: capitalize;
            `}
          >
            {dateTimeFormat.format(day)}
          </ContentL>
          <Content
            css={css`
              color: ${colors.gray};
              text-align: center;
            `}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </Content>
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
