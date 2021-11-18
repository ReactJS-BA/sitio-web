import styled, { css, StyledProps } from "styled-components";
import { Button, ButtonProps } from "@material-ui/core";

export interface ButtonBaseProps extends ButtonProps {
  to?: string;
  hasMultipleWords?: boolean;
}

/**
 * Use this component for the four different button variants:
 * Primary (color="primary")
 * - Primary contrast (color="default")
 * Secondary (variant="outlined")
 * Tertiary (color="secondary")
 * Link (variant="text")
 */
const StyledButton = styled(({ hasMultipleWords, ...props }) => (
  <Button {...props} />
))(
  ({ hasMultipleWords }: StyledProps<ButtonBaseProps>) => css`
    z-index: 1;
    padding: ${hasMultipleWords ? `10px 30px` : `10px 60px`};

    @media (max-width: 960px) {
      padding: ${hasMultipleWords ? `10px 30px` : `10px 60px`};
    }

    .MuiButton-startIcon {
      margin-right: 12px;
      margin-left: -12px;
    }

    .MuiButton-endIcon {
      margin-left: 12px;
    }
  `
);

export const ButtonBase = <C extends React.ElementType>({
  children,
  to,
  endIcon,
  variant = "contained",
  color = "primary",
  ...props
}: ButtonBaseProps & ButtonProps<C, { component?: C }>) => {
  const childContainsMultipleWords =
    typeof children === "string" && children.trim().split(" ").length > 1;

  return (
    <StyledButton
      {...props}
      hasMultipleWords={childContainsMultipleWords}
      endIcon={endIcon}
      variant={variant}
      color={color}
      role={to && "link"}
      to={to}
      disableElevation
      disableRipple
    >
      {children}
    </StyledButton>
  );
};

export default ButtonBase;
