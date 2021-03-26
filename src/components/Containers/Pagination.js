/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { useState } from "react";
import CardSpecialties from "../UI/CardSpecialties";

export default function Pagination({ pages }) {
  const listItems = [];
  const [page, setPage] = useState(1);

  for (let i = 1; i <= pages; i++) {
    listItems.push(
      <LiStyle
        key={i}
        selector={i}
        onClick={() => {
          setPage(i);
        }}
        data={page}
      >
        {i}
      </LiStyle>
    );
  }

  return (
    <UlStyle>
      <LiStyle key="start" data={page}></LiStyle>
      {listItems}
      <LiStyle key="finish" data={page}></LiStyle>
    </UlStyle>
  );
}

const selected = css`
  border-radius: 50%;
  background-color: #2d9cdb;
  color: white;
`;
const UlStyle = styled.ul`
  height: 30px;
  padding: 12px 5px;
  display: flex;
  align-items: center;
  flex-direction: row;
`;
const LiStyle = styled.li`
  width: 26px;
  height: 22px;
  display: flex;
  justify-content: center;
  list-style-type: none;
  text-align: center;
  align-items: center;
  color: #4f4f4f;
  fill: #4f4f4f;
  ${(prop) => (prop.selector == prop.data ? selected : "")}
`;
