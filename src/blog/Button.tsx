import React from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}

const StyledButton = styled.button`
  color: white;

  height: 44px;
  width: 44px;
  margin: 0;
  padding: 0;

  border: none;
  border-radius: 1000px;

  background: linear-gradient(-120deg, #ff5c00, #ff9950);

  display: grid;
  place-items: center;

  transition: color 0.2s ease-out, border 0.2s ease-out;

  &:hover {
    color: #ff5c00;

    border: 2px solid #e6eff6;

    background: none;
  }
`;

export function Button(props: Props): React.ReactElement {
  return <StyledButton>{props.children}</StyledButton>;
}
