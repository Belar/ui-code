import React from "react";
import styled from "styled-components";

const Bar = styled.div`
  position: relative;
  margin: 25px auto 35px;
  color: var(--inkBlue);

  display: flex;
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  height: 75px;
  padding: 0 0 0 70px;

  background: var(--fadeGrey);
  border: 1px solid var(--elephantGrey);
  border-radius: 5px;

  color: inherit;

  font-size: 16px;

  &::placeholder {
    color: inherit;
  }
`;

const Icon = styled.svg`
  position: absolute;
  width: 32px;
  height: 32px;

  margin-left: 22px;
`;

export function SearchBar(): React.ReactElement {
  return (
    <Bar>
      <Icon
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </Icon>
      <Input aria-label="Search" type="text" placeholder="Type to search" />
    </Bar>
  );
}
