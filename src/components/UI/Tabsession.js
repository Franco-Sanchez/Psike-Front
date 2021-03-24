import styled from "@emotion/styled"
import { colors } from "../../ui";

export default function Tabsession({children}){
    return(
        <StyledTab>{children}</StyledTab>
    )
}

const StyledTab = styled.div`
  width: 170px;
  height: 46px;
  display:flex;
  justify-content:center;
  border-bottom: 4px solid ${colors.gray_ligth2};
  color: ${colors.gray_ligth2};
  font-family: Raleway;
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 28px;
  cursor:pointer;
  &:hover{
  border-bottom: 4px solid ${colors.orange};
  color: ${colors.orange};
}
`
