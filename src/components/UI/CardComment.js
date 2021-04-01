import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { colors } from "../../ui";
import CardContainer from "../Containers/CardContainer";
import { Content, ContentS, ContentSBB } from "../text/Content";

export default function CardComment({ comment }) {
  const imgDefault = 'https://bit.ly/31GAc24'
  
  return (
    <CardContainer type="comment" css={css`padding: 0;`}>
      <StyledCard>
        <Content css={css`color: ${colors.gray}; margin: 86px 50px 0 50px;`}>
          usó una galería de textos y los mezcló de tal manera que logró hacer
          un libro de textos especimen.
        </Content>
        <ContainerPatient>
          <StyledPicture picture={imgDefault}></StyledPicture>
          <div>
            <ContentSBB css={css`color: ${colors.black};`}>
              Franco Sanchez
            </ContentSBB>
            <ContentS css={css`color: ${colors.pink1};`}>Patient</ContentS>
          </div>
        </ContainerPatient>
      </StyledCard>
    </CardContainer>
  );
}

const StyledCard = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ContainerPatient = styled.div`
  display: flex;
  gap: 20px;
  background-color: ${colors.gray_ligth3};
  border-radius: 20px;
  align-items: center;
  padding: 12px 0 12px 50px;
`

const StyledPicture = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-image: url('${props => props.picture}');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`