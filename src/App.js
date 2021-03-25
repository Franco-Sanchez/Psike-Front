import { css, Global } from "@emotion/react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Documentation from "./components/Documentation";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import Psychologists from "./pages/Psychologists";
import ShowPsychologist from "./pages/ShowPsychologist";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div>
      <Global
        styles={css`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
        `}
      />

      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/documentation" component={Documentation} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/psychologists" component={Psychologists} />
          <Route path="/psychologist/:id" component={ShowPsychologist} />
          <Route path="/profile" component={Profile} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/404" component={NotFound} />
          <Redirect from="*" to="/404" />
        </Switch>
      </Router>
      <Documentation/>
    </div>
  );
}

export default App;
