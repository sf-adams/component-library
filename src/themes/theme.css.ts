import { createThemeContract, createGlobalTheme } from "@vanilla-extract/css";

const emptyTheme = {
  colors: {
    primary: "#000000",
    secondary: "#000000",
  },
};

export const vars = createThemeContract(emptyTheme);

export const theme = createGlobalTheme(":root", vars, {
  colors: {
    primary: "#FFD300",
    secondary: "#FF0000",
  },
});
