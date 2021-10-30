import styled from "styled-components";

interface ImgProps {
  src: string;
  alt: string;
  role?: string;
  width?: number;
  height?: number;
  id?: string;
  className?: string;
}

const Image = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
`;

const Img: React.FC<ImgProps> = ({ src, alt, ...props }) => (
  <Image src={src} alt={alt} {...props} loading="lazy" />
);

export default Img;
