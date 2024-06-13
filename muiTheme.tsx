import type { CSSProperties } from "react";

// import { KeyboardArrowDown } from "@mui/icons-material"
import { createTheme, responsiveFontSizes, alpha } from "@mui/material/styles";

// import "@fontsource-variable/inter";
// import "@fontsource/dm-serif-display";

// import RomieRegularWoff2 from "../../static/fonts/Romie/Romie-Regular.woff2"
// import RomieRegularWoff from "../../static/fonts/Romie/Romie-Regular.woff"
// import RomieBoldWoff2 from "../../static/fonts/Romie/Romie-Bold.woff2"
// import RomieBoldWoff from "../../static/fonts/Romie/Romie-Bold.woff"
// import RomieBlackWoff2 from "../../static/fonts/Romie/Romie-Black.woff2"
// import RomieBlackWoff from "../../static/fonts/Romie/Romie-Black.woff"

// @ts-ignore
// import cursor from "../../static/images/cursor.svg";

// Setup default theme variables (colors, typography, spacing, etc.)
let theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
      "2xl": 1566,
      "3xl": 1920,
    },
  },
  //   components: {
  //     MuiCssBaseline: {
  //       styleOverrides: {
  //         "@global": `
  //           @font-face {
  //             font-family: "Romie";
  //             font-style: normal;
  //             font-display: swap;
  //             font-weight: 400;
  //             src: url('${RomieRegularWoff2}') format('woff2'), url('${RomieRegularWoff}') format('woff');
  //           }

  //           @font-face {
  //             font-family: "Romie";
  //             font-style: normal;
  //             font-display: swap;
  //             font-weight: 700;
  //             src: url('${RomieBoldWoff2}') format('woff2'), url('${RomieBoldWoff}') format('woff');
  //           }

  //           @font-face {
  //             font-family: "Romie";
  //             font-style: normal;
  //             font-display: swap;
  //             font-weight: 900;
  //             src: url('${RomieBlackWoff2}') format('woff2'), url('${RomieBlackWoff}') format('woff');
  //           }
  //         `,
  //       },
  //     },
  //   },
  palette: {
    red: {
      main: "red",
    },
    primary: {
      main: "#CE491C",
    },
    "primary.900": {
      main: "#CE491C",
    },
    "primary.800": {
      main: "#F05B2A",
    },
    "primary.400": {
      main: "#F8BCAA",
    },
    "primary.300": {
      main: "#FDEEE9",
    },
    "primary.200": {
      main: "#FEF6F4",
    },
    "secondary.900": {
      main: "#233558",
    },
    "secondary.800": {
      main: "#31456B",
    },
    "secondary.300": {
      main: "#DAE7F1",
    },
    "secondary.200": {
      main: "#F0F5F9",
    },
    "tertiary.900": {
      main: "#E7DBBC",
    },
    "tertiary.800": {
      main: "#F3EAD2",
    },
    "tertiary.300": {
      main: "#F9F4E8",
    },
    "tertiary.200": {
      main: "#FCFAF3",
    },
    "tertiary.100": {
      main: "#FEFEFC",
    },
    "neutral.900": {
      main: "#000000",
    },
    "neutral.800": {
      main: "#373638",
    },
    "neutral.700": {
      main: "#464446",
    },
    "neutral.300": {
      main: "#DADADA",
    },
    "neutral.200": {
      main: "#ECECEC",
    },
    "neutral.100": {
      main: "#FFFFFF",
    },
  },
  spacing: (factor: number) => `${0.25 * factor}rem`,
  transitions: {
    duration: {
      standard: 350,
    },
  },
  typography: {
    fontFamily: [
      "'Inter Variable'",
      "'DM Serif Display'",
      "'Helvetica Neue'",
      "Arial",
      "BlinkMacSystemFont",
      "sans-serif",
    ].join(","),
    fontSize: 15,
    "heading.3xl": {
      fontFamily: "'Romie', 'DM Serif Display', sans-serif",
      fontSize: "92px",
      fontWeight: 900,
      lineHeight: 1.2,
    },
    "heading.2xl": {
      fontFamily: "'Romie', 'DM Serif Display', sans-serif",
      fontSize: "48px",
      fontWeight: 900,
      lineHeight: 1.2,
    },
    "heading.xl": {
      fontFamily: "'Romie', 'DM Serif Display', sans-serif",
      fontSize: "42px",
      fontWeight: 900,
      lineHeight: 1.3,
    },
    "heading.lg": {
      fontFamily: "'Romie', 'DM Serif Display', Times, sans-serif",
      fontSize: "28px",
      fontWeight: 900,
      lineHeight: 1.2,
    },
    "heading.md": {
      fontFamily: "'Romie', 'DM Serif Display', Times, sans-serif",
      fontSize: "22px",
      fontWeight: 700,
      lineHeight: 1.3,
    },
    "heading.sm": {
      fontFamily: "'Inter Variable', sans-serif",
      fontSize: "22px",
      fontWeight: 400,
      lineHeight: 1.3,
    },
    "body.lg": {
      fontFamily: "'Inter Variable', sans-serif",
      fontSize: "18px",
      fontWeight: 400,
      lineHeight: 1.6,
      letterSpacing: "0.02em",
    },
    "body.md": {
      fontFamily: "'Inter Variable', sans-serif",
      fontSize: "15px",
      fontWeight: 400,
      lineHeight: 1.9,
    },
    "body.sm": {
      fontFamily: "'Inter Variable', sans-serif",
      fontSize: "12px",
      fontWeight: 400,
      lineHeight: 1.8,
    },
    "body.xs": {
      fontFamily: "'Inter Variable', sans-serif",
      fontSize: "10px",
      fontWeight: 400,
      lineHeight: 1.4,
    },
    "link.lg": {
      fontFamily: "'Inter Variable', sans-serif",
      fontSize: "18px",
      fontWeight: 400,
      lineHeight: 1,
    },
    "link.md": {
      fontFamily: "'Inter Variable', sans-serif",
      fontSize: "15px",
      fontWeight: 400,
      lineHeight: 1,
    },
    "link.sm": {
      fontFamily: "'Inter Variable', sans-serif",
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: 1,
    },
    "link.xs": {
      fontFamily: "'Inter Variable', sans-serif",
      fontSize: "12px",
      fontWeight: 400,
      lineHeight: 1,
    },
  },
});

// Setup default theme overrides for theme variables (default font color, font responsiveness, etc.)
theme = createTheme(theme, {
  palette: {
    text: {
      primary: theme.palette["red"].main,
    },
  },
  typography: {
    ...theme.typography,
    "heading.3xl": {
      ...theme.typography["heading.3xl"],
      [theme.breakpoints.down("md")]: {
        fontSize: "42px",
        lineHeight: 1.1,
      },
    },
    "heading.2xl": {
      ...theme.typography["heading.2xl"],
      [theme.breakpoints.down("md")]: {
        fontSize: "28px",
        lineHeight: 1.2,
      },
    },
    "heading.xl": {
      ...theme.typography["heading.xl"],
      [theme.breakpoints.down("md")]: {
        fontSize: "24px",
        lineHeight: 1.3,
      },
    },
    "heading.lg": {
      ...theme.typography["heading.lg"],
      [theme.breakpoints.down("md")]: {
        fontSize: "22px",
        lineHeight: 1.2,
      },
    },
    "heading.md": {
      ...theme.typography["heading.md"],
      [theme.breakpoints.down("md")]: {
        fontSize: "16px",
        lineHeight: 1.2,
      },
    },
    "heading.sm": {
      ...theme.typography["heading.sm"],
      [theme.breakpoints.down("md")]: {
        fontSize: "16px",
        lineHeight: 1.3,
      },
    },
    "body.lg": {
      ...theme.typography["body.lg"],
      [theme.breakpoints.down("md")]: {
        fontSize: "14px",
        lineHeight: 1.6,
      },
    },
    "body.md": {
      ...theme.typography["body.md"],
      [theme.breakpoints.down("md")]: {
        fontSize: "12px",
        lineHeight: 1.8,
      },
    },
    "body.sm": {
      ...theme.typography["body.sm"],
      [theme.breakpoints.down("md")]: {
        fontSize: "10px",
        lineHeight: 2,
      },
    },
    "body.xs": {
      ...theme.typography["body.xs"],
      [theme.breakpoints.down("md")]: {
        fontSize: "8px",
        lineHeight: 1.2,
      },
    },
    "link.lg": {
      ...theme.typography["link.lg"],
      [theme.breakpoints.down("md")]: {
        fontSize: "14px",
      },
    },
    "link.md": {
      ...theme.typography["link.md"],
      [theme.breakpoints.down("md")]: {
        fontSize: "12px",
      },
    },
    "link.sm": {
      ...theme.typography["link.sm"],
      [theme.breakpoints.down("md")]: {
        fontSize: "12px",
      },
    },
    "link.xs": {
      ...theme.typography["link.xs"],
      [theme.breakpoints.down("md")]: {
        fontSize: "10px",
      },
    },
  },
});

// Setup default component overrides
theme = createTheme(theme, {
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          color: theme.palette["neutral.700"].main,
          //   cursor: `url("${cursor}"), auto`,
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#001425",
          fontSize: "0.875rem",
          lineHeight: "18px",
        },
        outlined: {
          transform: "translate(16px, 75%) scale(1)",
          "&.MuiInputLabel-shrink": {
            transform: "translate(16px, -8px) scale(0.75)",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
        notchedOutline: {
          borderColor: "#ccc",
          borderRadius: 0,
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        input: {
          paddingBottom: "16px",
        },
        underline: {
          "&:after": {
            bottom: 0,
            borderBottom: "2px solid #001425",
          },
        },
      },
    },
    MuiSelect: {
      //   defaultProps: {
      //     IconComponent: (props: any) => <KeyboardArrowDown {...props} />,
      //   },
      styleOverrides: {
        outlined: {
          borderRadius: "0",
          fontSize: "0.875rem",
          lineHeight: "21px",
          padding: "0.75rem 2.5rem 0.75rem 1rem",
          paddingRight: "3rem!important",
        },
        icon: {
          right: "16px",
          fill: "#002145",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          paddingLeft: 0,
          paddingRight: 0,
          textTransform: "none",
          "&.Mui-selected": {
            color: theme.palette["neutral.700"].main,
            paddingLeft: 0,
            paddingRight: 0,
          },
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          "&:before": {
            content: "none",
          },
          "&.Mui-expanded": {
            boxShadow: `0 0 8px ${alpha(
              theme.palette["secondary.800"].main,
              0.1
            )}`,
            borderRadius: theme.spacing(1.5),
            zIndex: 2,
            margin: 0,
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          padding: theme.spacing(7),
          borderBottom: `1px solid ${theme.palette["neutral.200"].main}`,
          [theme.breakpoints.down("md")]: {
            padding: theme.spacing(7, 4),
          },
        },
        content: {
          margin: 0,
          "&.Mui-expanded": {
            margin: 0,
          },
        },
      },
    },
  },
});

// module augmentation for custom variables in palette, typography, etc.
declare module "@mui/material/styles" {
  // Palette Module Augmentation
  interface Palette {
    "primary.900": Palette["primary"];
    "primary.800": Palette["primary"];
    "primary.400": Palette["primary"];
    "primary.300": Palette["primary"];
    "primary.200": Palette["primary"];
    "secondary.900": Palette["primary"];
    "secondary.800": Palette["primary"];
    "secondary.300": Palette["primary"];
    "secondary.200": Palette["primary"];
    "tertiary.900": Palette["primary"];
    "tertiary.800": Palette["primary"];
    "tertiary.300": Palette["primary"];
    "tertiary.200": Palette["primary"];
    "tertiary.100": Palette["primary"];
    "neutral.900": Palette["primary"];
    "neutral.800": Palette["primary"];
    "neutral.700": Palette["primary"];
    "neutral.300": Palette["primary"];
    "neutral.200": Palette["primary"];
    "neutral.100": Palette["primary"];
  }

  interface PaletteOptions {
    "primary.900"?: PaletteOptions["primary"];
    "primary.800"?: PaletteOptions["primary"];
    "primary.400"?: PaletteOptions["primary"];
    "primary.300"?: PaletteOptions["primary"];
    "primary.200"?: PaletteOptions["primary"];
    "secondary.900"?: PaletteOptions["primary"];
    "secondary.800"?: PaletteOptions["primary"];
    "secondary.300"?: PaletteOptions["primary"];
    "secondary.200"?: PaletteOptions["primary"];
    "tertiary.900"?: PaletteOptions["primary"];
    "tertiary.800"?: PaletteOptions["primary"];
    "tertiary.300"?: PaletteOptions["primary"];
    "tertiary.200"?: PaletteOptions["primary"];
    "tertiary.100"?: PaletteOptions["primary"];
    "neutral.900"?: PaletteOptions["primary"];
    "neutral.800"?: PaletteOptions["primary"];
    "neutral.700"?: PaletteOptions["primary"];
    "neutral.300"?: PaletteOptions["primary"];
    "neutral.200"?: PaletteOptions["primary"];
    "neutral.100"?: PaletteOptions["primary"];
  }

  // Typography Module Augmentation
  interface TypographyVariants {
    "heading.3xl": CSSProperties;
    "heading.2xl": CSSProperties;
    "heading.xl": CSSProperties;
    "heading.lg": CSSProperties;
    "heading.md": CSSProperties;
    "heading.sm": CSSProperties;
    "body.lg": CSSProperties;
    "body.md": CSSProperties;
    "body.sm": CSSProperties;
    "body.xs": CSSProperties;
    "link.lg": CSSProperties;
    "link.md": CSSProperties;
    "link.sm": CSSProperties;
    "link.xs": CSSProperties;
  }

  interface TypographyVariantsOptions {
    "heading.3xl"?: CSSProperties;
    "heading.2xl"?: CSSProperties;
    "heading.xl"?: CSSProperties;
    "heading.lg"?: CSSProperties;
    "heading.md"?: CSSProperties;
    "heading.sm"?: CSSProperties;
    "body.lg"?: CSSProperties;
    "body.md"?: CSSProperties;
    "body.sm"?: CSSProperties;
    "body.xs"?: CSSProperties;
    "link.lg"?: CSSProperties;
    "link.md"?: CSSProperties;
    "link.sm"?: CSSProperties;
    "link.xs"?: CSSProperties;
  }

  // module augmentation for custom variations in breakpoints
  interface BreakpointOverrides {
    "2xl": true;
    "3xl": true;
  }
}

// module augmentation for custom variations in typography
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    "heading.3xl": true;
    "heading.2xl": true;
    "heading.xl": true;
    "heading.lg": true;
    "heading.md": true;
    "heading.sm": true;
    "body.lg": true;
    "body.md": true;
    "body.sm": true;
    "body.xs": true;
    "link.lg": true;
    "link.md": true;
    "link.sm": true;
    "link.xs": true;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    "theme.primary": true;
    "theme.secondary": true;
    "theme.tertiary": true;
    "theme.quaternary": true;
  }
}

theme = responsiveFontSizes(theme);
export default theme;
