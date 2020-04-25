import React from "react";
import { ReactComponent as QuoteLeft } from "../../../img/quote-left.svg";
import { ReactComponent as QuoteRight } from "../../../img/quote-right.svg";

import styled from "styled-components";

export default function Bio({ bio }) {
  return (
    <StyledBio>
      <h4>ABOUT ME</h4>
      {bio ? (
        <p>
          <QuoteLeftIcon />
          {bio}
          <QuoteRightIcon />
        </p>
      ) : (
        <span>No bio available</span>
      )}
    </StyledBio>
  );
}

const StyledBio = styled.div`
  margin-top: 2em;
  background-color: #2c7a7b;
  color: #e6fffa;
  padding: 3em 1em;
  h4 {
    text-align: center;
    margin-bottom: 1em;
    color: #b2f5ea;
    letter-spacing: 1px;
  }
  p {
    text-align: center;
    line-height: 30px;
    letter-spacing: 1px;
    font-size: 1em;
  }
  span {
    font-style: italic;
  }
`;

const QuoteLeftIcon = styled(QuoteLeft)`
  height: 15px;
`;

const QuoteRightIcon = styled(QuoteRight)`
  height: 15px;
`;
