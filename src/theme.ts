// @ts-nocheck

import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  typography: {
    fontFamily: ["Segoe UI", "Roboto", "sans-serif"],
  },
  palette: {},
  shadows: [],
  overrides: {
    MuiButton: {},
    MuiFilledInput: {},
    MuiDialog: {},
    MuiDialogActions: {},
    MuiDialogTitle: {},
  },
});

export default theme;
