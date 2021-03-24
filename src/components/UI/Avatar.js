import styled from "@emotion/styled"

export default function Avatar({url}){
    return(
      <StyledAvatar url = {url} />
    )
}

const StyledAvatar = styled.div`
  width:60px;
  height:60px;
  border-radius:50%;
  border:none;
  background-image:url(${(props)=>props.url});
  background-size:100% 100%;
`
