import React from "react";

import { Panel, Heading, TimeLabel } from "./styled";

export interface Props {
  heading: string;
  readTime?: string;
}

const darkTextColor = "#111B3D";

export function Post(props: Props): React.ReactElement {
  return (
    <Panel>
      <Heading color={darkTextColor}>{props.heading}</Heading>
      <TimeLabel color={darkTextColor}>{props.readTime}</TimeLabel>
    </Panel>
  );
}
