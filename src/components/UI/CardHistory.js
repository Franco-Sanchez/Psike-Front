import styled from "@emotion/styled";
import { colors } from "../../ui";

import CardContainer from "../Containers/CardContainer";
import { ContentXS, ContentXSB } from "../text/Content";
import { Heading6 } from "../text/Heading";
import Icon from "./Icon";
import Image from "./Image";

export default function CardHistory() {
  return (
    <CardContainer type="history">
      <StyledCard>
        <div className="container">
          <div className="photo">
            <Image
              size="circular"
              url="https://timesofindia.indiatimes.com/photo/67586673.cms"
            />
          </div>
          <div className="phycologyInfo">
            <div>
              <Heading6>Bertha Aspillaga</Heading6>
            </div>
            <div className="calendar">
              <Icon type="calendar" size={20} fill={colors.blue} />
              <ContentXS>7 Marzo 2021</ContentXS>
            </div>
            <div className="status">
              <Icon type="status" size={20} fill={colors.statusGreen} />
              <ContentXS>completado</ContentXS>
            </div>
          </div>
        </div>
        <div className="moreinfo">
          <ContentXSB>ver mas información sobre la cita</ContentXSB>
        </div>
      </StyledCard>
    </CardContainer>
  );
}

const StyledCard = styled.div`
  width: 100%;
  text-align: center;
  .container {
    display: flex;
    gap: 16px;
    margin-bottom: 30px;
  }
  .phycologyInfo {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .calendar,
  .status {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .moreinfo {
    p {
      padding: 20px;
      border-radius: 20px;
      background-color: ${colors.sky_blue};
      color: ${colors.gray};
    }
  }
`;
