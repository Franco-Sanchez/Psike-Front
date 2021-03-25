import styled from "@emotion/styled";
import { colors } from "../../ui";
import { Content, ContentM } from "../text/Content";
import { Heading3, Heading4 } from "../text/Heading";
import Button from "../UI/Button";
import Icon from "../UI/Icon";
import Image from "../UI/Image";
import TabPrice from "../UI/TabPrice";
import CardContainer from "./CardContainer";

export default function CardShow() {
  const icons = ["fb", "google", "linkedin", "slack", "twitter"];
  return (
    <CardContainer type="schedule">
      <StyledCard>
        <ContainerImg>
          <Image
            classname="img-small"
            size="medium"
            url="https://img.freepik.com/foto-gratis/hombre-negocios-usando-tableta-digital-mientras-colega-segundo-plano_107420-17056.jpg?size=626&ext=jpg&ga=GA1.2.1587176078.1613088000"
          >
            <TabPrice
              price={20.0}
              size="normal"
              bg="rgba(202, 214, 236, 0.8)"
              color={`${colors.black}`}
            />
          </Image>
        </ContainerImg>

        <ShowSection>
          <SectionHeader>
            <Heading3>Theresa Mullins</Heading3>
            <Button size="small" type="submit" color={colors.orange}>
              Pedir cita
            </Button>
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
            <Content>
              Lorem Ipsum es simplemente el texto de relleno de las imprentas y
              archivos de texto. Lorem Ipsum ha sido el texto de relleno
              estándar de las industrias desde el año 1500, cuando un impresor
              (N. del T. persona que se dedica a la imprenta) desconocido usó
              una galería de textos y los mezcló de tal manera que logró hacer
              un libro de textos especimen.
            </Content>

            <FooterIcons>
              <Icon size={28} type="chat" fill={`${colors.pink1}`} />
              <ContentM>(10)</ContentM>

              <Icon size={28} type="start" fill={`${colors.orange}`} />
              <ContentM>(4.0)</ContentM>
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
      height: auto;
      padding-right: 0px;
    }
  }
`;
const ContainerImg = styled.div`
  position: relative;
  &:first-of-type {
    position: relative;
    top: 0;
  }
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
  padding: 30px;
  @media (max-width: 768px) {
    & {
      width: 100%;
      height: auto;
      padding-top: 0px;
      padding-left: 0px;
    }
  }
  @media (max-width: 375px) {
    & {
      width: 100%;
    }
  }
`;
const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    & {
      display: flex;
      justify-content: space-between;
      padding-right: 0px;
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
