import React from "react";
import styled from "styled-components";

export interface Props {
  title: string;
  items: {
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
  display: flex;
  align-items: center;

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
  const listItems = items.map(({ imageUrl, label, sublabel }, index) => (
    <Item key={index}>
      <Avatar src={imageUrl} alt="" />
      <ItemLabel>
        {label}
        <ItemSublabel>{sublabel}</ItemSublabel>
      </ItemLabel>
    </Item>
  ));

  return (
    <>
      <Heading>{title}</Heading>
      <Items>{listItems}</Items>
    </>
  );
}
