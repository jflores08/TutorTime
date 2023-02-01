"use strict";
exports.id = 267;
exports.ids = [267];
exports.modules = {

/***/ 3887:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "M": () => (/* binding */ CourseCardGrid)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mui/material/Grid"
var Grid_ = __webpack_require__(5612);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
// EXTERNAL MODULE: external "@mui/material/Container"
var Container_ = __webpack_require__(4475);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "@mui/material/Card"
var Card_ = __webpack_require__(8167);
var Card_default = /*#__PURE__*/__webpack_require__.n(Card_);
// EXTERNAL MODULE: external "@mui/material/CardContent"
var CardContent_ = __webpack_require__(8455);
var CardContent_default = /*#__PURE__*/__webpack_require__.n(CardContent_);
// EXTERNAL MODULE: external "@mui/material/CardMedia"
var CardMedia_ = __webpack_require__(6731);
var CardMedia_default = /*#__PURE__*/__webpack_require__.n(CardMedia_);
// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(3819);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
;// CONCATENATED MODULE: ./src/components/HomepageComponents/CourseGrid/CourseInfoCard.tsx
// Import React components

// Import MUI compments





// import CardCover from "@mui/joy/CardCover";

// import Box from "@mui/material/Box";

// Import Custom components
// import Link from "../Link";
// import NextLink from "../Link";
const CourseInfoCard = ({ title , label , imageSource , studentCount , resourceURL  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx((Card_default()), {
        elevation: 12,
        sx: {
            maxHeight: "330px",
            maxWidth: "297px",
            borderRadius: "16px"
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Link, {
            href: "/",
            underline: "none",
            sx: {
                height: "320px"
            },
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                    id: "courseTitleText",
                    variant: "h6",
                    component: "div",
                    color: "#ffffffff",
                    sx: {
                        position: "absolute",
                        fontSize: {
                            lg: 21,
                            md: 21,
                            sm: 21,
                            xs: 21
                        },
                        mt: "10px",
                        ml: "10px"
                    },
                    children: title
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((CardMedia_default()), {
                    component: "img",
                    alt: "Course Image",
                    height: "220px",
                    width: "310px",
                    image: imageSource
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((CardContent_default()), {
                    id: "cardFooter",
                    sx: {
                        // position: "absolute",
                        bgBlur: "#0f111466",
                        bottom: 0,
                        px: "8px"
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                        sx: {
                            display: "flex",
                            justifyContent: "space-between",
                            m: 1
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Typography, {
                                sx: {
                                    color: "#000000",
                                    fontSize: {
                                        lg: 18,
                                        md: 18,
                                        sm: 18,
                                        xs: 18
                                    }
                                },
                                children: [
                                    studentCount,
                                    " Students"
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                    sx: {
                                        justifyContent: "center",
                                        bgcolor: "#0072F5"
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                        sx: {
                                            color: "#d1d1d1",
                                            fontWeight: "700",
                                            fontSize: {
                                                lg: 12,
                                                md: 12,
                                                sm: 12,
                                                xs: 12
                                            }
                                        },
                                        children: "Enroll"
                                    })
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const CourseGrid_CourseInfoCard = (CourseInfoCard);
{
/* <Box
            // direction={"row"}
            sx={{
              width: "410px",
              display: "flex",
              justifynContent: "space-between",
            }}
          >
            <Typography
              sx={{
                color: "#000000",
                fontSize: { lg: 18, md: 18, sm: 18, xs: 12 },
              }}
            >
              {studentCount} Students
            </Typography>
            <Box>
              <Button
                sx={{
                  justifyContent: "center",
                  // ml: { lg: "140px", md: "100px", sm: "100px", xs: "60px" },
                  bgcolor: "#0072F5",
                }}
              >
                <Typography
                  sx={{
                    color: "#d1d1d1",
                    fontWeight: "700",
                    fontSize: { lg: 12, md: 12, sm: 12, xs: 8 },
                  }}
                >
                  Enroll
                </Typography>
              </Button>
            </Box>
          </Box> */ }
;// CONCATENATED MODULE: ./src/data/courseData.tsx
const courseData = [
    {
        label: "COURSE",
        title: "Learn Next.js",
        // imageURL: "https://littlevisuals.co/images/red_dawn.jpg",
        imageSource: "/courseCard/images/red_dawn.jpeg",
        studentCount: "3,500",
        resourceURL: "/#"
    },
    {
        label: "COURSE",
        title: "Learn Apollo Server",
        // imageURL: "https://littlevisuals.co/images/sunset.jpg",
        imageSource: "/courseCard/images/sunset.jpeg",
        studentCount: "1,000",
        resourceURL: "/#"
    },
    {
        label: "COURSE",
        title: "Create a Startup",
        // imageURL: "https://littlevisuals.co/images/tail.jpg",
        imageSource: "/courseCard/images/tail.jpeg",
        studentCount: "5,000",
        resourceURL: "/#"
    }
];


;// CONCATENATED MODULE: ./src/components/HomepageComponents/CourseGrid/CourseCardGrid.tsx
// Import react components

// Import Next.js components
// import { Grid } from "@nextui-org/react";
// Import MUI components



// Import custom components

//Import custom data

const CourseCardGrid = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
        id: "courseCardGridSectionBox",
        sx: {
            bgcolor: "#FFFFFF",
            width: "100%",
            display: "flex"
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx((Container_default()), {
            maxWidth: "xl",
            id: "courseCardGridContainer",
            sx: {
                bgcolor: "#FFFFFF",
                display: "flex",
                // flexDirection: "row",
                // alignItems: "center",
                // justifyContent: "center",
                mt: "30px"
            },
            children: /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                id: "courseCardGridBox",
                sx: {
                    width: "100%",
                    ml: "24px",
                    mr: "24px"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    container: true,
                    id: "courseInfoCardGrid",
                    children: courseData.map((courseContent, index)=>/*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                            item: true,
                            xs: 12,
                            sm: 12,
                            md: 4,
                            lg: 4,
                            sx: {
                                minWidth: "100px",
                                display: "flex",
                                justifyContent: "center",
                                mt: {
                                    xs: "8px"
                                },
                                mb: "30px"
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx(CourseGrid_CourseInfoCard, {
                                title: courseContent.title,
                                label: courseContent.label,
                                imageSource: courseContent.imageSource,
                                studentCount: courseContent.studentCount,
                                resourceURL: courseContent.resourceURL
                            })
                        }, index))
                })
            })
        })
    });
};



/***/ }),

/***/ 9708:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "d": () => (/* binding */ PriceCardGrid)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mui/material/Grid"
var Grid_ = __webpack_require__(5612);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
// EXTERNAL MODULE: external "@mui/material/Container"
var Container_ = __webpack_require__(4475);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(3819);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: external "@mui/material/Card"
var Card_ = __webpack_require__(8167);
var Card_default = /*#__PURE__*/__webpack_require__.n(Card_);
// EXTERNAL MODULE: external "@mui/material/CardActions"
var CardActions_ = __webpack_require__(3691);
var CardActions_default = /*#__PURE__*/__webpack_require__.n(CardActions_);
// EXTERNAL MODULE: external "@mui/material/CardContent"
var CardContent_ = __webpack_require__(8455);
var CardContent_default = /*#__PURE__*/__webpack_require__.n(CardContent_);
// EXTERNAL MODULE: external "@mui/material/CardHeader"
var CardHeader_ = __webpack_require__(9361);
var CardHeader_default = /*#__PURE__*/__webpack_require__.n(CardHeader_);
// EXTERNAL MODULE: external "@mui/icons-material/StarBorder"
var StarBorder_ = __webpack_require__(5327);
var StarBorder_default = /*#__PURE__*/__webpack_require__.n(StarBorder_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
;// CONCATENATED MODULE: ./src/components/HomepageComponents/PriceGrid/PriceCard.tsx
// Import React components


// Import Mui components









const PriceCard = ({ title , subheader , price , description , buttonText , href , // externalLink,
buttonVariant , onClickHandler  })=>{
    const handleClick = ()=>{
        if (onClickHandler) {
            onClickHandler();
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((CardHeader_default()), {
                title: title,
                subheader: subheader,
                titleTypographyProps: {
                    align: "center"
                },
                action: title === "Pro" ? /*#__PURE__*/ jsx_runtime_.jsx((StarBorder_default()), {}) : null,
                subheaderTypographyProps: {
                    align: "center"
                },
                sx: {
                    minHeight: "88px",
                    backgroundColor: (theme)=>theme.palette.mode === "light" ? theme.palette.grey[200] : theme.palette.grey[700]
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardContent_default()), {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                        sx: {
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "baseline",
                            mb: 2
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                                component: "h2",
                                variant: "h3",
                                color: "text.primary",
                                children: [
                                    "$",
                                    price
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                variant: "h6",
                                color: "text.secondary",
                                children: "/mo"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                        children: description.map((line)=>/*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                component: "li",
                                variant: "subtitle1",
                                align: "center",
                                children: line
                            }, line))
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((CardActions_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Link, {
                    underline: "none",
                    href: href,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                        fullWidth: true,
                        variant: buttonVariant,
                        children: buttonText
                    })
                })
            })
        ]
    });
};


;// CONCATENATED MODULE: ./src/data/priceTierData.tsx
const priceTierData = [
    {
        title: "Free",
        price: 0,
        description: [
            "10 users included",
            "2 GB of storage",
            "Help center access",
            "Email support"
        ],
        buttonText: "Sign up for free",
        href: "/#",
        buttonVariant: "outlined"
    },
    {
        title: "Pro",
        subheader: "Most popular",
        price: 15,
        description: [
            "20 users included",
            "10 GB of storage",
            "Help center access",
            "Priority email support"
        ],
        buttonText: "Get started",
        href: "/#",
        buttonVariant: "contained"
    },
    {
        title: "Enterprise",
        price: 30,
        description: [
            "50 users included",
            "30 GB of storage",
            "Help center access",
            "Phone & email support"
        ],
        buttonText: "Contact us",
        href: "/#",
        buttonVariant: "outlined"
    }
];


;// CONCATENATED MODULE: ./src/components/HomepageComponents/PriceGrid/PriceCardGrid.tsx
// Import react components

// Import Next.js components
// import { Grid } from "@nextui-org/react";
// Import MUI components



// Import custom components

//Import custom data

const PriceCardGrid = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
        id: "priceGridSectionBox",
        sx: {
            bgcolor: "#FFFFFF",
            width: "100%",
            display: "flex"
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx((Container_default()), {
            maxWidth: "xl",
            id: "priceCardGridContainer",
            sx: {
                bgcolor: "#FFFFFF",
                display: "flex",
                mt: "30px"
            },
            children: /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                id: "priceCardGridBox",
                sx: {
                    width: "100%",
                    ml: "24px",
                    mr: "24px"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                    container: true,
                    id: "priceCardGrid",
                    children: priceTierData.map((priceCardContent, index)=>/*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                            item: true,
                            xs: 12,
                            sm: 12,
                            md: 4,
                            lg: 4,
                            sx: {
                                minWidth: "200px",
                                display: "flex",
                                justifyContent: "center",
                                mt: {
                                    xs: "8px"
                                },
                                mb: "30px"
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx(PriceCard, {
                                title: priceCardContent.title,
                                subheader: priceCardContent.subheader,
                                price: priceCardContent.price,
                                description: priceCardContent.description,
                                buttonText: priceCardContent.buttonText,
                                href: priceCardContent.href,
                                buttonVariant: priceCardContent.buttonVariant
                            })
                        }, index))
                })
            })
        })
    });
};



/***/ }),

/***/ 2640:
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
        spacing: "40px",
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
                        src: "/CoffeeCoding-logo.png",
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
        textKey: "Learning Platform",
        path: "/#"
    },
    {
        textKey: "Community",
        path: "/#"
    },
    {
        textKey: "Contact Us",
        path: "/#"
    },
    {
        textKey: "Appointemt",
        path: "/appointment"
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
            })
        ]
    });
}


/***/ })

};
;