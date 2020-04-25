import React from "react";

import {
  Email,
  EmailIcon,
  EmailText,
  Company,
  CompanyName,
  ContainerRow,
  ContainerCol,
  Location,
  LocationIcon,
  LocationText,
  Name,
  Website,
  WebsiteIcon,
  WebsiteText,
  StyledWrapper,
} from "./UserInfoStyles";

export default function UserInfo({ data }) {
  return (
    <StyledWrapper>
      <Name>{data.name}</Name>
      <ContainerCol>
        <Email>
          <EmailIcon />
          <EmailText>
            {data.email ? data.email : "User's email is private"}
          </EmailText>
        </Email>
        <Website>
          <WebsiteIcon hidden={data.blog ? true : false} />
          <WebsiteText
            websiteExists={data.blog ? true : false}
            href={data.blog ? data.blog : null}
            target="_blank"
          >
            {data.blog ? data.blog : "User has no website"}
          </WebsiteText>
        </Website>
      </ContainerCol>
      <ContainerRow>
        <Company>
          <CompanyName>
            {data.company ? (
              <span>
                Working at{" "}
                <i>
                  <strong>{data.company}</strong>
                </i>
              </span>
            ) : (
              <span>Not working right now</span>
            )}
          </CompanyName>
        </Company>
        <Location>
          <LocationIcon />
          <LocationText>
            {data.location ? data.location : "Location not available"}
          </LocationText>
        </Location>
      </ContainerRow>
    </StyledWrapper>
  );
}
