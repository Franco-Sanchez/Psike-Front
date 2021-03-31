import styled from "@emotion/styled";

export default function Image({ url, size, children, classname }) {
  return (
    <StyledImage className={classname} url={url} size={size}>
      {children}
    </StyledImage>
  );
}

const StyledImage = styled.div`
  border: none;
  background-image: url(${(props) => props.url});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: ${(props) =>
    props.size === "large" || "circular" ? sizes[props.size].width : "100%"};
  height: ${(props) => sizes[props.size].height};
  padding: 10px;
  border-radius: ${(props) =>
    props.size === "large" || "circular"
      ? sizes[props.size].borderRadius
      : "20px"};

  @media (max-width: 768px) {
    & {
      width: ${(props) =>
        props.size === "circular" ? sizes[props.size].width : "100%"};
      display: flex;
      justify-content: center;
    }
  }
`;

const sizes = {
  small: { width: "275px", height: "143px" },
  medium: { width: "461px", height: "306px" },
  large: { width: "450px", height: "600px", borderRadius: "0px 50px" },
  circular: { width: "56px", height: "56px", borderRadius: "50px" },
};
