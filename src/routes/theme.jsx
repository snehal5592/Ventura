import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "'Sora', sans-serif",
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: "'Sora', sans-serif",
        },
      },
    },
  },
});

export default theme;
