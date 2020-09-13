import React from "react";
import styled from "styled-components";
import { tablet } from "../global/breakpoints";

export interface Props {
  imageUrl?: string;
  author?: string;
  postedTime?: string;
  category?: string;
}

const ProfilePicture = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 1000px;
  margin-bottom: 5px;

  @media ${tablet} {
    margin: auto 15px 0 0;
  }
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  margin-bottom: 50px;

  @media ${tablet} {
    flex-direction: row;
  }
`;

const Author = styled.div`
  font-family: sans-serif;
  font-weight: 700;
  font-size: 15px;

  text-align: center;

  margin-bottom: 15px;

  @media ${tablet} {
    text-align: initial;
    margin-bottom: 5px;
  }
`;

const Meta = styled.div`
  font-family: sans-serif;
  font-size: 14px;

  text-align: center;

  @media ${tablet} {
    display: inline;
    text-align: initial;

    &:not(:last-of-type)::after {
      content: "•";
      margin: auto 5px;
    }
  }
`;

export function PostInfo(props: Props): React.ReactElement {
  const { imageUrl, author, postedTime, category } = props;

  const profileImage = imageUrl && (
    <ProfilePicture src={imageUrl} alt="Author's profile picture" />
  );
  const authorName = author && <Author>{author}</Author>;
  const postedTimeMeta = postedTime && <Meta>{postedTime}</Meta>;
  const categoryMeta = category && <Meta>{category}</Meta>;

  const hasMetaInfo = authorName || postedTimeMeta || categoryMeta;

  if (!hasMetaInfo) {
    return null;
  }

  return (
    <Info>
      {profileImage}
      <div>
        {authorName}
        {postedTimeMeta}
        {categoryMeta}
      </div>
    </Info>
  );
}
