import React from "react";
import NoResult from "./NoResult/NoResult";

import {
  Wrapper,
  Avatar,
  AvatarImage,
  Name,
  Email,
  EmailText,
  EmailIcon,
  Website,
  WebsiteIcon,
  WebsiteText,
} from "./resultStyles";

export default function Result({ data }) {
  if (data)
    return (
      <Wrapper>
        <Avatar>
          <AvatarImage src={data.avatar_url} />
        </Avatar>
        <Name>{data.name}</Name>
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
      </Wrapper>
    );
  else return <NoResult />;
}
