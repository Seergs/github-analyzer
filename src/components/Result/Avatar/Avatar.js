import React from "react";
import styled from "styled-components";

export default function Avatar({ avatar_url, link }) {
  return (
    <StyledAvatar href={link} target="_blank">
      <AvatarImage src={avatar_url} />
    </StyledAvatar>
  );
}

export const StyledAvatar = styled.a`
  background-color: #2d3748;
  border: 1px solid #718096;
  width: 150px;
  height: 150px;
  margin: 2em auto 1em auto;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const AvatarImage = styled.img`
  width: 80%;
`;
