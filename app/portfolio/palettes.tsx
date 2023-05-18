export interface Palette {
  lightest: string;
  light: string;
  dark?: string;
}

export interface ElementPalette {
  bg: Palette;
  text: Palette;
  border: Palette;
  icon: Palette;
}

export const slatePalette: ElementPalette = {
    bg: {
      lightest: 'bg-slate-200',
      light: 'bg-slate-300',
      dark: 'bg-slate-950'
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
    lightest: 'bg-lime-200',
    light: 'bg-lime-300',
    dark: 'bg-lime-950'
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