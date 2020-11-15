import React from "react";
import styled from "styled-components";

import { Button } from "./Button";
import { Panel, Heading, TimeLabel, TwoColumnSides } from "./styled";

export interface Props {
  category?: string;
  heading: string;
  postedTime?: string;
  textColor?: string;
}

const Category = styled.span`
  font-family: sans-serif;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export function AudioPost(props: Props): React.ReactElement {
  const { textColor = "#111B3D" } = props;

  return (
    <Panel color={textColor}>
      <Category>{props.category}</Category>
      <Heading>{props.heading}</Heading>
      <TwoColumnSides>
        <Button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="16"
            fill="currentColor"
          >
            <polygon points="0 0 10 8 0 16" />
          </svg>
        </Button>
        <TimeLabel>{props.postedTime}</TimeLabel>
      </TwoColumnSides>
    </Panel>
  );
}
