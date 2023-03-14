"use strict";
exports.id = 535;
exports.ids = [535];
exports.modules = {

/***/ 535:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ DashboardLayout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "@mui/material/AppBar"
var AppBar_ = __webpack_require__(3882);
var AppBar_default = /*#__PURE__*/__webpack_require__.n(AppBar_);
// EXTERNAL MODULE: external "@mui/material/Toolbar"
var Toolbar_ = __webpack_require__(1431);
var Toolbar_default = /*#__PURE__*/__webpack_require__.n(Toolbar_);
// EXTERNAL MODULE: external "@mui/material/Container"
var Container_ = __webpack_require__(4475);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);
// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(3819);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: external "@mui/material/Stack"
var Stack_ = __webpack_require__(8742);
var Stack_default = /*#__PURE__*/__webpack_require__.n(Stack_);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
// EXTERNAL MODULE: external "@mui/material/IconButton"
var IconButton_ = __webpack_require__(7934);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);
// EXTERNAL MODULE: external "@mui/material/Menu"
var Menu_ = __webpack_require__(8125);
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_);
// EXTERNAL MODULE: external "@mui/icons-material/Menu"
var icons_material_Menu_ = __webpack_require__(3365);
var icons_material_Menu_default = /*#__PURE__*/__webpack_require__.n(icons_material_Menu_);
// EXTERNAL MODULE: external "@mui/material/MenuItem"
var MenuItem_ = __webpack_require__(9271);
var MenuItem_default = /*#__PURE__*/__webpack_require__.n(MenuItem_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
;// CONCATENATED MODULE: ./src/components/TopNavigation/MobileNavMenu.tsx


// import { useTranslations } from "next-intl";







const MobileNavMenu = ({ page_hrefs  })=>{
    //   const t = useTranslations("NavBar");
    const [anchorElNav, setAnchorElNav] = (0,external_react_.useState)(null);
    const handleOpenNavMenu = (event)=>{
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = ()=>{
        setAnchorElNav(null);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
        sx: {
            flexGrow: 1,
            display: {
                md: "none",
                xs: "flex",
                lg: "none"
            }
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                size: "large",
                "aria-label": "account of current user",
                "aria-controls": "menu-appbar",
                "aria-haspopup": "true",
                onClick: handleOpenNavMenu,
                // color="inherit"
                sx: {
                    color: "#1967D2"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx((icons_material_Menu_default()), {})
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Menu_default()), {
                id: "menu-appbar",
                anchorEl: anchorElNav,
                anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "left"
                },
                keepMounted: true,
                transformOrigin: {
                    vertical: "top",
                    horizontal: "left"
                },
                open: Boolean(anchorElNav),
                onClose: handleCloseNavMenu,
                sx: {
                    display: {
                        xs: "block",
                        md: "none"
                    }
                },
                children: [
                    page_hrefs.map((link, index)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: link.path,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    textAlign: "center",
                                    children: link.textKey
                                })
                            })
                        }, index)),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        //   underline="none"
                        target: "_blank",
                        href: "https://calendly.com/toon-equip/equip-introductie",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                            children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                textAlign: "center",
                                children: "Request Appointment"
                            })
                        }, "Request Appointment")
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const TopNavigation_MobileNavMenu = (MobileNavMenu);

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/components/TopNavigation/LeftNavPart.tsx

// Import Next.js components





const LeftNavPart = ({ pages  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Stack_default()), {
        direction: "row",
        // spacing="40px"
        alignItems: "center",
        //   justifyContent="center"
        sx: {
            flexGrow: 1
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                // alignItems="center"
                sx: {
                    width: "130px",
                    mr: {
                        xs: "24px",
                        lg: "120px"
                    }
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Link, {
                    href: "/",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: "/logos/EruditeEndeavors-logo.png",
                        alt: "tutor-logo",
                        width: 130,
                        height: 46
                    })
                })
            }, "appBarLogo"),
            pages.map((link, index)=>/*#__PURE__*/ jsx_runtime_.jsx(material_.Link, {
                    href: link.path,
                    underline: "none",
                    color: "#000000",
                    sx: {
                        pl: {
                            xs: "0px",
                            md: "64px",
                            lg: "120px"
                        }
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        variant: "h6",
                        component: "div",
                        sx: {
                            display: {
                                xs: "none",
                                md: "flex"
                            },
                            mx: {
                                xs: "0px",
                                lg: "20px"
                            }
                        },
                        children: link.textKey
                    })
                }, index))
        ]
    });
};


;// CONCATENATED MODULE: ./src/components/TopNavigation/ResponsiveNavMenu.tsx
// Import React components

// import { useTranslations } from "next-intl";
//Import MUI components






//Import custom components
// import Link from "../Link";


// const page_hrefs: Ipage_href[] = [
//   { textKey: "navLink 1", path: "/#" },
//   { textKey: "navLink 2", path: "/#" },
//   { textKey: "navLink 3", path: "/#" },
// ];
const page_hrefs = [
    {
        textKey: "Home",
        path: "/#"
    },
    {
        textKey: "Community",
        path: "/#"
    },
    {
        textKey: "Contact Us",
        path: "/#"
    }
];
const ResponsiveNavBar = ()=>{
    // Import NavBar translations
    // const t = useTranslations("NavBar");
    return(// <AppBar
    //   position="static"
    //   sx={{
    //     paddingTop: "20px",
    //     paddingLeft: "16px",
    //     // bgColor: "#ffffffff",
    //   }}
    //   elevation={0}
    // >
    /*#__PURE__*/ jsx_runtime_.jsx((AppBar_default()), {
        position: "static",
        sx: {
            bgcolor: "#FFFFFF",
            paddingTop: "30px"
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx((Container_default()), {
            maxWidth: "xl",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Toolbar_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(LeftNavPart, {
                        pages: page_hrefs
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Stack_default()), {
                        direction: "row-reverse",
                        // alignItems="center"
                        // justifyContent={"flex-end"}
                        spacing: "40px",
                        sx: {
                            display: {
                                xs: "none",
                                md: "flex"
                            }
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Link, {
                            target: "_blank",
                            href: "/",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                sx: {
                                    display: {
                                        xs: "none",
                                        md: "flex"
                                    },
                                    width: "210px",
                                    height: "60px",
                                    borderRadius: 50,
                                    textTransform: "none",
                                    fontSize: "1.14rem"
                                },
                                disableElevation: true,
                                size: "large",
                                variant: "contained",
                                color: "primary",
                                children: "Sign Up"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Stack_default()), {
                        direction: "row-reverse",
                        alignItems: "center",
                        spacing: "40px",
                        sx: {
                            display: {
                                sm: "flex",
                                xs: "flex",
                                md: "none"
                            }
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(TopNavigation_MobileNavMenu, {
                            page_hrefs: page_hrefs
                        })
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const ResponsiveNavMenu = (ResponsiveNavBar);

// EXTERNAL MODULE: external "@mui/material/Grid"
var Grid_ = __webpack_require__(5612);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);
;// CONCATENATED MODULE: ./src/components/Copyright.tsx
// Import MUI components


function Copyright() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
        variant: "body1",
        children: [
            "Copyright \xa9 ",
            new Date().getFullYear(),
            ".",
            " Erudite Endeavors - All rights reserved"
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/Footer.tsx
// Import React components

// Import Next.js components

// import { useTranslations } from "next-intl";
// Import MUI components





// Import custom components
// import Link from "./Link";

const footer_hrefs = [
    {
        textKey: "Home",
        path: "/#"
    },
    {
        textKey: "Community",
        path: "/#"
    },
    {
        textKey: "Contact Us",
        path: "/#"
    }
];
const Footer = ({ pages , bgColor ="#F5F5F5"  })=>{
    // Import Footer text translations
    //   const t = useTranslations("Footer");
    return /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
        bgcolor: bgColor,
        children: /*#__PURE__*/ jsx_runtime_.jsx((Container_default()), {
            maxWidth: "xl",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                container: true,
                display: "flex",
                padding: "30px",
                spacing: 2,
                sx: {
                    minHeight: "300px"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                        item: true,
                        xs: 12,
                        md: 2,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: "/logos/EruditeEndeavors-logo.png",
                            alt: "tutor-logo",
                            width: 260,
                            height: 92
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                        item: true,
                        xs: 12,
                        md: 0,
                        lg: 0,
                        xl: 0.5
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                        item: true,
                        xs: 12,
                        md: 5,
                        lg: 5,
                        xl: 3.5,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "h6",
                                    sx: {
                                        display: {
                                            xs: "block",
                                            sm: "inline-block",
                                            md: "inline-block"
                                        },
                                        mb: {
                                            xs: "25px",
                                            md: "25px"
                                        }
                                    },
                                    children: "Erudite Endeavors Inc."
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Link, {
                                    href: "mailto:info@equip.money",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                        variant: "h6",
                                        sx: {
                                            display: {
                                                xs: "block",
                                                sm: "inline-block",
                                                md: "inline-block"
                                            },
                                            mb: {
                                                xs: "25px",
                                                md: "25px"
                                            }
                                        },
                                        children: "EruditeEndeavors@gmail.com"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "h6",
                                    sx: {
                                        display: {
                                            xs: "block",
                                            sm: "inline-block",
                                            md: "inline-block"
                                        },
                                        mb: {
                                            xs: "25px",
                                            md: "25px"
                                        }
                                    },
                                    children: "698 Nobel Ave"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "h6",
                                    sx: {
                                        display: {
                                            xs: "block",
                                            sm: "inline-block",
                                            md: "inline-block"
                                        },
                                        mb: {
                                            xs: "25px",
                                            md: "25px"
                                        }
                                    },
                                    children: "Santa Cruz, CA"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "h6",
                                    sx: {
                                        display: {
                                            xs: "block",
                                            sm: "inline-block",
                                            md: "inline-block"
                                        },
                                        mb: {
                                            xs: "25px",
                                            md: "25px"
                                        }
                                    },
                                    children: "91790"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                        item: true,
                        xs: 12,
                        md: 4,
                        lg: 4,
                        xl: 3,
                        children: footer_hrefs.map((link, index)=>/*#__PURE__*/ jsx_runtime_.jsx(material_.Link, {
                                href: link.path,
                                underline: "none",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "h6",
                                    component: "div",
                                    sx: {
                                        mb: "25px"
                                    },
                                    children: link.textKey
                                })
                            }, index))
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                        item: true,
                        xs: 12,
                        md: 3,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Link, {
                                target: "_blank",
                                href: "/pdf_files/Equip_Privacy_Policy_July_2022.pdf",
                                style: {
                                    textDecoration: "none"
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "h6",
                                    component: "div",
                                    sx: {
                                        mb: "25px"
                                    },
                                    children: "Privacy Policy"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Link, {
                                target: "_blank",
                                href: "/pdf_files/Equip_Terms_of_Service_August_2022.pdf",
                                style: {
                                    textDecoration: "none"
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "h6",
                                    component: "div",
                                    sx: {
                                        mb: "25px"
                                    },
                                    children: "Terms of Service"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                        item: true,
                        xs: 12,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Copyright, {})
                    })
                ]
            })
        })
    });
};
// export async function getStaticProps({ locale }: GetStaticPropsContext) {
//   return {
//     props: {
//       messages: (await import(`../../messages/${locale}.json`)).default,
//     },
//   };
// }
/* harmony default export */ const components_Footer = (Footer);

;// CONCATENATED MODULE: ./src/coreVariables.tsx
const pages = [
    {
        name: "Learning Platform",
        path: "/#"
    },
    {
        name: "Community",
        path: "/#"
    },
    {
        name: "Contact Us",
        path: "/#"
    }
];


;// CONCATENATED MODULE: ./src/components/Layout.tsx
// Import Next.js components


// Import custom components



// Import MUI components

function DashboardLayout({ children  }) {
    const router = (0,router_.useRouter)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                sx: {
                    flexGrow: 1,
                    bgcolor: "#FFFFFF"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(ResponsiveNavMenu, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Footer, {
                pages: pages
            })
        ]
    });
}


/***/ })

};
;