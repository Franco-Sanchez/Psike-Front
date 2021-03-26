import CardContainer from "../Containers/CardContainer";
import SimpleReactComponent from 'simple-react-calendar';
import Icon from "./Icon";
import { useState } from "react";
import { StyledCard } from '../showPsychologist/calendarStyles';

export default function CardSchedule() {
  const [day, setDay] = useState(new Date())

  return (
    <CardContainer type="schedule">
      <StyledCard>
        <SimpleReactComponent
          selected={day}
          onSelect={setDay}
          headerPrevArrow={<Icon type={'arrowLeft'} size={25} />}
          headerNextArrow={<Icon type={'arrow'} size={25}/>}
        />
      </StyledCard>
    </CardContainer>
  );
}