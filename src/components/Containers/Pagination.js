/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { useState } from "react";
import { colors } from "../../ui";

export default function Pagination({ pages, onClick }) {
  const listItems = [];
  const [page, setPage] = useState(1);

  for (let i = 0; i < pages; i++) {
    listItems.push(
      <LiStyle
        key={i}
        selector={i}
        onClick={() => {
          setPage(i);
        }}
        data={page}
      ></LiStyle>
    );
  }

  return <UlStyle onClick={onClick}>{listItems}</UlStyle>;
}

const selected = css`
  border-radius: 50%;
  background-color: ${colors.orange};
`;
const UlStyle = styled.ul`
  height: 30px;
  padding: 12px 5px;
  display: flex;
  align-items: center;
  flex-direction: row;
`;
const LiStyle = styled.li`
  width: 20px;
  height: 20px;
  display: flex;
  margin-right: 13px;
  justify-content: center;
  list-style-type: none;
  text-align: center;
  align-items: center;
  background-color: ${colors.gray_ligth};
  border-radius: 50%;
  ${(prop) => (prop.selector == prop.data ? selected : "")}
`;