import React from "react";
import styled, { css } from "styled-components";

import { Box } from "@material-ui/core";

import Img, { ImageProps } from "src/components/common/Img";

interface PolygonTileProps extends ImageProps {
  name: string;
  isGradientBackground?: boolean;
}

const PolygonImg = styled(Img)`
  height: 194px;
  width: 184px;
  object-fit: cover;
  object-position: center;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
`;

const ImageWrapper = styled.div<{ $isLinearGradient?: boolean }>(
  ({ $isLinearGradient }) => css`
    &:after {
      display: block;
      position: relative;
      height: 194px;
      width: 184px;
      clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
      margin-top: -194px;
      content: "";

      ${$isLinearGradient &&
      css`
        background-image: linear-gradient(
          0deg,
          rgba(229, 50, 48, 0.6),
          rgba(229, 50, 48, 0.6)
        );

        background-blend-mode: lighten, normal;
      `}
    }
  `
);

const PolygonTileContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > :first-child {
    margin-bottom: 16px;
  }
`;

const PolygonItemName = styled.p`
  color: #002ff4;
  font-size: 1.25rem;
  font-family: "MuseoModerno";
  font-weight: 500;
  line-height: 25px;
`;

const PolygonTile: React.FC<PolygonTileProps> = ({
  name,
  src,
  alt,
  isGradientBackground = false,
}) => {
  const currentName = `@${name.trim().replace(/\s/g, "")}`;

  return (
    <PolygonTileContainer>
      <ImageWrapper $isLinearGradient={isGradientBackground}>
        <PolygonImg src={src} alt={alt} />
      </ImageWrapper>

      <PolygonItemName>{currentName}</PolygonItemName>
    </PolygonTileContainer>
  );
};

export default PolygonTile;
