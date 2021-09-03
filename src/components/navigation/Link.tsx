import styled from "styled-components";

export interface LinkProps {
  href: string;
  alt?: string;
}

const StyledLink = styled.a`
  color: gainsboro;
  min-width: 70px;
  min-height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Link: React.FC<LinkProps> = ({ href, children, ...props }) => (
  <StyledLink href={href} {...props}>
    {children}
  </StyledLink>
);

export default Link;
