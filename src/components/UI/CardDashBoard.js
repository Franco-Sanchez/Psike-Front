import styled from "@emotion/styled"
import { colors } from "../../ui"
import { ContentM, ContentS } from "../text/Content"
import { Heading6 } from "../text/Heading"
import Avatar from "./Avatar"
import Icon from "./Icon"

export default function CardDashBoard({name, date, hora, reazon}){
    return(
			<CardStyled>
					<CardHeader>
							<Avatar url="https://i.pinimg.com/originals/67/54/78/675478c7dcc17f90ffa729387685615a.jpg"/>
							  <HeaderPsicology>
							    <Heading6>{name}</Heading6>
							      <ContentS>Psicologo clinico</ContentS>
							  </HeaderPsicology>
					</CardHeader>

					<CardDate>
						  <div>
								<Heading6>Fecha</Heading6>
								<ContentM>{date}</ContentM>
							</div>

							<div>
							  <Heading6>Hora</Heading6>
								<ContentM>{hora}</ContentM>
							</div>

							

					</CardDate>

					<div>
					<Heading6>{reazon}</Heading6>
					<Icon type = "video" fill={colors.orange} size="23"/>
					</div>
			</CardStyled>
    )
}

const CardStyled = styled.div`
border:1px solid black;
width: 400px;
height: 337px;
background-color:${colors.white2};
border:1px solid black;
border-radius:15px;
padding: 35px 81px 0px 43px;
display:flex;
flex-direction:column;
gap:40px;
@media (max-width: 375px) {
    & {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
  }
`
const CardHeader = styled.div`
border:1px solid blue;
display:flex;
gap:22px;
width:auto;
height:auto;
`
const HeaderPsicology = styled.div`
border:1px solid black;
display:flex;
align-self:center;
flex-direction:column;
width:auto;
height:auto;
`
const CardDate = styled.div`
display:flex;
justify-content:space-between;
`