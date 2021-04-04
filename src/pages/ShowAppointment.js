import styled from "@emotion/styled";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useParams } from "react-router-dom";
import { ContentM, ContentS } from "../components/text/Content";
import { Heading3, Heading5 } from "../components/text/Heading";
import Avatar from "../components/UI/Avatar";
import Icon from "../components/UI/Icon";
import { fetchShowProfile } from "../features/profile/profileSlice";
import { cleanQuotes, fetchQuotes } from "../features/quotes/quotesSlice";
import { killToken } from "../features/session/sessionSlice";
import { killSign } from "../features/signup/signSlice";
import { colors } from "../ui";
import { AvatarHeader } from "./Dashboard";

export default function ShowAppointment() {
  const quotes = useSelector((state) => state.quotes.items);
  const token = sessionStorage.getItem("token");
  const user = useSelector((state) => state.profile.userdata);
  const state = useSelector((state) => state.quotes.status);
  const dispatch = useDispatch();
  const url = useParams();

  useEffect(() => {
    if (token) {
      dispatch(fetchShowProfile(token));
    }
  }, [token]);

  function Kill() {
    return dispatch(killToken()), dispatch(killSign()), dispatch(cleanQuotes());
  }

  if (state == "idle") {
    dispatch(fetchQuotes(token));
  }

  let id = url.id;

  function FindAppointment() {
    return quotes.filter((quo) => quo.id == id);
  }

  useEffect(() => {
    console.log(FindAppointment());
  }, [token]);

  if (!token) return <Redirect to="/login" />;

  return (
    <StyledAppoitment>
      {FindAppointment().map((q) => (
        <Heading3>
          Datos sobre tu cita con <span>{q.psychologist.name}</span>:
        </Heading3>
      ))}

      {FindAppointment().map((q) => (
        <AppoIcons>
          <ContentIcons>
            <Icon type="calend" fill={colors.blue_ligth} size={31} />
            <ContentM>{q.date}</ContentM>
          </ContentIcons>

          <ContentIcons>
            <Icon
              type={"circle"}
              fill={
                q.status == "taken"
                  ? "yellow"
                  : q.status == "completed"
                  ? colors.green_ligth
                  : "red"
              }
              size={31}
            />
            <ContentM>{q.status}</ContentM>
          </ContentIcons>

          <ContentIcons>
            <Icon type="ticket" fill={colors.blue_ligth} size={31} />
            <ContentM>Codigo de pago</ContentM>
          </ContentIcons>

          <Code>
            <ContentS>{q.transfer.code}</ContentS>
          </Code>
        </AppoIcons>
      ))}

      <Heading5>
        <p>Comentarios que te dio el psicologo:</p>
      </Heading5>

      <PsicologyComent>
        {FindAppointment().map((q) => (
          <ContentM>
            {q.feedback}
            Lorem ipsum dolor sit amet consectetur adipiscing, elit sociis
            magnis donec velit iaculis, inceptos montes purus nascetur
            elementum. Habitasse commodo himenaeos imperdiet nisi dignissim
            accumsan, faucibus ridiculus ad vehicula erat, scelerisque convallis
            penatibus lobortis fusce. Ac cursus vel litora arcu porta magna
            pretium mi ante eu laoreet tellus, nibh condimentum cubilia
            pellentesque nulla pulvinar sapien diam tristique varius consequat.
            Augue luctu phasellus facilisi nullam fames a sem, nunc nam in dis
            leo lectus. Parturient aliquam congue platea ornare quam, taciti
            conubia metus hendrerit fringilla, curabitur interdum sed facilisis.
            Class eleifend molestie orci enim porttitor posuere tempor vitae
            nostra, fermentum quisque natoque id volutpat cum primis turpis, dui
            venenatis egestas aliquet ultrices ullamcorper nisl dictumst.
            Integer mus mattis tortor, mollis aptent.
          </ContentM>
        ))}
      </PsicologyComent>
    </StyledAppoitment>
  );
}

const StyledAppoitment = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 30px;
  & span {
    color: ${colors.blue_ligth};
    font-weight: 700;
  }
  & p {
    color: ${colors.gray};
  }
`;
const AppoIcons = styled.div`
  display: flex;
  gap: 15px;
  width: auto;
  height: auto;
  align-items: center;
`;
const ContentIcons = styled.div`
  display: flex;
  gap: 5px;
  width: auto;
  height: auto;
  align-items: center;
`;

const PsicologyComent = styled.div`
  height: auto;
  background-color: ${colors.white2};
  border-radius: 20px;
  padding: 40px;
  text-align: justify;
  box-shadow: 2px 17px 18px rgba(255, 168, 95, 0.22);
`;

const Code = styled.div`
  width: auto;
  height: auto;
  border-radius: 30%;
  padding: 10px;
  background-color: ${colors.white2};
`;
