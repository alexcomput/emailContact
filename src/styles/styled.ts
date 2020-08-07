import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secondary: string;
      background: string;
      text: string;
      textSecondary: string;
      texThird: string;
      secondary20: string;
      secondary30: string;
      secondary40: string;
      secondary50: string;
      secondary60: string;
      secondary70: string;
      secondary80: string;
    };
  }
}
