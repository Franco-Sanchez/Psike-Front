import { css } from "@emotion/react";
import styled from "@emotion/styled";

const flex = css`
  display: flex;
  justify-content: center;
`

export const ContainerSchedule = styled.div`
  display: flex;
  flex-direction: column;
`

export const ContainerHours = styled.div`
  ${flex}
  align-items: center;
  gap: 30px;
`

export const StyledOrderedSchedule = styled.div`
  // width: max-content;
  display: grid;
  gap: 10px;
` 

export const StyledRow = styled.div`
  ${flex}
  gap: 10px;
`
