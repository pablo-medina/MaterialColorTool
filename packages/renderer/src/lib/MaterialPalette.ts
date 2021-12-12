export interface ColorPalette {
    [hue: string]: ColorHue
}

export interface ColorHue {
    [shade: string]: ColorShade
}

export interface ColorShade {
    color: ColorDef,
    text: ColorDef
}

export interface ColorDef {
    normal: string,
    light: string,
    dark: string
}

const MATERIAL_COLOR_DEF: ColorPalette =
{
    "red": {
        "50": {
            "color": {
                "normal": "#ffebee",
                "light": "#ffffff",
                "dark": "#ccb9bc"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "100": {
            "color": {
                "normal": "#ffcdd2",
                "light": "#ffffff",
                "dark": "#cb9ca1"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "200": {
            "color": {
                "normal": "#ef9a9a",
                "light": "#ffcccb",
                "dark": "#ba6b6c"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "300": {
            "color": {
                "normal": "#e57373",
                "light": "#ffa4a2",
                "dark": "#af4448"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#ffffff"
            }
        },
        "400": {
            "color": {
                "normal": "#ef5350",
                "light": "#ff867c",
                "dark": "#b61827"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#ffffff"
            }
        },
        "500": {
            "color": {
                "normal": "#f44336",
                "light": "#ff7961",
                "dark": "#ba000d"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#ffffff"
            }
        },
        "600": {
            "color": {
                "normal": "#e53935",
                "light": "#ff6f60",
                "dark": "#ab000d"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#ffffff"
            }
        },
        "700": {
            "color": {
                "normal": "#d32f2f",
                "light": "#ff6659",
                "dark": "#9a0007"
            },
            "text": {
                "normal": "#ffffff",
                "light": "#000000",
                "dark": "#ffffff"
            }
        },
        "800": {
            "color": {
                "normal": "#c62828",
                "light": "#ff5f52",
                "dark": "#8e0000"
            },
            "text": {
                "normal": "#ffffff",
                "light": "#000000",
                "dark": "#ffffff"
            }
        },
        "900": {
            "color": {
                "normal": "#b71c1c",
                "light": "#f05545",
                "dark": "#7f0000"
            },
            "text": {
                "normal": "#ffffff",
                "light": "#000000",
                "dark": "#ffffff"
            }
        },
        "a100": {
            "color": {
                "normal": "#ff8a80",
                "light": "#ffbcaf",
                "dark": "#c85a54"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "a200": {
            "color": {
                "normal": "#ff5252",
                "light": "#ff867f",
                "dark": "#c50e29"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#ffffff"
            }
        },
        "a400": {
            "color": {
                "normal": "#ff1744",
                "light": "#ff616f",
                "dark": "#c4001d"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#ffffff"
            }
        },
        "a700": {
            "color": {
                "normal": "#d50000",
                "light": "#ff5131",
                "dark": "#9b0000"
            },
            "text": {
                "normal": "#ffffff",
                "light": "#000000",
                "dark": "#ffffff"
            }
        }
    },
    "pink": {
        "50": {
            "color": {
                "normal": "#fce4ec",
                "light": "#ffffff",
                "dark": "#c9b2ba"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "100": {
            "color": {
                "normal": "#f8bbd0",
                "light": "#ffeeff",
                "dark": "#c48b9f"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "200": {
            "color": {
                "normal": "#f48fb1",
                "light": "#ffc1e3",
                "dark": "#bf5f82"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "300": {
            "color": {
                "normal": "#f06292",
                "light": "#ff94c2",
                "dark": "#ba2d65"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#ffffff"
            }
        },
        "400": {
            "color": {
                "normal": "#ec407a",
                "light": "#ff77a9",
                "dark": "#b4004e"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#ffffff"
            }
        },
        "500": {
            "color": {
                "normal": "#e91e63",
                "light": "#ff6090",
                "dark": "#b0003a"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#ffffff"
            }
        },
        "600": {
            "color": {
                "normal": "#d81b60",
                "light": "#ff5c8d",
                "dark": "#a00037"
            },
            "text": {
                "normal": "#ffffff",
                "light": "#000000",
                "dark": "#ffffff"
            }
        },
        "700": {
            "color": {
                "normal": "#c2185b",
                "light": "#fa5788",
                "dark": "#8c0032"
            },
            "text": {
                "normal": "#ffffff",
                "light": "#000000",
                "dark": "#ffffff"
            }
        },
        "800": {
            "color": {
                "normal": "#ad1457",
                "light": "#e35183",
                "dark": "#78002e"
            },
            "text": {
                "normal": "#ffffff",
                "light": "#000000",
                "dark": "#ffffff"
            }
        },
        "900": {
            "color": {
                "normal": "#880e4f",
                "light": "#bc477b",
                "dark": "#560027"
            },
            "text": {
                "normal": "#ffffff",
                "light": "#ffffff",
                "dark": "#ffffff"
            }
        },
        "a100": {
            "color": {
                "normal": "#ff80ab",
                "light": "#ffb2dd",
                "dark": "#c94f7c"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "a200": {
            "color": {
                "normal": "#ff4081",
                "light": "#ff79b0",
                "dark": "#c60055"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#ffffff"
            }
        },
        "a400": {
            "color": {
                "normal": "#f50057",
                "light": "#ff5983",
                "dark": "#bb002f"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#ffffff"
            }
        },
        "a700": {
            "color": {
                "normal": "#c51162",
                "light": "#fd558f",
                "dark": "#8e0038"
            },
            "text": {
                "normal": "#ffffff",
                "light": "#000000",
                "dark": "#ffffff"
            }
        }
    },
    "purple": {
        "50": {
            "color": {
                "normal": "#f3e5f5",
                "light": "#ffffff",
                "dark": "#c0b3c2"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "100": {
            "color": {
                "normal": "#e1bee7",
                "light": "#fff1ff",
                "dark": "#af8eb5"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "200": {
            "color": {
                "normal": "#ce93d8",
                "light": "#ffc4ff",
                "dark": "#9c64a6"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "300": {
            "color": {
                "normal": "#ba68c8",
                "light": "#ee98fb",
                "dark": "#883997"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#ffffff"
            }
        },
        "400": {
            "color": {
                "normal": "#ab47bc",
                "light": "#df78ef",
                "dark": "#790e8b"
            },
            "text": {
                "normal": "#ffffff",
                "light": "#000000",
                "dark": "#ffffff"
            }
        },
        "500": {
            "color": {
                "normal": "#9c27b0",
                "light": "#d05ce3",
                "dark": "#6a0080"
            },
            "text": {
                "normal": "#ffffff",
                "light": "#000000",
                "dark": "#ffffff"
            }
        },
        "600": {
            "color": {
                "normal": "#8e24aa",
                "light": "#c158dc",
                "dark": "#5c007a"
            },
            "text": {
                "normal": "#ffffff",
                "light": "#000000",
                "dark": "#ffffff"
            }
        },
        "700": {
            "color": {
                "normal": "#7b1fa2",
                "light": "#ae52d4",
                "dark": "#4a0072"
            },
            "text": {
                "normal": "#ffffff",
                "light": "#000000",
                "dark": "#ffffff"
            }
        },
        "800": {
            "color": {
                "normal": "#6a1b9a",
                "light": "#9c4dcc",
                "dark": "#38006b"
            },
            "text": {
                "normal": "#ffffff",
                "light": "#ffffff",
                "dark": "#ffffff"
            }
        },
        "900": {
            "color": {
                "normal": "#4a148c",
                "light": "#7c43bd",
                "dark": "#12005e"
            },
            "text": {
                "normal": "#ffffff",
                "light": "#ffffff",
                "dark": "#ffffff"
            }
        },
        "a100": {
            "color": {
                "normal": "#ea80fc",
                "light": "#ffb2ff",
                "dark": "#b64fc8"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "a200": {
            "color": {
                "normal": "#e040fb",
                "light": "#ff79ff",
                "dark": "#aa00c7"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#ffffff"
            }
        },
        "a400": {
            "color": {
                "normal": "#d500f9",
                "light": "#ff5bff",
                "dark": "#9e00c5"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#ffffff"
            }
        },
        "a700": {
            "color": {
                "normal": "#aa00ff",
                "light": "#e254ff",
                "dark": "#7200ca"
            },
            "text": {
                "normal": "#ffffff",
                "light": "#000000",
                "dark": "#ffffff"
            }
        }
    },
    "deepPurple": {
        "50": {
            "color": {
                "normal": "#ede7f6",
                "light": "#ffffff",
                "dark": "#bbb5c3"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "100": {
            "color": {
                "normal": "#d1c4e9",
                "light": "#fff7ff",
                "dark": "#a094b7"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "200": {
            "color": {
                "normal": "#b39ddb",
                "light": "#e6ceff",
                "dark": "#836fa9"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "300": {
            "color": {
                "normal": "#9575cd",
                "light": "#c7a4ff",
                "dark": "#65499c"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#ffffff"
            }
        },
        "400": {
            "color": {
                "normal": "#7e57c2",
                "light": "#b085f5",
                "dark": "#4d2c91"
            },
            "text": {
                "normal": "#ffffff",
                "light": "#000000",
                "dark": "#ffffff"
            }
        },
        "500": {
            "color": {
                "normal": "#673ab7",
                "light": "#9a67ea",
                "dark": "#320b86"
            },
            "text": {
                "normal": "#ffffff",
                "light": "#000000",
                "dark": "#ffffff"
            }
        },
        "600": {
            "color": {
                "normal": "#5e35b1",
                "light": "#9162e4",
                "dark": "#280680"
            },
            "text": {
                "normal": "#ffffff",
                "light": "#000000",
                "dark": "#ffffff"
            }
        },
        "700": {
            "color": {
                "normal": "#512da8",
                "light": "#8559da",
                "dark": "#140078"
            },
            "text": {
                "normal": "#ffffff",
                "light": "#ffffff",
                "dark": "#ffffff"
            }
        },
        "800": {
            "color": {
                "normal": "#4527a0",
                "light": "#7953d2",
                "dark": "#000070"
            },
            "text": {
                "normal": "#ffffff",
                "light": "#ffffff",
                "dark": "#ffffff"
            }
        },
        "900": {
            "color": {
                "normal": "#311b92",
                "light": "#6746c3",
                "dark": "#000063"
            },
            "text": {
                "normal": "#ffffff",
                "light": "#ffffff",
                "dark": "#ffffff"
            }
        },
        "a100": {
            "color": {
                "normal": "#b388ff",
                "light": "#e7b9ff",
                "dark": "#805acb"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#ffffff"
            }
        },
        "a200": {
            "color": {
                "normal": "#7c4dff",
                "light": "#b47cff",
                "dark": "#3f1dcb"
            },
            "text": {
                "normal": "#ffffff",
                "light": "#000000",
                "dark": "#ffffff"
            }
        },
        "a400": {
            "color": {
                "normal": "#651fff",
                "light": "#a255ff",
                "dark": "#0100ca"
            },
            "text": {
                "normal": "#ffffff",
                "light": "#000000",
                "dark": "#ffffff"
            }
        },
        "a700": {
            "color": {
                "normal": "#6200ea",
                "light": "#9d46ff",
                "dark": "#0a00b6"
            },
            "text": {
                "normal": "#ffffff",
                "light": "#000000",
                "dark": "#ffffff"
            }
        }
    },
    "indigo": {
        "50": {
            "color": {
                "normal": "#e8eaf6",
                "light": "#ffffff",
                "dark": "#b6b8c3"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "100": {
            "color": {
                "normal": "#c5cae9",
                "light": "#f8fdff",
                "dark": "#9499b7"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "200": {
            "color": {
                "normal": "#9fa8da",
                "light": "#d1d9ff",
                "dark": "#6f79a8"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "300": {
            "color": {
                "normal": "#7986cb",
                "light": "#aab6fe",
                "dark": "#49599a"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#ffffff"
            }
        },
        "400": {
            "color": {
                "normal": "#5c6bc0",
                "light": "#8e99f3",
                "dark": "#26418f"
            },
            "text": {
                "normal": "#ffffff",
                "light": "#000000",
                "dark": "#ffffff"
            }
        },
        "500": {
            "color": {
                "normal": "#3f51b5",
                "light": "#757de8",
                "dark": "#002984"
            },
            "text": {
                "normal": "#ffffff",
                "light": "#000000",
                "dark": "#ffffff"
            }
        },
        "600": {
            "color": {
                "normal": "#3949ab",
                "light": "#6f74dd",
                "dark": "#00227b"
            },
            "text": {
                "normal": "#ffffff",
                "light": "#000000",
                "dark": "#ffffff"
            }
        },
        "700": {
            "color": {
                "normal": "#303f9f",
                "light": "#666ad1",
                "dark": "#001970"
            },
            "text": {
                "normal": "#ffffff",
                "light": "#ffffff",
                "dark": "#ffffff"
            }
        },
        "800": {
            "color": {
                "normal": "#283593",
                "light": "#5f5fc4",
                "dark": "#001064"
            },
            "text": {
                "normal": "#ffffff",
                "light": "#ffffff",
                "dark": "#ffffff"
            }
        },
        "900": {
            "color": {
                "normal": "#1a237e",
                "light": "#534bae",
                "dark": "#000051"
            },
            "text": {
                "normal": "#ffffff",
                "light": "#ffffff",
                "dark": "#ffffff"
            }
        },
        "a100": {
            "color": {
                "normal": "#8c9eff",
                "light": "#c0cfff",
                "dark": "#5870cb"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#ffffff"
            }
        },
        "a200": {
            "color": {
                "normal": "#536dfe",
                "light": "#8f9bff",
                "dark": "#0043ca"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#ffffff"
            }
        },
        "a400": {
            "color": {
                "normal": "#3d5afe",
                "light": "#8187ff",
                "dark": "#0031ca"
            },
            "text": {
                "normal": "#ffffff",
                "light": "#000000",
                "dark": "#ffffff"
            }
        },
        "a700": {
            "color": {
                "normal": "#304ffe",
                "light": "#7a7cff",
                "dark": "#0026ca"
            },
            "text": {
                "normal": "#ffffff",
                "light": "#000000",
                "dark": "#ffffff"
            }
        }
    },
    "blue": {
        "50": {
            "color": {
                "normal": "#e3f2fd",
                "light": "#ffffff",
                "dark": "#b1bfca"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "100": {
            "color": {
                "normal": "#bbdefb",
                "light": "#eeffff",
                "dark": "#8aacc8"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "200": {
            "color": {
                "normal": "#90caf9",
                "light": "#c3fdff",
                "dark": "#5d99c6"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "300": {
            "color": {
                "normal": "#64b5f6",
                "light": "#9be7ff",
                "dark": "#2286c3"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "400": {
            "color": {
                "normal": "#42a5f5",
                "light": "#80d6ff",
                "dark": "#0077c2"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#ffffff"
            }
        },
        "500": {
            "color": {
                "normal": "#2196f3",
                "light": "#6ec6ff",
                "dark": "#0069c0"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#ffffff"
            }
        },
        "600": {
            "color": {
                "normal": "#1e88e5",
                "light": "#6ab7ff",
                "dark": "#005cb2"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#ffffff"
            }
        },
        "700": {
            "color": {
                "normal": "#1976d2",
                "light": "#63a4ff",
                "dark": "#004ba0"
            },
            "text": {
                "normal": "#ffffff",
                "light": "#000000",
                "dark": "#ffffff"
            }
        },
        "800": {
            "color": {
                "normal": "#1565c0",
                "light": "#5e92f3",
                "dark": "#003c8f"
            },
            "text": {
                "normal": "#ffffff",
                "light": "#000000",
                "dark": "#ffffff"
            }
        },
        "900": {
            "color": {
                "normal": "#0d47a1",
                "light": "#5472d3",
                "dark": "#002171"
            },
            "text": {
                "normal": "#ffffff",
                "light": "#000000",
                "dark": "#ffffff"
            }
        },
        "a100": {
            "color": {
                "normal": "#82b1ff",
                "light": "#b6e3ff",
                "dark": "#4d82cb"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "a200": {
            "color": {
                "normal": "#448aff",
                "light": "#83b9ff",
                "dark": "#005ecb"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#ffffff"
            }
        },
        "a400": {
            "color": {
                "normal": "#2979ff",
                "light": "#75a7ff",
                "dark": "#004ecb"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#ffffff"
            }
        },
        "a700": {
            "color": {
                "normal": "#2962ff",
                "light": "#768fff",
                "dark": "#0039cb"
            },
            "text": {
                "normal": "#ffffff",
                "light": "#000000",
                "dark": "#ffffff"
            }
        }
    },
    "lightBlue": {
        "50": {
            "color": {
                "normal": "#e1f5fe",
                "light": "#ffffff",
                "dark": "#afc2cb"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "100": {
            "color": {
                "normal": "#b3e5fc",
                "light": "#e6ffff",
                "dark": "#82b3c9"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "200": {
            "color": {
                "normal": "#81d4fa",
                "light": "#b6ffff",
                "dark": "#4ba3c7"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "300": {
            "color": {
                "normal": "#4fc3f7",
                "light": "#8bf6ff",
                "dark": "#0093c4"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "400": {
            "color": {
                "normal": "#29b6f6",
                "light": "#73e8ff",
                "dark": "#0086c3"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "500": {
            "color": {
                "normal": "#03a9f4",
                "light": "#67daff",
                "dark": "#007ac1"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#ffffff"
            }
        },
        "600": {
            "color": {
                "normal": "#039be5",
                "light": "#63ccff",
                "dark": "#006db3"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#ffffff"
            }
        },
        "700": {
            "color": {
                "normal": "#0288d1",
                "light": "#5eb8ff",
                "dark": "#005b9f"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#ffffff"
            }
        },
        "800": {
            "color": {
                "normal": "#0277bd",
                "light": "#58a5f0",
                "dark": "#004c8c"
            },
            "text": {
                "normal": "#ffffff",
                "light": "#000000",
                "dark": "#ffffff"
            }
        },
        "900": {
            "color": {
                "normal": "#01579b",
                "light": "#4f83cc",
                "dark": "#002f6c"
            },
            "text": {
                "normal": "#ffffff",
                "light": "#000000",
                "dark": "#ffffff"
            }
        },
        "a100": {
            "color": {
                "normal": "#80d8ff",
                "light": "#b5ffff",
                "dark": "#49a7cc"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "a200": {
            "color": {
                "normal": "#40c4ff",
                "light": "#82f7ff",
                "dark": "#0094cc"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "a400": {
            "color": {
                "normal": "#00b0ff",
                "light": "#69e2ff",
                "dark": "#0081cb"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "a700": {
            "color": {
                "normal": "#0091ea",
                "light": "#64c1ff",
                "dark": "#0064b7"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#ffffff"
            }
        }
    },
    "cyan": {
        "50": {
            "color": {
                "normal": "#e0f7fa",
                "light": "#ffffff",
                "dark": "#aec4c7"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "100": {
            "color": {
                "normal": "#b2ebf2",
                "light": "#e5ffff",
                "dark": "#81b9bf"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "200": {
            "color": {
                "normal": "#80deea",
                "light": "#b4ffff",
                "dark": "#4bacb8"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "300": {
            "color": {
                "normal": "#4dd0e1",
                "light": "#88ffff",
                "dark": "#009faf"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "400": {
            "color": {
                "normal": "#26c6da",
                "light": "#6ff9ff",
                "dark": "#0095a8"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "500": {
            "color": {
                "normal": "#00bcd4",
                "light": "#62efff",
                "dark": "#008ba3"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "600": {
            "color": {
                "normal": "#00acc1",
                "light": "#5ddef4",
                "dark": "#007c91"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#ffffff"
            }
        },
        "700": {
            "color": {
                "normal": "#0097a7",
                "light": "#56c8d8",
                "dark": "#006978"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#ffffff"
            }
        },
        "800": {
            "color": {
                "normal": "#00838f",
                "light": "#4fb3bf",
                "dark": "#005662"
            },
            "text": {
                "normal": "#ffffff",
                "light": "#000000",
                "dark": "#ffffff"
            }
        },
        "900": {
            "color": {
                "normal": "#006064",
                "light": "#428e92",
                "dark": "#00363a"
            },
            "text": {
                "normal": "#ffffff",
                "light": "#000000",
                "dark": "#ffffff"
            }
        },
        "a100": {
            "color": {
                "normal": "#84ffff",
                "light": "#baffff",
                "dark": "#4bcbcc"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "a200": {
            "color": {
                "normal": "#18ffff",
                "light": "#76ffff",
                "dark": "#00cbcc"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "a400": {
            "color": {
                "normal": "#00e5ff",
                "light": "#6effff",
                "dark": "#00b2cc"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "a700": {
            "color": {
                "normal": "#00b8d4",
                "light": "#62ebff",
                "dark": "#0088a3"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        }
    },
    "teal": {
        "50": {
            "color": {
                "normal": "#e0f2f1",
                "light": "#ffffff",
                "dark": "#aebfbe"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "100": {
            "color": {
                "normal": "#b2dfdb",
                "light": "#e5ffff",
                "dark": "#82ada9"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "200": {
            "color": {
                "normal": "#80cbc4",
                "light": "#b2fef7",
                "dark": "#4f9a94"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "300": {
            "color": {
                "normal": "#4db6ac",
                "light": "#82e9de",
                "dark": "#00867d"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "400": {
            "color": {
                "normal": "#26a69a",
                "light": "#64d8cb",
                "dark": "#00766c"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#ffffff"
            }
        },
        "500": {
            "color": {
                "normal": "#009688",
                "light": "#52c7b8",
                "dark": "#00675b"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#ffffff"
            }
        },
        "600": {
            "color": {
                "normal": "#00897b",
                "light": "#4ebaaa",
                "dark": "#005b4f"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#ffffff"
            }
        },
        "700": {
            "color": {
                "normal": "#00796b",
                "light": "#48a999",
                "dark": "#004c40"
            },
            "text": {
                "normal": "#ffffff",
                "light": "#000000",
                "dark": "#ffffff"
            }
        },
        "800": {
            "color": {
                "normal": "#00695c",
                "light": "#439889",
                "dark": "#003d33"
            },
            "text": {
                "normal": "#ffffff",
                "light": "#000000",
                "dark": "#ffffff"
            }
        },
        "900": {
            "color": {
                "normal": "#004d40",
                "light": "#39796b",
                "dark": "#00251a"
            },
            "text": {
                "normal": "#ffffff",
                "light": "#ffffff",
                "dark": "#ffffff"
            }
        },
        "a100": {
            "color": {
                "normal": "#a7ffeb",
                "light": "#dbffff",
                "dark": "#75ccb9"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "a200": {
            "color": {
                "normal": "#64ffda",
                "light": "#9effff",
                "dark": "#14cba8"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "a400": {
            "color": {
                "normal": "#1de9b6",
                "light": "#6effe8",
                "dark": "#00b686"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "a700": {
            "color": {
                "normal": "#00bfa5",
                "light": "#5df2d6",
                "dark": "#008e76"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        }
    },
    "green": {
        "50": {
            "color": {
                "normal": "#e8f5e9",
                "light": "#ffffff",
                "dark": "#b6c2b7"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "100": {
            "color": {
                "normal": "#c8e6c9",
                "light": "#fbfffc",
                "dark": "#97b498"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "200": {
            "color": {
                "normal": "#a5d6a7",
                "light": "#d7ffd9",
                "dark": "#75a478"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "300": {
            "color": {
                "normal": "#81c784",
                "light": "#b2fab4",
                "dark": "#519657"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "400": {
            "color": {
                "normal": "#66bb6a",
                "light": "#98ee99",
                "dark": "#338a3e"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "500": {
            "color": {
                "normal": "#4caf50",
                "light": "#80e27e",
                "dark": "#087f23"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#ffffff"
            }
        },
        "600": {
            "color": {
                "normal": "#43a047",
                "light": "#76d275",
                "dark": "#00701a"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#ffffff"
            }
        },
        "700": {
            "color": {
                "normal": "#388e3c",
                "light": "#6abf69",
                "dark": "#00600f"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#ffffff"
            }
        },
        "800": {
            "color": {
                "normal": "#2e7d32",
                "light": "#60ad5e",
                "dark": "#005005"
            },
            "text": {
                "normal": "#ffffff",
                "light": "#000000",
                "dark": "#ffffff"
            }
        },
        "900": {
            "color": {
                "normal": "#1b5e20",
                "light": "#4c8c4a",
                "dark": "#003300"
            },
            "text": {
                "normal": "#ffffff",
                "light": "#000000",
                "dark": "#ffffff"
            }
        },
        "a100": {
            "color": {
                "normal": "#b9f6ca",
                "light": "#ecfffd",
                "dark": "#88c399"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "a200": {
            "color": {
                "normal": "#69f0ae",
                "light": "#9fffe0",
                "dark": "#2bbd7e"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "a400": {
            "color": {
                "normal": "#00e676",
                "light": "#66ffa6",
                "dark": "#00b248"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "a700": {
            "color": {
                "normal": "#00c853",
                "light": "#5efc82",
                "dark": "#009624"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        }
    },
    "lightGreen": {
        "50": {
            "color": {
                "normal": "#f1f8e9",
                "light": "#ffffff",
                "dark": "#bec5b7"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "100": {
            "color": {
                "normal": "#dcedc8",
                "light": "#fffffb",
                "dark": "#aabb97"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "200": {
            "color": {
                "normal": "#c5e1a5",
                "light": "#f8ffd7",
                "dark": "#94af76"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "300": {
            "color": {
                "normal": "#aed581",
                "light": "#e1ffb1",
                "dark": "#7da453"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "400": {
            "color": {
                "normal": "#9ccc65",
                "light": "#cfff95",
                "dark": "#6b9b37"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "500": {
            "color": {
                "normal": "#8bc34a",
                "light": "#bef67a",
                "dark": "#5a9216"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "600": {
            "color": {
                "normal": "#7cb342",
                "light": "#aee571",
                "dark": "#4b830d"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#ffffff"
            }
        },
        "700": {
            "color": {
                "normal": "#689f38",
                "light": "#99d066",
                "dark": "#387002"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#ffffff"
            }
        },
        "800": {
            "color": {
                "normal": "#558b2f",
                "light": "#85bb5c",
                "dark": "#255d00"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#ffffff"
            }
        },
        "900": {
            "color": {
                "normal": "#33691e",
                "light": "#629749",
                "dark": "#003d00"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#ffffff"
            }
        },
        "a100": {
            "color": {
                "normal": "#ccff90",
                "light": "#ffffc2",
                "dark": "#99cc60"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "a200": {
            "color": {
                "normal": "#b2ff59",
                "light": "#e7ff8c",
                "dark": "#7ecb20"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "a400": {
            "color": {
                "normal": "#76ff03",
                "light": "#b0ff57",
                "dark": "#32cb00"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "a700": {
            "color": {
                "normal": "#64dd17",
                "light": "#9cff57",
                "dark": "#1faa00"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        }
    },
    "lime": {
        "50": {
            "color": {
                "normal": "#f9fbe7",
                "light": "#ffffff",
                "dark": "#c6c8b5"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "100": {
            "color": {
                "normal": "#f0f4c3",
                "light": "#fffff6",
                "dark": "#bdc192"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "200": {
            "color": {
                "normal": "#e6ee9c",
                "light": "#ffffce",
                "dark": "#b3bc6d"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "300": {
            "color": {
                "normal": "#dce775",
                "light": "#ffffa6",
                "dark": "#a8b545"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "400": {
            "color": {
                "normal": "#d4e157",
                "light": "#ffff89",
                "dark": "#a0af22"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "500": {
            "color": {
                "normal": "#cddc39",
                "light": "#ffff6e",
                "dark": "#99aa00"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "600": {
            "color": {
                "normal": "#c0ca33",
                "light": "#f5fd67",
                "dark": "#8c9900"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "700": {
            "color": {
                "normal": "#afb42b",
                "light": "#e4e65e",
                "dark": "#7c8500"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "800": {
            "color": {
                "normal": "#9e9d24",
                "light": "#d2ce56",
                "dark": "#6c6f00"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#ffffff"
            }
        },
        "900": {
            "color": {
                "normal": "#827717",
                "light": "#b4a647",
                "dark": "#524c00"
            },
            "text": {
                "normal": "#ffffff",
                "light": "#000000",
                "dark": "#ffffff"
            }
        },
        "a100": {
            "color": {
                "normal": "#f4ff81",
                "light": "#ffffb3",
                "dark": "#bfcc50"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "a200": {
            "color": {
                "normal": "#eeff41",
                "light": "#ffff78",
                "dark": "#b8cc00"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "a400": {
            "color": {
                "normal": "#c6ff00",
                "light": "#fdff58",
                "dark": "#90cc00"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "a700": {
            "color": {
                "normal": "#aeea00",
                "light": "#e4ff54",
                "dark": "#79b700"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        }
    },
    "yellow": {
        "50": {
            "color": {
                "normal": "#fffde7",
                "light": "#ffffff",
                "dark": "#cccab5"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "100": {
            "color": {
                "normal": "#fff9c4",
                "light": "#fffff7",
                "dark": "#cbc693"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "200": {
            "color": {
                "normal": "#fff59d",
                "light": "#ffffcf",
                "dark": "#cbc26d"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "300": {
            "color": {
                "normal": "#fff176",
                "light": "#ffffa8",
                "dark": "#cabf45"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "400": {
            "color": {
                "normal": "#ffee58",
                "light": "#ffff8b",
                "dark": "#c9bc1f"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "500": {
            "color": {
                "normal": "#ffeb3b",
                "light": "#ffff72",
                "dark": "#c8b900"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "600": {
            "color": {
                "normal": "#fdd835",
                "light": "#ffff6b",
                "dark": "#c6a700"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "700": {
            "color": {
                "normal": "#fbc02d",
                "light": "#fff263",
                "dark": "#c49000"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "800": {
            "color": {
                "normal": "#f9a825",
                "light": "#ffd95a",
                "dark": "#c17900"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "900": {
            "color": {
                "normal": "#f57f17",
                "light": "#ffb04c",
                "dark": "#bc5100"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#ffffff"
            }
        },
        "a100": {
            "color": {
                "normal": "#ffff8d",
                "light": "#ffffbf",
                "dark": "#cacc5d"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "a200": {
            "color": {
                "normal": "#ffff00",
                "light": "#ffff5a",
                "dark": "#c7cc00"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "a400": {
            "color": {
                "normal": "#ffea00",
                "light": "#ffff56",
                "dark": "#c7b800"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "a700": {
            "color": {
                "normal": "#ffd600",
                "light": "#ffff52",
                "dark": "#c7a500"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        }
    },
    "amber": {
        "50": {
            "color": {
                "normal": "#fff8e1",
                "light": "#ffffff",
                "dark": "#ccc5af"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "100": {
            "color": {
                "normal": "#ffecb3",
                "light": "#ffffe5",
                "dark": "#cbba83"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "200": {
            "color": {
                "normal": "#ffe082",
                "light": "#ffffb3",
                "dark": "#caae53"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "300": {
            "color": {
                "normal": "#ffd54f",
                "light": "#ffff81",
                "dark": "#c8a415"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "400": {
            "color": {
                "normal": "#ffca28",
                "light": "#fffd61",
                "dark": "#c79a00"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "500": {
            "color": {
                "normal": "#ffc107",
                "light": "#fff350",
                "dark": "#c79100"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "600": {
            "color": {
                "normal": "#ffb300",
                "light": "#ffe54c",
                "dark": "#c68400"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "700": {
            "color": {
                "normal": "#ffa000",
                "light": "#ffd149",
                "dark": "#c67100"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "800": {
            "color": {
                "normal": "#ff8f00",
                "light": "#ffc046",
                "dark": "#c56000"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "900": {
            "color": {
                "normal": "#ff6f00",
                "light": "#ffa040",
                "dark": "#c43e00"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "a100": {
            "color": {
                "normal": "#ffe57f",
                "light": "#ffffb0",
                "dark": "#cab350"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "a200": {
            "color": {
                "normal": "#ffd740",
                "light": "#ffff74",
                "dark": "#c8a600"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "a400": {
            "color": {
                "normal": "#ffc400",
                "light": "#fff64f",
                "dark": "#c79400"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "a700": {
            "color": {
                "normal": "#ffab00",
                "light": "#ffdd4b",
                "dark": "#c67c00"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        }
    },
    "orange": {
        "50": {
            "color": {
                "normal": "#fff3e0",
                "light": "#ffffff",
                "dark": "#ccc0ae"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "100": {
            "color": {
                "normal": "#ffe0b2",
                "light": "#ffffe4",
                "dark": "#cbae82"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "200": {
            "color": {
                "normal": "#ffcc80",
                "light": "#ffffb0",
                "dark": "#ca9b52"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "300": {
            "color": {
                "normal": "#ffb74d",
                "light": "#ffe97d",
                "dark": "#c88719"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "400": {
            "color": {
                "normal": "#ffa726",
                "light": "#ffd95b",
                "dark": "#c77800"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "500": {
            "color": {
                "normal": "#ff9800",
                "light": "#ffc947",
                "dark": "#c66900"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "600": {
            "color": {
                "normal": "#fb8c00",
                "light": "#ffbd45",
                "dark": "#c25e00"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "700": {
            "color": {
                "normal": "#f57c00",
                "light": "#ffad42",
                "dark": "#bb4d00"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#ffffff"
            }
        },
        "800": {
            "color": {
                "normal": "#ef6c00",
                "light": "#ff9d3f",
                "dark": "#b53d00"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#ffffff"
            }
        },
        "900": {
            "color": {
                "normal": "#e65100",
                "light": "#ff833a",
                "dark": "#ac1900"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#ffffff"
            }
        },
        "a100": {
            "color": {
                "normal": "#ffd180",
                "light": "#ffffb1",
                "dark": "#caa052"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "a200": {
            "color": {
                "normal": "#ffab40",
                "light": "#ffdd71",
                "dark": "#c77c02"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "a400": {
            "color": {
                "normal": "#ff9100",
                "light": "#ffc246",
                "dark": "#c56200"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "a700": {
            "color": {
                "normal": "#ff6d00",
                "light": "#ff9e40",
                "dark": "#c43c00"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#ffffff"
            }
        }
    },
    "deepOrange": {
        "50": {
            "color": {
                "normal": "#fbe9e7",
                "light": "#ffffff",
                "dark": "#c8b7b5"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "100": {
            "color": {
                "normal": "#ffccbc",
                "light": "#ffffee",
                "dark": "#cb9b8c"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "200": {
            "color": {
                "normal": "#ffab91",
                "light": "#ffddc1",
                "dark": "#c97b63"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "300": {
            "color": {
                "normal": "#ff8a65",
                "light": "#ffbb93",
                "dark": "#c75b39"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "400": {
            "color": {
                "normal": "#ff7043",
                "light": "#ffa270",
                "dark": "#c63f17"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#ffffff"
            }
        },
        "500": {
            "color": {
                "normal": "#ff5722",
                "light": "#ff8a50",
                "dark": "#c41c00"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#ffffff"
            }
        },
        "600": {
            "color": {
                "normal": "#f4511e",
                "light": "#ff844c",
                "dark": "#b91400"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#ffffff"
            }
        },
        "700": {
            "color": {
                "normal": "#e64a19",
                "light": "#ff7d47",
                "dark": "#ac0800"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#ffffff"
            }
        },
        "800": {
            "color": {
                "normal": "#d84315",
                "light": "#ff7543",
                "dark": "#9f0000"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#ffffff"
            }
        },
        "900": {
            "color": {
                "normal": "#bf360c",
                "light": "#f9683a",
                "dark": "#870000"
            },
            "text": {
                "normal": "#ffffff",
                "light": "#000000",
                "dark": "#ffffff"
            }
        },
        "a100": {
            "color": {
                "normal": "#ff9e80",
                "light": "#ffd0b0",
                "dark": "#c96f53"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "a200": {
            "color": {
                "normal": "#ff6e40",
                "light": "#ffa06d",
                "dark": "#c53d13"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#ffffff"
            }
        },
        "a400": {
            "color": {
                "normal": "#ff3d00",
                "light": "#ff7539",
                "dark": "#c30000"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#ffffff"
            }
        },
        "a700": {
            "color": {
                "normal": "#dd2c00",
                "light": "#ff6434",
                "dark": "#a30000"
            },
            "text": {
                "normal": "#ffffff",
                "light": "#000000",
                "dark": "#ffffff"
            }
        }
    },
    "brown": {
        "50": {
            "color": {
                "normal": "#efebe9",
                "light": "#ffffff",
                "dark": "#bdb9b7"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "100": {
            "color": {
                "normal": "#d7ccc8",
                "light": "#fffffb",
                "dark": "#a69b97"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "200": {
            "color": {
                "normal": "#bcaaa4",
                "light": "#efdcd5",
                "dark": "#8c7b75"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "300": {
            "color": {
                "normal": "#a1887f",
                "light": "#d3b8ae",
                "dark": "#725b53"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#ffffff"
            }
        },
        "400": {
            "color": {
                "normal": "#8d6e63",
                "light": "#be9c91",
                "dark": "#5f4339"
            },
            "text": {
                "normal": "#ffffff",
                "light": "#000000",
                "dark": "#ffffff"
            }
        },
        "500": {
            "color": {
                "normal": "#795548",
                "light": "#a98274",
                "dark": "#4b2c20"
            },
            "text": {
                "normal": "#ffffff",
                "light": "#000000",
                "dark": "#ffffff"
            }
        },
        "600": {
            "color": {
                "normal": "#6d4c41",
                "light": "#9c786c",
                "dark": "#40241a"
            },
            "text": {
                "normal": "#ffffff",
                "light": "#000000",
                "dark": "#ffffff"
            }
        },
        "700": {
            "color": {
                "normal": "#5d4037",
                "light": "#8b6b61",
                "dark": "#321911"
            },
            "text": {
                "normal": "#ffffff",
                "light": "#ffffff",
                "dark": "#ffffff"
            }
        },
        "800": {
            "color": {
                "normal": "#4e342e",
                "light": "#7b5e57",
                "dark": "#260e04"
            },
            "text": {
                "normal": "#ffffff",
                "light": "#ffffff",
                "dark": "#ffffff"
            }
        },
        "900": {
            "color": {
                "normal": "#3e2723",
                "light": "#6a4f4b",
                "dark": "#1b0000"
            },
            "text": {
                "normal": "#ffffff",
                "light": "#ffffff",
                "dark": "#ffffff"
            }
        }
    },
    "grey": {
        "50": {
            "color": {
                "normal": "#fafafa",
                "light": "#ffffff",
                "dark": "#c7c7c7"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "100": {
            "color": {
                "normal": "#f5f5f5",
                "light": "#ffffff",
                "dark": "#c2c2c2"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "200": {
            "color": {
                "normal": "#eeeeee",
                "light": "#ffffff",
                "dark": "#bcbcbc"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "300": {
            "color": {
                "normal": "#e0e0e0",
                "light": "#ffffff",
                "dark": "#aeaeae"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "400": {
            "color": {
                "normal": "#bdbdbd",
                "light": "#efefef",
                "dark": "#8d8d8d"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "500": {
            "color": {
                "normal": "#9e9e9e",
                "light": "#cfcfcf",
                "dark": "#707070"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#ffffff"
            }
        },
        "600": {
            "color": {
                "normal": "#757575",
                "light": "#a4a4a4",
                "dark": "#494949"
            },
            "text": {
                "normal": "#ffffff",
                "light": "#000000",
                "dark": "#ffffff"
            }
        },
        "700": {
            "color": {
                "normal": "#616161",
                "light": "#8e8e8e",
                "dark": "#373737"
            },
            "text": {
                "normal": "#ffffff",
                "light": "#000000",
                "dark": "#ffffff"
            }
        },
        "800": {
            "color": {
                "normal": "#424242",
                "light": "#6d6d6d",
                "dark": "#1b1b1b"
            },
            "text": {
                "normal": "#ffffff",
                "light": "#ffffff",
                "dark": "#ffffff"
            }
        },
        "900": {
            "color": {
                "normal": "#212121",
                "light": "#484848",
                "dark": "#000000"
            },
            "text": {
                "normal": "#ffffff",
                "light": "#ffffff",
                "dark": "#ffffff"
            }
        }
    },
    "blueGrey": {
        "50": {
            "color": {
                "normal": "#eceff1",
                "light": "#ffffff",
                "dark": "#ffffff"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "100": {
            "color": {
                "normal": "#cfd8dc",
                "light": "#ffffff",
                "dark": "#9ea7aa"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "200": {
            "color": {
                "normal": "#b0bec5",
                "light": "#e2f1f8",
                "dark": "#808e95"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#000000"
            }
        },
        "300": {
            "color": {
                "normal": "#90a4ae",
                "light": "#c1d5e0",
                "dark": "#62757f"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#ffffff"
            }
        },
        "400": {
            "color": {
                "normal": "#78909c",
                "light": "#a7c0cd",
                "dark": "#4b636e"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#ffffff"
            }
        },
        "500": {
            "color": {
                "normal": "#607d8b",
                "light": "#8eacbb",
                "dark": "#34515e"
            },
            "text": {
                "normal": "#000000",
                "light": "#000000",
                "dark": "#ffffff"
            }
        },
        "600": {
            "color": {
                "normal": "#546e7a",
                "light": "#819ca9",
                "dark": "#29434e"
            },
            "text": {
                "normal": "#ffffff",
                "light": "#000000",
                "dark": "#ffffff"
            }
        },
        "700": {
            "color": {
                "normal": "#455a64",
                "light": "#718792",
                "dark": "#1c313a"
            },
            "text": {
                "normal": "#ffffff",
                "light": "#000000",
                "dark": "#ffffff"
            }
        },
        "800": {
            "color": {
                "normal": "#37474f",
                "light": "#62727b",
                "dark": "#102027"
            },
            "text": {
                "normal": "#ffffff",
                "light": "#ffffff",
                "dark": "#ffffff"
            }
        },
        "900": {
            "color": {
                "normal": "#263238",
                "light": "#4f5b62",
                "dark": "#000a12"
            },
            "text": {
                "normal": "#ffffff",
                "light": "#ffffff",
                "dark": "#ffffff"
            }
        }
    }
};

const MaterialPalette = {
    hues: (): string[] => {
        return Object.keys(MATERIAL_COLOR_DEF);
    },
    shades: (hue: string): string[] => {
        const colorDef = MATERIAL_COLOR_DEF[hue];
        if (!colorDef) {
            return [];
        } else {
            return Object.keys(colorDef);
        }
    },
    get: (hue: string, shade: string): ColorShade | undefined => {
        const colorDef: ColorHue = MATERIAL_COLOR_DEF[hue];
        if (!colorDef) {
            return undefined;
        }
        const colorByShade = colorDef[shade];
        if (!colorByShade) {
            return undefined;
        }
        return (
            {
                color: { ...colorByShade.color },
                text: { ...colorByShade.text }
            }
        );
    }
}

export default MaterialPalette;
