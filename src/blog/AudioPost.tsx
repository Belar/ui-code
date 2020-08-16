import React from "react";
import styled from "styled-components";

import { Button } from "./Button";

export interface Props {
  category?: string;
  heading: string;
  postedTime?: string;
}

const darkTextColor = "#111B3D";

const Panel = styled.div`
  box-sizing: border-box;
  min-width: 300px;
  height: auto;
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0px 20px 50px -40px #ff9950;
`;

const Category = styled.span`
  color: ${darkTextColor};
  font-family: sans-serif;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const Heading = styled.h1`
  color: ${darkTextColor};
  font-size: 18px;
  line-height: 1.5;
  margin: 10px auto 20px;
`;

const PostedTime = styled.span`
  color: ${darkTextColor};
  font-family: sans-serif;
  font-size: 16px;
  opacity: 0.6;
`;

const TwoColumnSides = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export function AudioPost(props: Props): React.ReactElement {
  return (
    <Panel>
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
        <PostedTime>{props.postedTime}</PostedTime>
      </TwoColumnSides>
    </Panel>
  );
}
