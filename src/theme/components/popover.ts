import { createMultiStyleConfigHelpers } from "@chakra-ui/vue-next";

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(["container", "header", "body", "closebutton"]);

export const Popover = defineMultiStyleConfig({
  baseStyle: definePartsStyle({
    container: {
      bg: "bg",
      border: "1px solid",
      shadow: "md",
      rounded: "sm",
      maxW: "250px",
    },
    header: {
      fontWeight: "bold",
      padding: "0.5rem 1rem",
    },
    body: {
      px: 4,
      py: 3,
    },
    closebutton: {
      position: "absolute",
      top: 2,
      right: 2,
    },
  }),
});
