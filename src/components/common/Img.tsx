import styled, { StyledProps, css } from "styled-components";

export interface ImageProps {
  src: string;
  alt: string;
  role?: string;
  width?: number | string;
  height?: number | string;
  mode?: ImageModes;
}

/** stretch sets 100% width on the img, inherit or undefined uses only max-width: 100% */
export type ImageModes = "stretch" | "inherit";

const Image = styled.img(
  ({ $mode }: StyledProps<{ $mode?: ImageModes }>) => css`
    display: block;
    height: auto;
    max-width: 100%;

    ${$mode === "stretch" &&
    css`
      width: 100%;
    `}
  `
);

const Img: React.FC<ImageProps> = ({ src, alt, mode, ...props }) => (
  <Image src={src} alt={alt} $mode={mode} loading="lazy" {...props} />
);

export default Img;
