import styled from "@emotion/styled";
import { colors } from "../../ui";

import CardContainer from "../Containers/CardContainer";
import { ContentXS, ContentXSB } from "../text/Content";
import { Heading6 } from "../text/Heading";
import Icon from "./Icon";
import Image from "./Image";

export default function CardHistory({
  key,
  avatar,
  name,
  lastname,
  status,
  date,
}) {
  const d = new Date(`${date}`);
  const year = d.getFullYear();
  const month = d.getMonth();
  const day = d.getUTCDate();
  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Augusto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Deciembre",
  ];
  console.log("date api", date);
  

  const monthName = months[month];
  const formattedDate = `${day} de ${monthName} del ${year}`;
  return (
    <CardContainer key={key} type="history">
      <StyledCard>
        <div className="container">
          <div className="photo">
            <Image size="circular" url={`${avatar}`} />
          </div>
          <div className="phycologyInfo">
            <Heading6>{name + " " + lastname}</Heading6>

            <div className="calendar">
              <Icon type="calendar" size={20} fill={colors.blue} />
              <ContentXS>{formattedDate}</ContentXS>
            </div>
            <div className="status">
              <Icon
                type="status"
                size={20}
                fill={
                  status === "completed"
                    ? colors.statusGreen
                    : status === "taken"
                    ? colors.statusPurple
                    : colors.statusRed
                }
              />
              <ContentXS>{status}</ContentXS>
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
    color: ${colors.blue};
    text-align: justify;
  }
  .calendar,
  .status {
    display: flex;
    align-items: center;
    gap: 8px;
    color: ${colors.gray};
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
