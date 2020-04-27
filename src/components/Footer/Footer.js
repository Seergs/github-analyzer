import React from "react";
import styled from "styled-components";

export default function Footer() {
  return <StyledFooter>Sergio Suárez - 2020</StyledFooter>;
}

const StyledFooter = styled.div`
  background-color: #1a202c;
  height: 100px;
  color: #a0aec0;
  font-size: 0.7em;
  display: flex;
  align-items: center;
  justify-content: center;
`;
