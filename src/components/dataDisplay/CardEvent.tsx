import React from "react";
import styled from "styled-components";

import { Box } from "@material-ui/core";

// TODO: interface enhancement
interface CardEventProps {
  timeDisplay: string;
  title: string;
  content: string;
  attendees: number;
}

const CardEventContainer = styled(Box)`
  display: flex;
  flex-direction: column;
`;

const CardEventHeader = styled(Box)`
  display: flex;
  flex-direction: column;
`;

const CardEventBody = styled(Box)`
  display: flex;
`;

const CardEventFooter = styled(Box)`
  display: flex;
  flex-direction: row;
`;

const HeaderTimeDisplay = styled.p`
  color: #0098ab;
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 20px;
  margin: 0 0 20px 0;
`;

const HeaderTitle = styled.p`
  color: #080808;
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
  margin: 0 0 20px 0;
`;

const BodyMainContent = styled.p`
  color: #212121;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  margin: 0 0 20px 0;
`;

const FooterAttendingCount = styled.p`
  color: #757575;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  margin: 0;
`;

const CardEvent: React.FC<CardEventProps> = ({
  timeDisplay,
  title,
  content,
  attendees,
}) => {
  return (
    <CardEventContainer>
      <CardEventHeader>
        <HeaderTimeDisplay>{timeDisplay}</HeaderTimeDisplay>
        <HeaderTitle>{title}</HeaderTitle>
      </CardEventHeader>

      <CardEventBody>
        <BodyMainContent>{content}</BodyMainContent>
      </CardEventBody>

      <CardEventFooter>
        <FooterAttendingCount>{attendees} asistentes</FooterAttendingCount>
      </CardEventFooter>
    </CardEventContainer>
  );
};

export default CardEvent;
