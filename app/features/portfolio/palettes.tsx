export interface OpacityVariant {
  25: string;
  50: string;
  75: string;
  100: string;
}

export interface Palette {
  lightest: string;
  light: string;
  dark: string;
}

export interface PaletteOpacity {
  lightest: OpacityVariant;
  light: OpacityVariant;
  dark: OpacityVariant;
}

export interface ElementPalette {
  bg: PaletteOpacity;
  text: Palette;
  border: Palette;
  icon: Palette;
}

export const slatePalette: ElementPalette = {
    bg: {
      lightest: {
        25: 'bg-slate-200/25',
        50: 'bg-slate-200/50',
        75: 'bg-slate-200/75',
        100: 'bg-slate-200/100'
      },
      light: {
        25: 'bg-slate-300/25',
        50: 'bg-slate-300/50',
        75: 'bg-slate-300/75',
        100: 'bg-slate-300/100'
      },
      dark: {
        25: 'bg-slate-950/25',
        50: 'bg-slate-950/50',
        75: 'bg-slate-950/75',
        100: 'bg-slate-950/100'
      },
    },
    text: {
      lightest: 'text-slate-200',
      light: 'text-slate-300',
      dark: 'text-slate-950'
    },
    border: {
      lightest: 'border-slate-200',
      light: 'border-slate-300',
      dark: 'border-slate-950'
    },
    icon: {
      lightest: 'rgb(226 232 240)',
      light: 'rgb(203 213 225)',
      dark: 'rgb(2 6 23)'
    },
};

export const limePalette: ElementPalette = {
  bg: {
    lightest: {
      25: 'bg-lime-200/25',
      50: 'bg-lime-200/50',
      75: 'bg-lime-200/75',
      100: 'bg-lime-200/100'
    },
    light: {
      25: 'bg-lime-300/25',
      50: 'bg-lime-300/50',
      75: 'bg-lime-300/75',
      100: 'bg-lime-300/100'
    },
    dark: {
      25: 'bg-lime-950/25',
      50: 'bg-lime-950/50',
      75: 'bg-lime-950/75',
      100: 'bg-lime-950/100'
    },
  },
  text: {
    lightest: 'text-lime-200',
    light: 'text-lime-300',
    dark: 'text-lime-950'
  },
  border: {
    lightest: 'border-lime-200',
    light: 'border-lime-300',
    dark: 'border-lime-950'
  },
  icon: {
    lightest: 'rgb(217 249 157)',
    light: 'rgb(190 242 100)',
    dark: 'rgb(26 46 5)'
  },
};