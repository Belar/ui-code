import React from "react";
import styled from "styled-components";

import { Panel, Heading, TimeLabel, TwoColumnSides } from "./styled";
import { PostInfo } from "./PostInfo";

export interface Props {
  heading: string;
  readTime?: string;
  imageUrl?: string;
  author?: string;
  postedTime?: string;
  category?: string;
  primaryActionLabel?: string;
  textColor?: string;
  panelColor?: string;
}

interface ActionProps {
  color: string;
}

const Action = styled.a<ActionProps>`
  position: relative;
  font-family: sans-serif;
  font-weight: 700;
  font-size: 16px;

  color: ${(props) => props.color};

  padding: 10px 0;

  &::after {
    position: absolute;
    content: "";
    width: 30px;
    height: 2px;

    background: ${(props) => props.color};

    left: 0;
    bottom: 0;

    transition: width 0.2s ease-in-out;
  }

  &:hover {
    cursor: pointer;

    &::after {
      width: 100%;
    }
  }
`;

export function Post(props: Props): React.ReactElement {
  const {
    heading,
    readTime,
    primaryActionLabel,
    textColor = "#111B3D",
    panelColor = "#FFFFFF",
    ...postInfo
  } = props;

  const readTimeInfo = readTime && <TimeLabel>{readTime}</TimeLabel>;
  const primaryAction = primaryActionLabel && (
    <Action color={textColor}>{primaryActionLabel}</Action>
  );

  return (
    <Panel color={textColor} background={panelColor}>
      <PostInfo {...postInfo}></PostInfo>
      <Heading>{heading}</Heading>
      <TwoColumnSides>
        {primaryAction}
        {readTimeInfo}
      </TwoColumnSides>
    </Panel>
  );
}
