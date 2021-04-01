import styled from "@emotion/styled";
import CardContainer from "../Containers/CardContainer";

export default function CardComment() {
  return (
    <CardContainer type="comment">
      <StyledCard></StyledCard>
    </CardContainer>
  );
}

const StyledCard = styled.div`
  width: 100%;
`;
