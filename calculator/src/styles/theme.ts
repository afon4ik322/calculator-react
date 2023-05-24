export type ThemeNameType = 'light' | 'dark';

export interface ThemeType {
  background: string;
  text: string;
  gray: string[];
  blue: string;
}

export const lightTheme: ThemeType = {
  background: '#FFFFFF',
  text: '#000000',
  gray: ['#C4C8CB', '#AAAEB3', '#91949A', '#76787A'],
  blue: '#518BCC',
};

export const darkTheme: ThemeType = {
  background: '#19191A',
  text: '#E1E3E6',
  gray: ['#444648', '#5D5F60', '#76787A', '#91949A'],
  blue: '#71AAEB',
};
