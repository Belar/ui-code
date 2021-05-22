import React from "react";
import styled from "styled-components";

export interface Props {
  title: string;
  list: {
    title: string;
    items: [
      {
        imageUrl: string;
        label: string;
        sublabel: string;
      }
    ];
  };
}

const Panel = styled.div`
  font-family: sans-serif;

  box-sizing: border-box;

  background: #ffffff;
  max-width: 450px;
  margin: auto;
  padding: 45px 45px 40px;
  border-radius: 10px;

  box-shadow: 0px 15px 45px -25px rgba(1, 39, 97, 0.19);
`;

export function SearchList(props: Props): React.ReactElement {
  return <Panel></Panel>;
}
