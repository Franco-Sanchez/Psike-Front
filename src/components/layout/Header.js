import React, { useEffect, useState } from "react";
import { colors } from "../../ui";
import Button from "../UI/Button";
import styled from "@emotion/styled";
import { NavLink, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import MenuMobile from "../Containers/MenuMobile";

export default function Header() {
  const history = useHistory();
  const token = useSelector((state)=>state.session.token);
  const tokenSignup = useSelector((state)=>state.signup.token);

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
        <NavLink to="/" activeClassName="selected">
          Inicio
        </NavLink>
      <div className="menu-mobile" id="menu-mobile">
        <MenuMobile/>
      </div>
      
      <div className="navigation" >
        <NavLink to="/psychologists" activeClassName="selected">
          Psicologos
        </NavLink>

        {(token || tokenSignup) &&
        
        <>
        <NavLink to="/dashboard" activeClassName="selected">
        Dashboard
        </NavLink> 

        <NavLink to="/history" activeClassName="selected">
        Historial
        </NavLink>

        <NavLink to="/profile" activeClassName="selected">
        Perfil
        </NavLink>
        </>
         }

        {!(token || tokenSignup) &&
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
        }
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
  height: auto;
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
