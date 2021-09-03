import styled from "styled-components";
import Box from "@material-ui/core/Box";

const StyledSectionWrapper = styled(Box)`
  background: #021037;
  color: white;
  font-size: x-large;
  height: 148px;
  width: 100%;
`;

const SectionsWrapper: React.FC = ({ children, ...props }) => {
  return <StyledSectionWrapper {...props}>{children}</StyledSectionWrapper>;
};

export default SectionsWrapper;
