import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useState } from "react";
import { colors } from "../../ui";
import CardContainer from "../Containers/CardContainer";
import Pagination from "../Containers/Pagination";
import { ContentL, ContentXSB } from "../text/Content";
import { TagItemFill } from "./Tag";

export default function CardSpecialties({ _specialties, styles }) {
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 3;
  const specialties = [
    {
      id: 1,
      name: "Adicciones",
      subespecialties: [
        "Adicción a internet",
        "Ludopatía",
        "videojuegos y nuevas tecnologías",
      ],
    },
    {
      id: 2,
      name: "Autoestima",
      subespecialties: ["Autoestima baja e inseguridad"],
    },
    {
      id: 3,
      name: "Trastornos alimenticios",
      subespecialties: ["Anorexia", "Bulimia", "Obesidad"],
    },
    {
      id: 4,
      name: "Relaciones Familiares",
      subespecialties: ["Educación Hijos"],
    },
    { id: 5, name: "Duelo/Luto", subespecialties: ["Duelos y pérdidas"] },
    { id: 6, name: "Agustia", subespecialties: ["Angustia"] },
    { id: 7, name: "Ansiedad", subespecialties: ["Ansiedad"] },
    { id: 8, name: "Depresión", subespecialties: ["Depresión"] },
    {
      id: 9,
      name: "Control de Ira",
      subespecialties: [
        "Conductas agresivas",
        "Ira",
        "Irritabilidad e Histeria",
      ],
    },
    {
      id: 15,
      name: "Sexualidad e identidad",
      subespecialties: [
        "Orientación - Identidad sexual",
        " Infertilidad",
        "Esterilidad",
        "Acoso laboral",
      ],
    },
  ];

  return (
    <CardContainer type="specialties" css={styles}>
      <StyledCard>
        <StyledSpecialties>
          <ContentL css={css`color: ${colors.black};`}>Especialidades</ContentL>

          {specialties
            .slice((currentPage - 1) * limit, currentPage * limit)
            .map((specialty) => (
              <>
                <ContentXSB css={css`color: ${colors.black};`}>{specialty.name}</ContentXSB>
                <div className="especialtiesComents">
                  {specialty.subespecialties.slice(0,2).map((subspecialty) => (
                    <TagItemFill>{subspecialty}</TagItemFill>
                  ))}
                </div>
              </>
            ))}
          </StyledSpecialties>
        <Pagination
          total={specialties.length}
          page={currentPage}
          limit={limit}
          onSelectPage={(pageNum) => setCurrentPage(pageNum)} 
          css={css`align-self: center;`}/>
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
  gap: 15px;

  & .especialtiesComents {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
  }
`;

const StyledSpecialties = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`
