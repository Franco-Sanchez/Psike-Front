import styled from "@emotion/styled";
import CardContainer from "../Containers/CardContainer";

export default function CardSpecialties() {
  return (
    <CardContainer size="specialties">
      <StyledCard></StyledCard>
    </CardContainer>
  );
}

const StyledCard = styled.div`
  width: 100%;
`;
