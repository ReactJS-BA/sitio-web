import Button, {
  ButtonProps as MuiButtonProps,
} from "@material-ui/core/Button";

interface ButtonProps extends MuiButtonProps {
  to?: string;
}

/**
 * Use this component for the four different button variants:
 * Primary (color="primary")
 * - Primary contrast (color="default")
 * Secondary (variant="outlined")
 * Tertiary (color="secondary")
 * Link (variant="text")
 */
export const ButtonBase = <C extends React.ElementType>({
  children,
  to,
  href,
  target,
  role,
  rel,
  variant = "contained",
  color = "primary",
  ...props
}: ButtonProps & MuiButtonProps<C, { component?: C }>) => {
  const btnRel = target === "_blank" ? "noopener noreferrer" : rel;
  const button = (
    <Button
      {...props}
      variant={variant}
      color={color}
      role={role}
      to={to}
      href={href}
      target={target}
      rel={btnRel}
      disableElevation
      disableRipple
    >
      {children}
    </Button>
  );

  return button;
};

export default ButtonBase;
