import React from "react";
import styled from "styled-components";

interface ButtonProps {
  children: React.ReactNode;
}

const StyledButton = styled.button`
  border-radius: 1000px;
`;

export function Button(props: ButtonProps): React.ReactElement {
  return <StyledButton>{props.children}</StyledButton>;
}
