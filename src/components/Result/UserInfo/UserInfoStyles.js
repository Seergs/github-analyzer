import styled, { css } from "styled-components";
import { ReactComponent as Mail } from "../../../img/mail.svg";
import { ReactComponent as Web } from "../../../img/internet.svg";
import { ReactComponent as LocationSvg } from "../../../img/location.svg";

export const StyledWrapper = styled.div`
  max-width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
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

export const ContainerRow = styled.div`
  display: flex;
  padding: 0 1em;
  margin-top: 1em;
  justify-content: center;
`;
export const ContainerCol = styled(ContainerRow)`
  flex-direction: column;

  @media screen (min-width: 600px) {
    flex-direction: row;
  }
`;
export const Company = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const CompanyName = styled.p`
  color: #cbd5e0;
  font-size: 0.9em;
  span {
    font-style: normal;
  }
`;
export const Location = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LocationText = styled.p`
  color: #cbd5e0;
  font-size: 0.9em;
`;

export const LocationIcon = styled(LocationSvg)`
  height: 18px;
`;
