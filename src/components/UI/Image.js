import styled from "@emotion/styled";

export default function Imagen({ url, size }) {
  return <StyledImage url={url} size={size} />;
}

const StyledImage = styled.div`
  border: none;
  background-image: url(${(props) => props.url});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: ${(props) => sizes[props.size].width};
  height: ${(props) => sizes[props.size].height};
  border-radius: 20px;
`;

const sizes = {
  small: { width: "275px", height: "143px" },
  medium: { width: "461px", height: "306px" },
  large: { width: "456px", height: "665px" },
};
