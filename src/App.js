import { css, Global } from "@emotion/react";
import Documentation from "./components/Documentation";
import Icon from "./components/UI/Icon";
import Tabsession from "./components/UI/Tabsession";

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

      <Documentation/>
      <Tabsession>{"Login"}</Tabsession>
    </div>
  );
}

export default App;
