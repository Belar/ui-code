import React from "react";
import styled from "styled-components";

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
  margin-right: 15px;
`;

const Info = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 50px;
`;

const Author = styled.div`
  font-family: sans-serif;
  font-weight: 700;
  font-size: 15px;

  margin-bottom: 5px;
`;

const Meta = styled.span`
  font-family: sans-serif;
  font-size: 14px;

  &:not(:last-of-type)::after {
    content: "•";
    margin: auto 5px;
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
