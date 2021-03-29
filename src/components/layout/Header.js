import React from "react";
import { colors } from "../../ui";
import Button from "../UI/Button";
import styled from "@emotion/styled";
import { NavLink, useHistory } from "react-router-dom";

export default function Header() {
  const history = useHistory();
  return (
    <StyledHeader className="header">
      <div className="logo">
        <a
          onClick={() => {
            history.push(`/`);
          }}
        >
          P<span>SIKE</span>
        </a>
      </div>
      <div className="menu-mobile">hamburguesa</div>
      <div className="navigation">
        <NavLink to="/dashboard" activeClassName="selected">
          Dashboard
        </NavLink>
        <NavLink to="/psychologists" activeClassName="selected">
          Psicologos
        </NavLink>
        <a>Mi Historial</a>

        <div className="actions">
          <Button
            size="small"
            bg={colors.pink1}
            onClick={() => {
              history.push(`login`);
            }}
          >
            Iniciar Sesion
          </Button>
        </div>
      </div>
    </StyledHeader>
  );
}

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  .logo {
    font-weight: 900;
    font-size: 1.8rem;
    color: ${colors.orange};
    span {
      color: ${colors.orange_ligth};
    }
  }
  .navigation {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 35px;
    .selected {
      color: ${colors.gray};
      font-weight: 600;
    }
    a {
      cursor: pointer;
      font-size: 1rem;
      color: ${colors.gray_ligth};
      font-weight: 600;
      text-decoration: none;
      &:hover {
        color: ${colors.gray};
        font-weight: 600;
      }
    }

    .actions {
      display: flex;
      gap: 20px;
    }
  }
  .menu-mobile {
    display: none;
  }

  @media (max-width: 768px) {
    .navigation {
      display: none;
    }
    .menu-mobile {
      display: block;
    }
  }
`;
