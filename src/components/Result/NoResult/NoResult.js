import React from "react";

import { Wrapper, NoDataSvg, Subtitle } from "./noResultStyles";

export default function NoResult() {
  return (
    <Wrapper>
      <Subtitle>No user to analize</Subtitle>
      <NoDataSvg />
    </Wrapper>
  );
}
