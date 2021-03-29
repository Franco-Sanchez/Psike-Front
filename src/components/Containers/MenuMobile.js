import styled from "@emotion/styled";
import { colors } from "../../ui";
import Icon from "../UI/Icon";
import { slide as Menu } from "react-burger-menu";

export default function MenuMobile({ pageWrapId, outerContainerId }) {
  return (
    <Menu
      width={"20%"}
      pageWrapId={pageWrapId}
      outerContainerId={outerContainerId}
    >
      <a className="menu-item" href="/dashboard">
        Dashboard
      </a>
      <a className="menu-item" href="/psychologists">
        Psicologos
      </a>
      <a className="menu-item" href="/">
        home
      </a>
    </Menu>
  );
}

// const StyledMenu = styled.div`
//   width: 300px;
//   border: 1px solid red;
//   height: 100%;
//   background-color: white;
// `;
