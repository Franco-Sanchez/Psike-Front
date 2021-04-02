import styled from "@emotion/styled";
import { colors } from "../../ui";
import { Content, ContentM } from "../text/Content";
import { Heading3, Heading4 } from "../text/Heading";
import Icon from "../UI/Icon";
import Image from "../UI/Image";
import TabPrice from "../UI/TabPrice";
import CardContainer from "./CardContainer";
import { css } from '@emotion/react';

export default function CardShow({ psychologist }) {
  const imgDefault = 'https://bit.ly/31GAc24'
  const icons = ["fb", "google", "linkedin", "slack", "twitter"];

  return (
    <CardContainer type="schedule">
      <StyledCard>
        <ContainerImg>
          <Image
            classname="img-small"
            size="medium"
            url={psychologist.avatar || imgDefault}
          >
            <TabPrice
              price={psychologist.price}
              size="normal"
              bg="rgba(202, 214, 236, 0.8)"
              color={`${colors.black}`}
            />
          </Image>
        </ContainerImg>

        <ShowSection>
          <SectionHeader>
            <Heading3>{psychologist.name} {psychologist.lastname}</Heading3>
          </SectionHeader>

          <SectionBody>
            <Heading4>Psicologia Clinica</Heading4>

            <BodyIcons>
              {icons.map((icon) => (
                <Icon type={icon} size={24} fill={colors.black} />
              ))}
            </BodyIcons>
          </SectionBody>

          <SectionFooter>
            <Content css={css`width: 100%;`}>
              {psychologist.biography}
            </Content>

            <FooterIcons>
              <Icon size={28} type="chat" fill={`${colors.pink1}`} />
              <ContentM>({psychologist.comments_total})</ContentM>

              <Icon size={28} type="start" fill={`${colors.orange}`} />
              <ContentM>({psychologist.ranking_total})</ContentM>
            </FooterIcons>
          </SectionFooter>
        </ShowSection>
      </StyledCard>
    </CardContainer>
  );
}

const StyledCard = styled.div`
  margin-top: 0px;
  width: 100%;
  height: auto;
  display: flex;
  padding: 18px;
  gap: 27px;
  @media (max-width: 768px) {
    & {
      display: flex;
      flex-direction: column;
      width: 100%;

    }
  }
`;
const ContainerImg = styled.div`
  position: relative;
  @media (max-width: 768px) {
    & {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
const ShowSection = styled.div`
  width: 100%;
  height: auto;

  @media (max-width: 768px) {
    & {
      width: 100%;
      height: auto;

    }
  }
`;
const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width:100%;
  @media (max-width: 768px) {
    & {
      display: flex;
      justify-content: space-between;
    }
  }
`;

const SectionBody = styled.div`
  margin-top: 8px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  color: ${colors.gray_ligth};
`;
const BodyIcons = styled.div`
  display: flex;
  gap: 15px;
`;
const SectionFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  text-align: justify;
  margin-bottom: 0px;
`;
const FooterIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 16px;
`;
