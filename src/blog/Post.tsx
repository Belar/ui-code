import React from "react";
import styled from "styled-components";

import { Panel, Heading, TimeLabel } from "./styled";
import { PostInfo } from "./PostInfo";

export interface Props {
  heading: string;
  readTime?: string;
  imageUrl?: string;
  author?: string;
  postedTime?: string;
  category?: string;
  primaryActionLabel?: string;
}

const darkTextColor = "#111B3D";

const Action = styled.a`
  position: relative;
  font-family: sans-serif;
  font-weight: 700;
  font-size: 16px;

  color: ${darkTextColor};

  padding: 10px 0;

  &::after {
    position: absolute;
    content: "";
    width: 30px;
    height: 2px;

    background: ${darkTextColor};

    left: 0;
    bottom: 0;
  }
`;

export function Post(props: Props): React.ReactElement {
  const { heading, readTime, primaryActionLabel, ...postInfo } = props;

  const readTimeInfo = readTime && (
    <TimeLabel color={darkTextColor}>{readTime}</TimeLabel>
  );
  const primaryAction = primaryActionLabel && (
    <Action>{primaryActionLabel}</Action>
  );

  return (
    <Panel>
      <PostInfo {...postInfo}></PostInfo>
      <Heading color={darkTextColor}>{heading}</Heading>
      {readTimeInfo}
      {primaryAction}
    </Panel>
  );
}
