import styled from "@emotion/styled";
import { colors } from "../../ui";
import { ContentXS, ContentXSB, ContentXXSB } from "../text/Content";
import { Heading6 } from "../text/Heading";
import Icon from "./Icon";
import Imagen from "./Image";
import TabPrice from "./TabPrice";
import { TagItem } from "./Tag";
import CardContainer from "../Containers/CardContainer";
import { useHistory } from "react-router";

export default function CardPsychology({
  id,
  name,
  bio,
  price,
  coments,
  ranking,
  specialties,
}) {
  const history = useHistory();

  const navigateShowPsy = () => {
    history.push(`/psychologist/${id}`);
  };
  return (
    <>
      <CardContainer type={"schedule"}>
        <StyledCardPsychology>
          <div className="hero-card">
            <Imagen
              url="https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg"
              size="small"
              className={"image-psy"}
              onClick={navigateShowPsy}
            >
              <TabPrice price={price} size="small" />
            </Imagen>
            <Heading6 onClick={navigateShowPsy} className="namePsy">
              Lic. {name}
            </Heading6>
            <ContentXXSB>Psicologa Clínica</ContentXXSB>
            <div className="tagsContainer">
              {specialties.map((spe) => (
                <TagItem key={spe.name}>{spe.name}</TagItem>
              ))}
            </div>
            <div className="bioContainer">
              <ContentXS>{bio}</ContentXS>
            </div>
          </div>
          <div className="stadisticsContainer">
            <div className="stadisticsItem">
              <Icon type="chat" fill={colors.pink1} size="25" />
              <ContentXSB>{coments}</ContentXSB>
            </div>

            <div className="stadisticsItem">
              <Icon type="start" fill={colors.orange} size="25" />
              <ContentXSB>{ranking}</ContentXSB>
            </div>
          </div>
        </StyledCardPsychology>
      </CardContainer>
    </>
  );
}
const StyledCardPsychology = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  .hero-card {
    height: 330px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    .namePsy {
      cursor: pointer;
      margin-top:10px;
    }

    & .image-psy {
      cursor: pointer;
    }
    & .tagsContainer {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
    }
  }
  /* 
  & .bioContainer {
    height: 40px;
    overflow: hidden;
  } */
  & .stadisticsContainer {
    display: flex;
    justify-content: flex-end;
    gap: 8px;
  }
  & .stadisticsItem {
    display: flex;
    gap: 5px;
    align-items: center;
  }
`;
