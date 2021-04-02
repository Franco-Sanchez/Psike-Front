import { useState } from "react";
import CardComment from "../UI/CardComment";
import Pagination from "./Pagination";
import styled from "@emotion/styled";
import {css} from '@emotion/react';

export default function ContainerComments({ _comments, styles }) {
  const [currentPage, setCurrentPage] = useState(1);
  // const mainComments = comments.filter(comment => comment.category === 'main_comment');
  const mainComments = new Array(11).fill({
    patient: { name: "Franco", lastname: "Sanchez", avatar: null },
    description:
      "usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.",
  });
  const limit = 3;

  return (
    <StyledComments css={styles}>
      <StyledContainer>
        {mainComments
          .slice((currentPage - 1) * limit, currentPage * limit)
          .map((comment) => (
            <CardComment comment={comment} />
          ))}
      </StyledContainer>
      <Pagination
        total={mainComments.length}
        page={currentPage}
        limit={limit}
        onSelectPage={(pageNum) => setCurrentPage(pageNum)}
        css={css`align-self: center;`}
      />
    </StyledComments>
  );
}

const StyledComments = styled.div`
   ${props => props.css}
   display: flex;
   flex-direction: column;
   gap: 30px;
` 

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 4%;
`;
