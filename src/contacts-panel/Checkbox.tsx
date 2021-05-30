import React from "react";
import styled from "styled-components";

export interface Props {
  children: React.ReactElement;
  isChecked: boolean;
  handleChange: () => void;
}

const CheckLabel = styled.label`
  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;

const Check = styled.div`
  margin-left: auto;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const CheckIcon = styled.svg`
  position: absolute;

  width: 20px;
  height: 20px;

  display: none;

  color: var(--bleachWhite);

  pointer-events: none;
`;

const CheckboxInput = styled.input`
  appearance: none;

  height: 24px;
  width: 24px;

  background: var(--bleachWhite);

  border: 1px solid var(--elephantGrey);
  border-radius: 50%;

  &:checked {
    background: var(--simpleBlue);
  }

  &:checked + .icon {
    display: initial;
  }
`;
export function Checkbox(props: Props): React.ReactElement {
  const { children: labelContent, isChecked, handleChange } = props;

  return (
    <CheckLabel>
      {labelContent}
      <Check>
        <CheckboxInput
          type="checkbox"
          name=""
          id=""
          checked={isChecked}
          onChange={handleChange}
        />
        <CheckIcon
          className="icon"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          />
        </CheckIcon>
      </Check>
    </CheckLabel>
  );
}
