import React, { useState } from "react";
import styled from "styled-components";

import { Checkbox } from "./Checkbox";
export interface Props {
  title: string;
  items: {
    id: string;
    imageUrl: string;
    label: string;
    sublabel: string;
  }[];
}

const Heading = styled.h4`
  margin: 0 auto 10px;
  font-size: 11px;
  color: var(--graphiteBlack);

  text-transform: uppercase;
  letter-spacing: 1px;
`;

const Items = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Item = styled.li`
  padding: 15px;
  margin: auto -15px;

  border-radius: 10px;

  &:hover {
    background: var(--fadeGrey);
  }
`;

const ItemLabel = styled.div`
  font-size: 15px;

  color: var(--graphiteBlack);
  font-weight: 600;
`;

const ItemSublabel = styled.small`
  display: block;

  margin-top: 5px;

  font-size: 13px;
  font-weight: normal;
`;

const Avatar = styled.img`
  width: 56px;
  height: 56px;

  border-radius: 50%;

  margin-right: 15px;
`;

export function List(props: Props): React.ReactElement {
  const { title, items } = props;

  const [selected, setSelected] = useState([]);

  const toggleSelection = ({ id, isSelected }) => {
    const selectedUpdated = isSelected
      ? selected.filter((selectedId) => selectedId !== id)
      : [...selected, id];
    setSelected(selectedUpdated);
  };

  const listItems = items.map(({ id, imageUrl, label, sublabel }, index) => {
    const isSelected = selected.includes(id);

    return (
      <Item key={index}>
        <Checkbox
          isChecked={isSelected}
          handleChange={() => toggleSelection({ id, isSelected })}
        >
          <>
            <Avatar src={imageUrl} alt="" />
            <ItemLabel>
              {label}
              <ItemSublabel>{sublabel}</ItemSublabel>
            </ItemLabel>
          </>
        </Checkbox>
      </Item>
    );
  });

  return (
    <>
      <Heading>{title}</Heading>
      <Items>{listItems}</Items>
    </>
  );
}
