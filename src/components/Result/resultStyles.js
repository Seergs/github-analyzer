import styled, { css } from "styled-components";
import { ReactComponent as Mail } from "../../img/mail.svg";
import { ReactComponent as Web } from "../../img/internet.svg";

export const Wrapper = styled.div``;

export const Avatar = styled.div`
  background-color: #cbd5e0;
  border: 1px solid #a0aec0;
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

export const Name = styled.h3`
  color: #f7fafc;
  text-align: center;
  font-size: 1.5em;
  letter-spacing: 1px;
  text-transform: uppercase;
`;
export const Email = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px 0;
`;

export const EmailText = styled.p`
  font-style: italic;
  color: #e2e8f0;
  font-size: 0.9em;
`;

export const EmailIcon = styled(Mail)`
  height: 20px;
  margin-right: 3px;
`;
export const Website = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const WebsiteText = styled.a`
  font-size: 0.9em;
  ${(props) =>
    props.websiteExists
      ? css`
          color: #4fd1c5;
        `
      : css`
          color: #e2e8f0;
          text-decoration: none;
        `}
`;
export const WebsiteIcon = styled(Web)`
  height: 20px;
  margin-right: 3px;

  ${(props) =>
    props.hidden &&
    css`
      display: none;
    `}
`;
