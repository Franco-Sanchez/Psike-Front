import styled from "@emotion/styled";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ContentL, ContentM, ContentS } from "../components/text/Content";
import { Heading1, Heading3 } from "../components/text/Heading";
import Avatar from "../components/UI/Avatar";
import CardDashBoard from "../components/UI/CardDashBoard";
import { fetchShowProfile } from "../features/profile/profileSlice";
import { cleanQuotes, fetchQuotes } from "../features/quotes/quotesSlice";
import { killToken } from "../features/session/sessionSlice";
import { killSign } from "../features/signup/signSlice";
import { colors } from "../ui";

export default function Dashboard() {
  const dispatch = useDispatch();
  const quotes = useSelector((state) => state.quotes.items);
  const userName = useSelector((state) => state.signup.name);
  const userLastName = useSelector((state) => state.signup.lastname);
  const email = useSelector((state) => state.session.email);
  const token = sessionStorage.getItem("token");
  const state = useSelector((state) => state.quotes.status);
  const user = useSelector((state) => state.profile.userdata);

  useEffect(() => {
    if (token) {
      dispatch(fetchShowProfile(token));
    }
  }, [token]);

  function kill() {
    return dispatch(killToken()), dispatch(killSign()), dispatch(cleanQuotes());
  }

  const transformTime = (time) =>
    time.toString().length === 1 ? `0${time.toString()}` : time;

  if (state == "idle") {
    dispatch(fetchQuotes(token));
  }

  useEffect(() => {
    console.log(quotes);
    console.log(userName);
    console.log(userLastName);
  });
  return (
    <DashboardStyled>
      <DashboardHeader>
        <DashLogout>
          <Avatar />
          <ContentLogout>
            <ContentL>
              {user.name} {user.lastname}
            </ContentL>
            <Link to="/login" onClick={() => dispatch(kill())}>
              <ContentM>Logout</ContentM>
            </Link>
          </ContentLogout>
        </DashLogout>
      </DashboardHeader>

      <DashboardUser>
        <DashUserData>
          <Heading1>HOLA,</Heading1>
          <Heading1>
            <p>{user.name}!</p>
          </Heading1>
        </DashUserData>
        <ContentM>
          <span>nos encanta tenerte de nuevo por aqui.</span>
        </ContentM>
      </DashboardUser>

      <Heading3>Tus proximas citas son:</Heading3>

      <BodyBoard>
        {quotes
          .filter((q) => new Date(q.date) >= 1 - new Date())
          .map((quo) => {
            return (
              <CardDashBoard
                name={quo.psychologist.name}
                date={quo.date}
                hora={transformTime(
                  new Date(quo.schedule.hour.start_hour).getUTCHours()
                )}
                minutes={transformTime(
                  new Date(quo.schedule.hour.start_hour).getUTCMinutes()
                )}
                reazon={quo.reason}
              />
            );
          })}
      </BodyBoard>
    </DashboardStyled>
  );
}

const DashboardStyled = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  & h3 {
    color: ${colors.black};
  }
  @media (max-width: 450px) {
    & {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-self: center;
    }
  }
`;
const DashboardHeader = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  @media (max-width: 450px) {
    & {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
    }
  }
`;
const DashLogout = styled.div`
  display: flex;
  width: auto;
  height: auto;
  gap: 10px;
  & a {
    text-decoration: none;
    color: ${colors.blue};
  }
`;
const ContentLogout = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 0px;
`;
const DashboardUser = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  & span {
    color: ${colors.black};
    font-weight: 500;
  }
`;
const DashUserData = styled.div`
  display: flex;
  gap: 10px;
  & h1 {
    color: ${colors.black};
  }
  & p {
    color: ${colors.orange};
  }
  @media (max-width: 450px) {
    & {
      width: 100%;
      display: flex;
      flex-direction: column;
      text-align: center;
    }
  }
`;
const BodyBoard = styled.div`
  display: grid;
  grid-template-columns: 33% 33% 33%;
  row-gap: 10px;
  column-gap: 10px;
  margin-top: 20px;
  border: 1px solid black;
  @media (max-width: 450px) {
    & {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
  }
`;
