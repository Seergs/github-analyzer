import React from "react";
import NoResult from "./NoResult/NoResult";
import styled from "styled-components";
import PropTypes from "prop-types";

import Avatar from "./Avatar/Avatar";
import UserInfo from "./UserInfo/UserInfo";
import Bio from "./Bio/Bio";
import Repos from "./Repos/Repos";
import Followers from "./Followers/Followers";
import Following from "./Following/Following";

export default function Result({ data }) {
  if (data)
    return (
      <Wrapper>
        <Avatar avatar_url={data.avatar_url} link={data.html_url} />
        <UserInfo data={data} />
        <Bio bio={data.bio} />
        <Container>
          <Repos numberOfRepos={data.public_repos} username={data.login} />
          <Followers numberOfFollowers={data.followers} username={data.login} />
          <Following numberOfFollows={data.following} username={data.login} />
        </Container>
      </Wrapper>
    );
  else return <NoResult />;
}

Result.propTypes = {
  data: PropTypes.object,
};

const Wrapper = styled.div`
  padding-bottom: 1em;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 900px) {
    flex-direction: row;
    margin: 2em 1em 2em 2em;
    justify-content: center;
  }
`;
