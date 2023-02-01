(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 1123:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MyApp)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(6764);
;// CONCATENATED MODULE: external "@nextui-org/react"
const react_namespaceObject = require("@nextui-org/react");
;// CONCATENATED MODULE: external "@mui/material/styles"
const styles_namespaceObject = require("@mui/material/styles");
;// CONCATENATED MODULE: external "@mui/material/CssBaseline"
const CssBaseline_namespaceObject = require("@mui/material/CssBaseline");
var CssBaseline_default = /*#__PURE__*/__webpack_require__.n(CssBaseline_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/colors"
const colors_namespaceObject = require("@mui/material/colors");
;// CONCATENATED MODULE: ./src/theme.ts


//Create a theme instance.
let theme = (0,styles_namespaceObject.createTheme)({
    breakpoints: {
        values: {
            xs: 0,
            sm: 640,
            md: 1024,
            lg: 1200,
            xl: 1536
        }
    },
    palette: {
        primary: {
            main: "#263238"
        },
        secondary: {
            main: "#19857b"
        },
        error: {
            main: colors_namespaceObject.red.A400
        }
    },
    typography: {
        fontFamily: [
            "Poppins"
        ].join(","),
        h1: {
            fontSize: "3.6rem"
        },
        h2: {
            fontSize: "2.71rem"
        },
        h4: {
            fontSize: "1.5rem",
            fontWeight: "400"
        },
        h6: {
            fontSize: "1.14rem"
        },
        h7: {
            fontWeight: "500",
            fontSize: "32px",
            letterSpacing: "1px"
        },
        h8: {
            fontWeight: "500",
            fontSize: "24px",
            letterSpacing: "1px"
        },
        bodyLarge: {
            fontWeight: "400",
            fontSize: "24px",
            letterSpacing: "1px"
        },
        bodyMedium: {
            fontWeight: "500",
            fontSize: "18px",
            letterSpacing: "1px"
        },
        bodyRegular: {
            fontWeight: "400",
            fontSize: "18px",
            letterSpacing: "1px"
        },
        bodySmall: {
            fontWeight: "400",
            fontSize: "16px",
            letterSpacing: "1px"
        },
        bodyExtraSmall: {
            fontWeight: "400",
            fontSize: "14px",
            letterSpacing: "1px"
        },
        bodyExtraExtraSmall: {
            fontWeight: "400",
            fontSize: "12px",
            letterSpacing: "1px"
        },
        linkLarge: {
            fontWeight: "600",
            fontSize: "24px",
            letterSpacing: "1px"
        },
        linkMedium: {
            fontWeight: "700",
            fontSize: "18px",
            letterSpacing: "1px"
        },
        linkSmall: {
            fontWeight: "600",
            fontSize: "16px",
            letterSpacing: "1px"
        },
        linkExtraSmall: {
            fontWeight: "600",
            fontSize: "14px",
            letterSpacing: "1px"
        },
        buttonLarge: {
            fontWeight: "400",
            fontSize: "18px",
            letterSpacing: "1px"
        },
        buttonSmall: {
            fontWeight: "400",
            fontSize: "16px",
            letterSpacing: "1px"
        },
        buttonExtraSmall: {
            fontWeight: "500",
            fontSize: "13px",
            letterSpacing: "1px"
        },
        overlineLabel: {
            fontWeight: "700",
            letterSpacing: "0px"
        }
    },
    components: {
        MuiButton: {
            variants: [
                {
                    props: {
                        variant: "primary"
                    },
                    style: {
                        textTransform: "none",
                        width: "199px",
                        height: "48px",
                        backgroundColor: "#263238",
                        color: "#F4FBFE",
                        borderRadius: "50px",
                        fontSize: "18px"
                    }
                },
                {
                    props: {
                        variant: "secondary"
                    },
                    style: {
                        textTransform: "none",
                        width: "199px",
                        height: "48px",
                        color: "#263238",
                        borderRadius: "50px",
                        fontSize: "18px",
                        fontWeight: "400",
                        border: "1px solid #263238",
                        "&:hover": {
                            border: "1px solid #5A6859"
                        }
                    }
                },
                {
                    props: {
                        variant: "customDisabled"
                    },
                    style: {
                        textTransform: "none",
                        maxWidth: "199px",
                        height: "48px",
                        backgroundColor: "#D1D5DB",
                        color: "#F4FBFE",
                        borderRadius: "50px",
                        cursor: "not-allowed"
                    }
                },
                {
                    props: {
                        variant: "outlined"
                    },
                    style: {
                        textTransform: "none",
                        maxWidth: "199px",
                        height: "48px",
                        color: "Black",
                        borderRadius: "50px"
                    }
                },
                {
                    props: {
                        variant: "pressed"
                    },
                    style: {
                        textTransform: "none",
                        width: "199px",
                        height: "48px",
                        backgroundColor: "#424D3E",
                        color: "#F4FBFE",
                        borderRadius: "50px"
                    }
                },
                {
                    props: {
                        variant: "menuButton"
                    },
                    style: {
                        textTransform: "none",
                        width: "199px",
                        height: "48px",
                        backgroundColor: "#1F2937",
                        color: "#F4FBFE",
                        borderRadius: "50px"
                    }
                },
                {
                    props: {
                        variant: "signUp"
                    },
                    style: {
                        textTransform: "none",
                        width: "104px",
                        height: "32px",
                        color: "#566551",
                        borderRadius: "50px",
                        border: "1px solid #566551"
                    }
                }
            ],
            styleOverrides: {
                root: ({ ownerState  })=>({
                        ...ownerState.variant !== "customDisabled" && {
                            "&:hover": {
                                backgroundColor: "#9DB794"
                            }
                        },
                        ...ownerState.variant === "customDisabled" && {
                            "&:hover": {
                                backgroundColor: "#D1D5DB",
                                cursor: "not-allowed"
                            }
                        }
                    })
            }
        }
    }
});
theme = (0,styles_namespaceObject.responsiveFontSizes)(theme);
/* harmony default export */ const src_theme = (theme);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "@mui/joy/styles"
const joy_styles_namespaceObject = require("@mui/joy/styles");
;// CONCATENATED MODULE: external "@mui/icons-material/DarkMode"
const DarkMode_namespaceObject = require("@mui/icons-material/DarkMode");
;// CONCATENATED MODULE: external "@mui/icons-material/LightMode"
const LightMode_namespaceObject = require("@mui/icons-material/LightMode");
;// CONCATENATED MODULE: external "@mui/joy/IconButton"
const IconButton_namespaceObject = require("@mui/joy/IconButton");
;// CONCATENATED MODULE: ./pages/_app.tsx



// Used to manage localization in the app
// import { NextIntlProvider } from 'next-intl'
// Import MUI components


// Import Custom components

// Import JoyUI components




// Icons



const ModeToggle = ()=>{
    const { mode , setMode  } = useColorScheme();
    const [mounted, setMounted] = React.useState(false);
    React.useEffect(()=>{
        setMounted(true);
    }, []);
    if (!mounted) {
        return null;
    }
    return /*#__PURE__*/ _jsx(IconButton, {
        onClick: ()=>setMode(mode === "dark" ? "light" : "dark"),
        children: mode === "dark" ? /*#__PURE__*/ _jsx(DarkMode, {}) : /*#__PURE__*/ _jsx(LightMode, {})
    });
};
const muiTheme = (0,styles_namespaceObject.experimental_extendTheme)();
const joyTheme = (0,joy_styles_namespaceObject.extendTheme)({
    cssVarPrefix: "mui",
    colorSchemes: {
        light: {
            palette: {
                primary: {
                    ...colors_namespaceObject.blue,
                    solidColor: "var(--mui-palette-primary-contrastText)",
                    solidBg: "var(--mui-palette-primary-main)",
                    solidHoverBg: "var(--mui-palette-primary-dark)",
                    plainColor: "var(--mui-palette-primary-main)",
                    plainHoverBg: "rgba(var(--mui-palette-primary-mainChannel) / var(--mui-palette-action-hoverOpacity))",
                    plainActiveBg: "rgba(var(--mui-palette-primary-mainChannel) / 0.3)",
                    outlinedBorder: "rgba(var(--mui-palette-primary-mainChannel) / 0.5)",
                    outlinedColor: "var(--mui-palette-primary-main)",
                    outlinedHoverBg: "rgba(var(--mui-palette-primary-mainChannel) / var(--mui-palette-action-hoverOpacity))",
                    outlinedHoverBorder: "var(--mui-palette-primary-main)",
                    outlinedActiveBg: "rgba(var(--mui-palette-primary-mainChannel) / 0.3)"
                },
                neutral: {
                    ...colors_namespaceObject.grey
                },
                divider: "var(--mui-palette-divider)",
                text: {
                    tertiary: "rgba(0 0 0 / 0.56)"
                }
            }
        },
        dark: {
            palette: {
                primary: {
                    ...colors_namespaceObject.blue,
                    solidColor: "var(--mui-palette-primary-contrastText)",
                    solidBg: "var(--mui-palette-primary-main)",
                    solidHoverBg: "var(--mui-palette-primary-dark)",
                    plainColor: "var(--mui-palette-primary-main)",
                    plainHoverBg: "rgba(var(--mui-palette-primary-mainChannel) / var(--mui-palette-action-hoverOpacity))",
                    plainActiveBg: "rgba(var(--mui-palette-primary-mainChannel) / 0.3)",
                    outlinedBorder: "rgba(var(--mui-palette-primary-mainChannel) / 0.5)",
                    outlinedColor: "var(--mui-palette-primary-main)",
                    outlinedHoverBg: "rgba(var(--mui-palette-primary-mainChannel) / var(--mui-palette-action-hoverOpacity))",
                    outlinedHoverBorder: "var(--mui-palette-primary-main)",
                    outlinedActiveBg: "rgba(var(--mui-palette-primary-mainChannel) / 0.3)"
                },
                neutral: {
                    ...colors_namespaceObject.grey
                },
                divider: "var(--mui-palette-divider)",
                text: {
                    tertiary: "rgba(255 255 255 / 0.5)"
                }
            }
        }
    },
    fontFamily: {
        display: '"Roboto","Helvetica","Arial",sans-serif',
        body: '"Roboto","Helvetica","Arial",sans-serif'
    },
    shadow: {
        xs: `var(--mui-shadowRing), ${muiTheme.shadows[1]}`,
        sm: `var(--mui-shadowRing), ${muiTheme.shadows[2]}`,
        md: `var(--mui-shadowRing), ${muiTheme.shadows[4]}`,
        lg: `var(--mui-shadowRing), ${muiTheme.shadows[8]}`,
        xl: `var(--mui-shadowRing), ${muiTheme.shadows[12]}`
    }
});
const darkTheme = (0,react_namespaceObject.createTheme)({
    type: "dark"
});
function MyApp({ Component , pageProps  }) {
    return(// <CssVarsProvider theme={deepmerge(joyTheme, muiTheme)}>
    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styles_namespaceObject.ThemeProvider, {
        theme: src_theme,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((CssBaseline_default()), {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        ]
    }));
}


/***/ }),

/***/ 6764:
/***/ (() => {



/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1123));
module.exports = __webpack_exports__;

})();