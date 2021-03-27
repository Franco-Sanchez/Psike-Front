import { css, Global } from "@emotion/react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Documentation from "./components/Documentation";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import Psychologists from "./pages/Psychologists";
import ShowPsychologist from "./pages/ShowPsychologist";
import SignUp from "./pages/SignUp";
import { colors } from "./ui";

function App() {
  let gapi = window.gapi;
  let CLIENT_ID =
    "55420826679-ta7gh9fm2j3596fhk8setcqpkcka6d8g.apps.googleusercontent.com";
  let API_KEY = "AIzaSyB4FREPsJE4KoZ-hvHsTHG2Ke4h7W05JrU";
  let DISCOVERY_DOCS = [
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
  ];
  let SCOPES = "https://www.googleapis.com/auth/calendar";

  const handleClick = () => {
    gapi.load("client:auth2", () => {
      console.log("loaded client");

      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
      });

      gapi.client.load("calendar", "v3", () => console.log("bam!"));

      gapi.auth2
        .getAuthInstance()
        .signIn()
        .then(() => {
          let event = {
            summary: "Google I/O 2021 PRUEBA GRECIAFINAL",
            location: "800 Howard St., San Francisco, CA 94103",
            description:
              "A chance to hear more about Google's developer products.",
            start: {
              dateTime: "2021-03-26T09:00:00-07:00",
              timeZone: "America/Los_Angeles",
            },
            end: {
              dateTime: "2021-03-26T17:00:00-07:00",
              timeZone: "America/Los_Angeles",
            },
            attendees: [
              { email: "carlostuna015@gmail.com" },
              { email: "diegopumacode@gmail.com" },
              { email: "francorsr98@gmail.com" },
            ],
            reminders: {
              useDefault: false,
              overrides: [
                { method: "email", minutes: 24 * 60 },
                { method: "popup", minutes: 10 },
              ],
            },
          };

          let request = gapi.client.calendar.events.insert({
            calendarId: "primary",
            resource: event,
          });

          let eventPatch = {
            conferenceData: {
              createRequest: { requestId: "7qxalsvy0e" },
            },
          };

          request.execute(function (event) {
            console.log(event);
            // window.open(event.htmlLink);

            gapi.client.calendar.events
              .patch({
                calendarId: "primary",
                eventId: `${event.id}`,
                resource: eventPatch,
                sendNotifications: true,
                conferenceDataVersion: 1,
              })
              .execute(function (event) {
                console.log("Conference created for event: %s", event.htmlLink);
              });
          });
        });
    });
  };

  return (
    <div>
      <Global
        styles={css`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body{
            background: ${colors.white};
          }
        `}
      />
      {/*<button onClick={handleClick}>Separar cita</button>*/}
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/documentation" component={Documentation} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/psychologists" component={Psychologists} />
          <Route path="/psychologist/:id" component={ShowPsychologist} />
          <Route path="/psychologist/:id/specialty#1" component={ShowPsychologist} />
          <Route path="/profile" component={Profile} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/404" component={NotFound} />
          <Redirect from="*" to="/404" />
        </Switch>
      </Router>
      {/*<Documentation/>*/}
    </div>
  );
}

export default App;
