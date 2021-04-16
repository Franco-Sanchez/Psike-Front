import { css, Global } from "@emotion/react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import PageContent from "./components/layout/PageContent";
import Dashboard from "./pages/Dashboard";
import HistoryPage from "./pages/History";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import Psychologists from "./pages/Psychologists";
import ShowAppointment from "./pages/ShowAppointment";
import ShowPsychologist from "./pages/ShowPsychologist";
import SignUp from "./pages/SignUp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div id="App">
      <Global
        styles={css`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: Raleway;
          }
          body {
            background-image:url("/images/bg.svg");
            background-size: cover;
            background-position:20px 20px 20px;
            background-repeat:no-repeat;
            width: 100%;
          }
          a,
          button {
            cursor: pointer;
          }
        `}
      />
      <ToastContainer />
      <Router>
        <PageContent>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route path="/psychologists/:id" component={ShowPsychologist} />
            <Route path="/psychologists" component={Psychologists} />
            <Route path="/psychologist/:id" component={ShowPsychologist} />
            <Route path="/appoitments/:id" component={ShowAppointment}/>
            <Route
              path="/psychologist/:id/specialty#1"
              component={ShowPsychologist}
            />
            <Route path="/profile" component={Profile} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/appoitments" component={HistoryPage} />
            <Route path="/404" component={NotFound} />
            <Redirect from="*" to="/404" />
          </Switch>
        </PageContent>
      </Router>
    </div>
  );
}

export default App;
