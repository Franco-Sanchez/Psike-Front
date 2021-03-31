import styled from "@emotion/styled"
import { colors } from "../../ui"
import { ContentM, ContentS } from "../text/Content"
import { Heading6 } from "../text/Heading"
import Avatar from "./Avatar"
import Icon from "./Icon"

export default function CardDashBoard({name, date, hora, reazon,minutes}){
    return(
			<CardStyled>
					<CardHeader>
							<Avatar/>
							  <HeaderPsicology>
							    <Heading6>{name}</Heading6>
							      <ContentS>Psicologo clinico</ContentS>
							  </HeaderPsicology>
					</CardHeader>

					<CardDate>
						    <Date>
								<Heading6>Fecha</Heading6>
								<ContentM>{date}</ContentM>
							</Date>

							<Hour>
							  <Heading6>Hora</Heading6>
								<ContentM>{hora} : {minutes}</ContentM>
							</Hour>

							

					</CardDate>

					<CardMotivo>
					  <Heading6>Motivo de consulta:</Heading6>
					   <MotivoDescription>
					      <Icon type = "reason" fill={colors.orange} size="23"/>
						  <Heading6>{reazon}</Heading6>
						</MotivoDescription>
					</CardMotivo>
			</CardStyled>
    )
}

const CardStyled = styled.div`
width: 400px;
height: 337px;
background-color:${colors.white2};
border-radius:15px;
padding: 35px 81px 0px 43px;
display:flex;
flex-direction:column;
gap:40px;
@media (max-width: 450px) {
    & {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
  }
`
const CardHeader = styled.div`
display:flex;
gap:22px;
width:auto;
height:auto;
`
const HeaderPsicology = styled.div`
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
const Date = styled.div`
display:flex;
flex-direction:column;
gap:5px;
`
const Hour = styled.div`
display:flex;
flex-direction:column;
gap:5px;
`
const CardMotivo = styled.div`
display: flex;
flex-direction:column;
gap:10px;
`
const MotivoDescription = styled.div`
display:flex;
align-items:center;
gap:10px;
`