import { css, Global } from "@emotion/react";
import Documentation from "./components/Documentation";
import Icon from "./components/UI/Icon";

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

      <Documentation />
      <Icon type="twitter" fill="blue" size="20"/>
    </div>
  );
}

export default App;
