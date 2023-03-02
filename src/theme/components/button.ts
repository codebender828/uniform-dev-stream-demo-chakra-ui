import { defineStyleConfig } from "@chakra-ui/vue-next";

export const Button: any = defineStyleConfig({
  baseStyle: {
    rounded: "md",
    fontFamily: "body",
  },
  variants: {
    primary: {
      borderBottomEndRadius: "0.6rem",
      borderTopStartRadius: "0.6rem",
      borderTopEndRadius: 0,
      borderBottomStartRadius: 0,
      bg: "velvet.500",
      color: "white",
    },
    secondary: {
      borderBottomEndRadius: "0.6rem",
      borderTopStartRadius: "0.6rem",
      borderTopEndRadius: 0,
      borderBottomStartRadius: 0,
      bg: "transparent",
      color: "velvet.500",
      borderColor: "currentColor",
      borderWidth: "1px",
      borderStyle: "solid",
    },
  },
  defaultProps: {
    variant: "primary",
    size: "lg",
  },
});
