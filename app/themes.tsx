export interface TextColorVariation {
    main: string;
    contrast: string;
}

export interface IconColorVariation {
    main: string;
    contrast: string;
}

export interface BackgroundColorVariation {
    ground: string;
    figure: string;
    contrast: string;
}

export interface Theme {
    mode: string;
    text: TextColorVariation;
    icon: IconColorVariation;
    bg: BackgroundColorVariation;
    border: string
}

export const lightTheme: Theme = {
    mode: "light",
    text: {
        main: "text-[#141414]",
        contrast: "text-[#FFFFFF]"
    },
    icon: {
        main: "#141414",
        contrast: "#FFFFFF"
    },
    bg: {
        ground: "bg-[#EBEBEB]",
        figure: "bg-[#FFFFFF]",
        contrast: "bg-[#141414]"
    },
    border: "border-black/50"
};

export const darkTheme: Theme = {
    mode: "dark",
    text: {
        main: "text-[#EBEBEB]",
        contrast: "text-[#000000]"
    },
    icon: {
        main: "#EBEBEB",
        contrast: "#000000"
    },
    bg: {
        ground: "bg-[#141414]",
        figure: "bg-[#000000]",
        contrast: "bg-[#EBEBEB]"
    },
    border: "border-white/50"
};