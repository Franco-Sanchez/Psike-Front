import { css, Global } from "@emotion/react";
import Documentation from "./components/Documentation";

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
    </div>
  );
}

export default App;
