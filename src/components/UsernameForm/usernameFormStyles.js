import styled from "styled-components";

import { ReactComponent as ChevronRight } from "../../img/chevron-right.svg";

export const Form = styled.form`
  background-color: #718096;
  padding: 2em 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  position: relative;
  top: -25px;

  @media screen and (min-width: 900px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

export const Input = styled.input`
  margin-bottom: 16px;
  width: 320px;
  height: 48px;
  padding: 10px;
  border-radius: 10px;
  background-color: #e6fffa;
  font-size: 1.1em !important;
  font-family: "Lato", sans-serif;
  font-size: 0.9em;
  box-shadow: inset 0 1px 3px hsla(0, 0%, 0%, 0.2);

  &::placeholder {
    color: #a0aec0;
  }

  &:focus {
    box-shadow: inset 0 4px 6px hsla(0, 0%, 0%, 0.2);
  }

  @media screen and (min-width: 900px) {
    margin-bottom: 0;
    margin-right: 2em;
  }
`;

export const ChevronRightSvg = styled(ChevronRight)`
  width: 20px;
`;

export const Button = styled.button`
  background-color: #b2f5ea;
  width: 150px;
  color: #234e52;
  font-weight: bold;
  border-radius: 30px;
  height: 45px;
  font-size: 0.9em;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Lato", sans-serif;
  cursor: pointer;
  box-shadow: 0 4px 6px hsla(0, 0%, 80%, 0.2);
  transition: background 0.1s ease-in;

  &:active {
    box-shadow: none;
  }
  &:hover {
    background: #81e6d9;
  }
`;
