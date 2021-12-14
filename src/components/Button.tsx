import { Button as ButtonStyle } from "./Button.style";

type Props = React.PropsWithChildren<{
  size: "lg" | "md" | "sm";
}>;

// morgan

const style = {
  width: "140px",
};

const Button = ({ children, size }: Props) => {
  if (size === "lg") {
    style.width = "240px";
  }

  return <ButtonStyle style={style}>{children}</ButtonStyle>;
};

export default Button;
