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
  box-shadow: 0 2px 2px hsla(0, 0%, 0%, 0.1);

  &::placeholder {
    color: #a0aec0;
  }
`;

export const ChevronRightSvg = styled(ChevronRight)`
  width: 20px;
`;

export const Button = styled.button`
  background-color: #e6fffa;
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
  box-shadow: 0 1px 3px hsla(0, 0%, 0%, 0.2);

  &:active {
    box-shadow: none;
  }
`;
