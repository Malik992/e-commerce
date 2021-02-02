import { colors, rgba } from "./_utils";
import { ThemeOptions } from "@material-ui/core/styles/createMuiTheme";

const displayInitial = {
  display: "initial",
};

const displayFlexAndCenter = {
  display: "flex",
  alignItems: "center",
};

export const muiTheme: ThemeOptions = {
  typography: {
    // Use the system font instead of the default Roboto font.
  },
  palette: {
    primary: {
      main: colors.blue,
    },
    secondary: {
      main: colors.blueLight,
    },
  },
  overrides: {
    MuiButton: {
      root: {
        fontSize: "1.1rem",
        letterSpacing: "0.06rem",
        padding: "0.3rem 1.5rem",
        textTransform: "none",
      },
      contained: {
        boxShadow: "none",
      },
      outlined: {
        padding: "0.3rem 1.5rem",
      },
      containedPrimary: {
        border: "2px solid transparent",
        color: "#fff",
        backgroundColor: colors.blue,
      },
      containedSecondary: {
        border: "2px solid #fff",
        color: colors.blueLight,
        backgroundColor: "#fff",
        "&:hover": {
          backgroundColor: colors.grayLighter,
          borderColor: colors.grayLighter,
        },
      },
      outlinedPrimary: {
        border: `2px solid ${colors.blue}`,
        color: colors.blue,
        "&:hover": {
          border: `2px solid ${colors.blue}`,
        },
      },
      outlinedSecondary: {
        border: `2px solid #fff`,
        color: "#fff",
        "&:hover": {
          border: `2px solid #fff`,
          backgroundColor: rgba(colors.blue, 0.08),
        },
      },
    },
    MuiTable: {
      root: { display: "flex", alignItems: "stretch", flexDirection: "column" },
    },
    MuiTableBody: {
      root: { display: "flex", flexDirection: "column" },
    },
    MuiTableFooter: { root: displayInitial },
    MuiTableHead: { root: displayFlexAndCenter },
    MuiTableRow: {
      root: {
        ...displayFlexAndCenter,
        height: "auto",
        justifyContent: "space-between",
        width: "100%",
      },
    },
    MuiTableCell: {
      root: {
        display: "flex",
        "box-sizing": "border-box",
        borderBottom: "none",
        padding: "0 0.6rem",
        hyphens: "auto",
        wordBreak: "break-word",
        "&:last-child": {
          paddingRight: "none",
        },
      },
    },
  },
};
