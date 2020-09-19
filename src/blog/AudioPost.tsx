import React from "react";
import styled from "styled-components";

import { Button } from "./Button";
import { Panel, Heading, TimeLabel, TwoColumnSides } from "./styled";

export interface Props {
  category?: string;
  heading: string;
  postedTime?: string;
}

const darkTextColor = "#111B3D";

const Category = styled.span`
  color: ${darkTextColor};
  font-family: sans-serif;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export function AudioPost(props: Props): React.ReactElement {
  return (
    <Panel>
      <Category>{props.category}</Category>
      <Heading color={darkTextColor}>{props.heading}</Heading>
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
        <TimeLabel color={darkTextColor}>{props.postedTime}</TimeLabel>
      </TwoColumnSides>
    </Panel>
  );
}
