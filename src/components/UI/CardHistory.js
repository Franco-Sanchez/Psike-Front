import styled from "@emotion/styled";
import { colors } from "../../ui";

import CardContainer from "../Containers/CardContainer";
import { ContentXS } from "../text/Content";
import { Heading6 } from "../text/Heading";
import Icon from "./Icon";
import Image from "./Image";

export default function CardHistory() {
  return (
    <CardContainer type="history">
      <StyledCard>
        {/* <Image size="circularSmall" url="https://timesofindia.indiatimes.com/photo/67586673.cms" /> */}
        <div>
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
            <div>
              <Icon type="calendar" size={20} fill={colors.blue} />
              <ContentXS>7 Marzo 2021</ContentXS>
            </div>
            <div>
              <Icon type="status" size={20} fill={colors.statusGreen} />
              <ContentXS>completado</ContentXS>
            </div>
          </div>
          <a className="moreinfo">ver mas información sobre la cita</a>
        </div>
      </StyledCard>
    </CardContainer>
  );
}

const StyledCard = styled.div`
  width: 100%;

`;
