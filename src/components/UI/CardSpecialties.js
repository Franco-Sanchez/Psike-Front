import styled from "@emotion/styled";
import CardContainer from "../Containers/CardContainer";
import { ContentL, ContentSB, ContentXSB } from "../text/Content";
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

  // const keys = Object.keys(specialties);
  // const numOfpages = specialties

  return (
    <CardContainer type="specialties">
      <StyledCard>
        <ContentL>Especialidades</ContentL>

        {specialties.map((key) => (
          <>
            <ContentXSB>{key.name}</ContentXSB>
            <div className="especialtiesComents">
              {key.subespecialties.map((item) => (
                <TagItemFill>{item}</TagItemFill>
              ))}
            </div>
          </>
        ))}
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
