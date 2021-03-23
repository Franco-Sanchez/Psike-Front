import { css } from "@emotion/react";
import styled from "@emotion/styled";

const baseStyles = css`
  font-family: Roboto;
  font-weight: normal;
`;

export const Content = styled.p`
  ${baseStyles}
  font-size: 16px;
  line-height: 20px;
  ${(props) => props.css}
`;

export const ContentLarge = styled(Content)`
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
`;

export const ContentSmall = styled(Content)`
  font-size: 14px;
  font-weight: 300;
  line-height: 16px;
`;

