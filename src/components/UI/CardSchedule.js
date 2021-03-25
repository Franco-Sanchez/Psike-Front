import styled from "@emotion/styled";
import CardContainer from "../Containers/CardContainer";

export default function CardSchedule() {
  return (
    <CardContainer type="schedule">
      <StyledCard></StyledCard>
    </CardContainer>
  );
}

const StyledCard = styled.div`
  /* width: 100%; */
`;
