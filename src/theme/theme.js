import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    blueAccent: {
      100: "#151632",
      200: "#2a2d64",
      300: "#3e4396",
      400: "#535ac8",
      500: "#6870fa",
      600: "#868dfb",
      700: "#a4a9fc",
      800: "#c3c6fd",
      900: "#e1e2fe",
    },

    mainAccent: {
      100: "#58595e",
      200: "#FDFDFD",
      300: "#077F83",
      400: "#9ee7fe",
      500: "#fee2ff",
    },
  },

  components: {
    // MuiChip: {
    //   styleOverrides: {
    //     root: {
    //       backgroundColor: "#077f83",
    //       color: "#fff",
    //     },
    //   },
    // },
  },
});

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    blueAccent: {
      100: "#e1e2fe",
      200: "#c3c6fd",
      300: "#a4a9fc",
      400: "#868dfb",
      500: "#6870fa",
      600: "#535ac8",
      700: "#3e4396",
      800: "#2a2d64",
      900: "#151632",
    },

    mainAccent: {
      100: "#D0D1D5",
      200: "#474343",
      300: "#ffdb00",
      400: "#070026",
      500: "#fee2ff",
    },
  },

  components: {
    // MuiChip: {
    //   styleOverrides: {
    //     root: {
    //       backgroundColor: "#077f83",
    //     },
    //   },
    // },
  },
});
