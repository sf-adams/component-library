import { recipe } from "@vanilla-extract/recipes";

import { vars } from "../../themes/theme.css";

export const buttonStyle = recipe({
  base: {
    border: "none",
    borderRadius: "8px",
    color: "#ffffff",
  },
  variants: {
    color: {
      primary: {backgroundColor: vars.colors.primary},
      secondary: { backgroundColor: vars.colors.secondary }
    }
  }
});