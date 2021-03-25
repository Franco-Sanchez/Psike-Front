import styled from "@emotion/styled";
import { colors } from "../../ui";
import { Content, ContentM } from "../text/Content";
import { Heading3, Heading4 } from "../text/Heading";
import Button from "../UI/Button";
import Icon from "../UI/Icon";
import Image from "../UI/Image";
import TabPrice from "../UI/TabPrice";

export default function CardShow() {
  const icons = ["fb", "google", "linkedin", "slack", "twitter"];
  return (
    <StyledCard>
      <div className="show-img">
        <Image
          size="medium"
          url="https://img.freepik.com/foto-gratis/hombre-negocios-usando-tableta-digital-mientras-colega-segundo-plano_107420-17056.jpg?size=626&ext=jpg&ga=GA1.2.1587176078.1613088000"
        />
        <div className="show-price">
          <TabPrice
            price={20.0}
            size="normal"
            bg="rgba(202, 214, 236, 0.8)"
            color={`${colors.black}`}
          />
        </div>
      </div>

      <div className="show-section">
        <div className="section-header">
          <Heading3>Theresa Mullins</Heading3>
          <Button size="small" type="submit" color={colors.orange}>
            Pedir cita
          </Button>
        </div>

        <div className="section-body">
          <Heading4>Psicologia Clinica</Heading4>

          <div className="body-icons">
            {icons.map((icon) => (
              <Icon type={icon} size={24} fill={colors.black}/>
            ))}
          </div>
        </div>

        <div className="section-footer">
          <Content>
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y
            archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar
            de las industrias desde el año 1500, cuando un impresor (N. del T.
            persona que se dedica a la imprenta) desconocido usó una galería de
            textos y los mezcló de tal manera que logró hacer un libro de textos
            especimen.
          </Content>

          <div className="footer-icons">
            <Icon size={28} type="chat" fill={`${colors.pink1}`} />
            <ContentM>(10)</ContentM>

            <Icon size={28} type="start" fill={`${colors.orange}`} />
            <ContentM>(4.0)</ContentM>
          </div>


        </div>
      </div>
    </StyledCard>
  );
}

const StyledCard = styled.div`
  margin: 10px;
  width: 100%;
  height: auto;
  border: 1px solid black;
  display: flex;
  padding: 18px;
  gap: 27px;
  & .show-img {
    width: 461px;
    height: 306px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
  }
  & .show-price {
    position: absolute;
    display: flex;
    padding-right: 19px;
  }
  & .show-section {
    width: 70%;
    height: auto;
    padding-top: 50px;
    padding-bottom: 47px;
    & .section-header {
      display: flex;
      justify-content: space-between;
    }
    & .section-body {
      margin-top: 8px;
      margin-bottom: 10px;
      display: flex;
      flex-direction: column;
      gap: 15px;
      color: ${colors.gray_ligth};
      & .body-icons {
        display: flex;
        gap: 15px;
      }
    }
    & .section-footer {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-end;
      text-align:justify;
      margin-bottom:0px;
    }
    & .footer-icons {
      display: flex;
      align-items:center;
      gap: 10px;
      margin-top:16px;
    }
  }
  @media (max-width: 768px){
    & {
        display:flex;
        flex-direction:column;
        width:100%;
        height:auto;
        padding-right:0px;
    }
  & .show-section {
    width: 461px;
    height: auto;
    padding-top:0px;
    padding-left:0px;
    & .section-header {
      display: flex;
      justify-content: space-between;
      padding-right:0px;
    }
  }
  }
  @media (max-width: 375px){
      &{
          border:none;
      }
      & .show-section{
        width:430px;
      }
      & .show-img div{
          margin-right: 12px;
      }
  }
`;
