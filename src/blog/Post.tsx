import React from "react";
import styled from "styled-components";

import { Panel, Heading, TimeLabel } from "./styled";

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

const ProfilePicture = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 1000px;
  margin-right: 15px;
`;

const Info = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 50px;
`;

const Author = styled.div`
  font-family: sans-serif;
  font-weight: 700;
  font-size: 15px;

  margin-bottom: 5px;
`;

const Meta = styled.span`
  font-family: sans-serif;
  font-size: 14px;

  &:not(:last-of-type)::after {
    content: "•";
    margin: auto 5px;
  }
`;

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
  return (
    <Panel>
      <Info>
        <ProfilePicture src={props.imageUrl} alt="Author's profile picture" />
        <div>
          <Author>{props.author}</Author>
          <Meta>{props.postedTime}</Meta>
          <Meta>{props.category}</Meta>
        </div>
      </Info>
      <Heading color={darkTextColor}>{props.heading}</Heading>
      <TimeLabel color={darkTextColor}>{props.readTime}</TimeLabel>
      <Action>{props.primaryActionLabel}</Action>
    </Panel>
  );
}
