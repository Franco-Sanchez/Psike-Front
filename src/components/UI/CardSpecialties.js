import styled from "@emotion/styled";
import CardContainer from "../Containers/CardContainer";
import { ContentL, ContentSB, ContentXSB } from "../text/Content";
import { TagItemFill } from "./Tag";

export default function CardSpecialties() {
  return (
    <CardContainer type="specialties">
      <StyledCard>
        <ContentL>Especialidades</ContentL>
        <div className="especialtiesComents">
          <TagItemFill>Alcholismo</TagItemFill>
          <TagItemFill>Alcholismo</TagItemFill>
          <TagItemFill>Alcholismo</TagItemFill>
        </div>

        <ContentSB>Adiciones</ContentSB>
        <TagItemFill>Alcholismo</TagItemFill>
        <TagItemFill>Alcholismo</TagItemFill>
        <TagItemFill>Alcholismo</TagItemFill>
        <TagItemFill>Alcholismo</TagItemFill>

        <ContentSB>Atoestima</ContentSB>
        <TagItemFill>Alcholismo</TagItemFill>
        <TagItemFill>Alcholismo</TagItemFill>
        <TagItemFill>Alcholismo</TagItemFill>
      </StyledCard>
    </CardContainer>
  );
}

const StyledCard = styled.div`
  width: 100%;
`;
