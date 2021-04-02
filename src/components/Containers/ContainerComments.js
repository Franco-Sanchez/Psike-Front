import { useState } from "react";
import CardComment from "../UI/CardComment";
import Pagination from "./Pagination";
import styled from '@emotion/styled';

export default function ContainerComments() {
  const mainComments = new Array(11).fill(1);
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 3;
  console.log(currentPage)
  
  return (
    <>
      <StyledContainer>
        {mainComments.slice((currentPage - 1) * limit, currentPage * limit).map(_comment => (
          <CardComment />
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