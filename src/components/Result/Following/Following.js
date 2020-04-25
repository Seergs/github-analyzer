import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { ReactComponent as FollowingSvg } from "../../../img/following.svg";
import { Container, StyledRepos as StyledFolling } from "../Repos/Repos";

export default function Following({ numberOfFollows, username }) {
  return (
    <StyledFolling
      href={`https://www.github.com/${username}?tab=following`}
      target="_blank"
    >
      <Container>
        <FollowingIcon />
      </Container>
      <Container column>
        <h4>FOLLOWING</h4>
        <p>{numberOfFollows}</p>
      </Container>
    </StyledFolling>
  );
}

Following.propTypes = {
  numberOfFollows: PropTypes.number.isRequired,
};

const FollowingIcon = styled(FollowingSvg)`
  width: 35px;
  height: 35px;
`;
