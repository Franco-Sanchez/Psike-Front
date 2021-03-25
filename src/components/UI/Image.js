import styled from "@emotion/styled";

export default function Image({ url, size, children }) {
  return <StyledImage url={url} size={size} >{children}</StyledImage>;
}

const StyledImage = styled.div`
  border: none;
  background-image: url(${(props) => props.url});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: "100%";
  height: ${(props) => sizes[props.size].height};
  border-radius: 20px;
  display: flex; 
  justify-content: flex-end;
  align-items: flex-end;
`;

const sizes = {
  small: { width: "275px", height: "143px" },
  medium: { width: "461px", height: "306px" },
  large: { width: "456px", height: "665px" },
};
