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
  --bleachWhite: #ffffff;
  --graphiteBlack: #181b2e;
  --fadeGrey: #f4f6fa;
  --elephantGrey: #c4cedc;
  --inkBlue: #415f8c;
  --simpleBlue: #327be8;

  font-family: sans-serif;

  box-sizing: border-box;

  background: var(--bleachWhite);
  max-width: 450px;
  margin: auto;
  padding: 45px 45px 40px;
  border-radius: 10px;

  box-shadow: 0px 15px 45px -25px rgba(1, 39, 97, 0.19);
`;

const Header = styled.div`
  display: flex;
  align-items: center;
`;

const Heading = styled.h3`
  margin: 0;
  font-size: 18px;
  color: var(--graphiteBlack);
`;

const Close = styled.button`
  background: none;
  border: none;

  cursor: pointer;

  margin-left: auto;
  padding: 0;
`;

const CloseIcon = styled.svg`
  width: 44px;
  height: 44px;

  color: var(--inkBlue);
`;

export function SearchList(props: Props): React.ReactElement {
  const { title } = props;

  return (
    <Panel>
      <Header>
        <Heading>{title}</Heading>
        <Close>
          <CloseIcon
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M6 18L18 6M6 6l12 12"
            />
          </CloseIcon>
        </Close>
      </Header>
    </Panel>
  );
}
