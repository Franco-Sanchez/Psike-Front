import { useState } from "react";
import CardComment from "../UI/CardComment";
import Pagination from "./Pagination";
import styled from '@emotion/styled';

export default function ContainerComments({ comments }) {
  const [currentPage, setCurrentPage] = useState(1);
  const mainComments = comments.filter(comment => comment.category === 'main_comment');
  const limit = 3;

  return (
    <>
      <StyledContainer>
        {mainComments.slice((currentPage - 1) * limit, currentPage * limit).map(comment => (
          <CardComment comment={comment} />
        ))}
      </StyledContainer>
      <Pagination 
        total={mainComments.length}
        page={currentPage}
        limit={limit}
        onSelectPage={(pageNum) => setCurrentPage(pageNum)}
      />
    </>
  )
}

const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 78px;
` 