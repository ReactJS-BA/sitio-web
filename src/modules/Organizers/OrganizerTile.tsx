import React from "react";
import styled from "styled-components";

import { Box } from "@material-ui/core";

import Img, { ImageProps } from "src/components/images/Img";

interface OrganizerTileProps extends ImageProps {
  name: string;
}

const HexagonImg = styled(Img)`
  height: 194px;
  width: 184px;
  object-fit: cover;
  object-position: center;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
`;

const ImageWrapper = styled.div`
  &:after {
    display: block;
    position: relative;
    height: 194px;
    width: 184px;
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    background-image: linear-gradient(
      0deg,
      rgba(229, 50, 48, 0.6),
      rgba(229, 50, 48, 0.6)
    );
    margin-top: -194px;
    background-blend-mode: lighten, normal;
    content: "";
  }
`;

const OrganizerTileContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > :first-child {
    margin-bottom: 16px;
  }
`;

const OrganizerName = styled.p`
  color: #002ff4;
  font-size: 1.25rem;
  font-family: "MuseoModerno";
  font-weight: 500;
  line-height: 25px;
`;

const OrganizerTile: React.FC<OrganizerTileProps> = ({ name, src, alt }) => {
  return (
    <OrganizerTileContainer>
      <ImageWrapper>
        <HexagonImg src={src} alt={alt} />
      </ImageWrapper>

      <OrganizerName>{name}</OrganizerName>
    </OrganizerTileContainer>
  );
};

export default OrganizerTile;
