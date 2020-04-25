import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

import { ReactComponent as Repo } from "../../../img/repository.svg";

export default function Repos({ numberOfRepos, username }) {
  return (
    <StyledRepos
      href={`https://www.github.com/${username}?tab=repositories`}
      target="_blank"
    >
      <Container>
        <RepoIcon />
      </Container>
      <Container column>
        <h4>PUBLIC REPOS</h4>
        <p>{numberOfRepos}</p>
      </Container>
    </StyledRepos>
  );
}

Repos.propTypes = {
  numberOfRepos: PropTypes.number.isRequired,
};

const StyledRepos = styled.a`
  width: 70%;
  margin: 2em auto 0 auto;
  background-color: #2d3748;
  height: 100px;
  border-radius: 15px;
  text-decoration: none;
  padding: 1em;
  box-shadow: 0 1px 3px hsla(0, 0%, 50%, 0.2);
  display: flex;
  transition: width 100ms;
  h4 {
    letter-spacing: 1px;
    font-size: 0.8em;
    color: #a0aec0;
    margin-bottom: 0.5em;
  }
  p {
    font-size: 2.2em;
    color: #e2e8f0;
    font-weight: bold;
  }
  &:hover {
    width: 73%;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props) =>
    props.column
      ? css`
          flex-direction: column;
          width: 80%;
        `
      : css`
          width: 20%;
        `}
`;

const RepoIcon = styled(Repo)`
  width: 35px;
  height: 35px;
`;

export { StyledRepos, Container };
