import styled from "@emotion/styled";
import CardContainer from "../Containers/CardContainer";
import Pagination from "../Containers/Pagination";
import { ContentL, ContentXSB } from "../text/Content";
import { TagItemFill } from "./Tag";

export default function CardSpecialties() {

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

  function numSubespecialties() {
    let counter = 0;
    specialties.forEach((item) => (counter += item.subespecialties.length));
    return counter;
  }
  const limit = 4;
  const pages = Math.ceil(numSubespecialties() / limit);
  const currentPage = 1;
  
  return (
    <CardContainer type="specialties">
      <StyledCard>
        <ContentL>Especialidades</ContentL>

        {specialties
          .slice((currentPage - 1) * limit, currentPage * limit)
          .map((key) => (
            <>
              <ContentXSB>{key.name}</ContentXSB>
              <div className="especialtiesComents">
                {key.subespecialties.map((item) => (
                  <TagItemFill>{item}</TagItemFill>
                ))}
              </div>
            </>
          ))}
        <Pagination pages={pages} />
      </StyledCard>
    </CardContainer>
  );
}

const StyledCard = styled.div`
  width: 100%;
  & .especialtiesComents {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
  }
`;
