import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { ReactComponent as FollowersSvg } from "../../../img/followers.svg";
import { Container, StyledRepos as StyledFollowers } from "../Repos/Repos";

export default function Followers({ numberOfFollowers, username }) {
  return (
    <StyledFollowers
      href={`https://www.github.com/${username}?tab=followers`}
      target="_blank"
    >
      <Container>
        <FollowersIcon />
      </Container>
      <Container column>
        <h4>FOLLOWERS</h4>
        <p>{numberOfFollowers}</p>
      </Container>
    </StyledFollowers>
  );
}

Followers.propTypes = {
  numberOfFollowers: PropTypes.number.isRequired,
};

const FollowersIcon = styled(FollowersSvg)`
  width: 35px;
  height: 35px;
`;
