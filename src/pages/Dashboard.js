import styled from "@emotion/styled";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
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

  useEffect(() => {
    console.log(
      quotes.map((quo) => {
        return quo.psychologist.avatar;
      })
    );
  });

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

  if (!token) return <Redirect to="/login" />;

  function filterDashboard() {
    return quotes.filter((quo) => {
      let now = new Date(
        Date.UTC(
          new Date().getFullYear(),
          new Date().getMonth(),
          new Date().getDate()
        )
      ).getTime();

      let splitDate = quo.date.split(/\D/);
      let convertDate = new Date(splitDate[0], splitDate[1] - 1, splitDate[2]);
      let thirDate = new Date(
        Date.UTC(
          convertDate.getFullYear(),
          convertDate.getMonth(),
          convertDate.getDate()
        )
      ).getTime();
      if (
        thirDate == now &&
        new Date(quo.schedule.hour.start_hour).getUTCHours() >=
          new Date().getHours()
      ) {
        return quo;
      } else if (thirDate > now) {
        return quo;
      }
    });
  }

  function orderBoard() {
    return filterDashboard().sort((a, b) => {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    });
  }

  return (
    <DashboardStyled>
      <AvatarHeader
        name={user.name}
        lastname={user.lastname}
        onClick={() => dispatch(kill())}
      />
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
        {orderBoard().map((quo) => {
          return (
            <CardDashBoard
              name={quo.psychologist.name}
              date={new Date(quo.date.concat("T00:00:00"))}
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

function AvatarHeader({ name, lastname, onClick, url }) {
  return (
    <DashboardHeader>
      <DashLogout>
        <Avatar />
        <ContentLogout>
          <ContentL>
            {name} {lastname}
          </ContentL>
          <Link to="/login" onClick={onClick}>
            <ContentM>Logout</ContentM>
          </Link>
        </ContentLogout>
      </DashLogout>
    </DashboardHeader>
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
  row-gap: 20px;
  margin-top: 20px;
  @media (max-width: 450px) {
    & {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
  }
`;
export { AvatarHeader };
