export const theme = Object.freeze({
  fonts: {
    main: `'Manrope', sans-serif`,
    second: `'Inter', sans-serif`,
  },
  fontSizes: [12, 14, 16, 18, 20, 24, 28, 32, 44, 48, 60, 72, 100],
  fontWeights: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  colors: {
    dark: '#111111',
    orange: '#FFC107',
    white: '#FDF7F2',
    clearWhite: '#FFFFFF',
    blueGradient: 'linear-gradient(290.46deg, #419EF1 0%, #9BD0FF 107.89%)',
    blue: '#54ADFF',
    blueLight: '#CCE4FB',
    green: '#00C3AD;',
    red: '#F43F5E',
    backdropColor: ' #61616199',
    black: '#111111',
    grey: '#888888',
    transparent: 'transparent',
  },
  shadows: {
    mainShadow: '3px 8px 14px rgba(136, 198, 253, 0.19)',
    secondShadow: '7px 13px 14px rgba(116, 177, 232, 0.24)',
  },
  media: {
    sm: '(min-width: 320px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1280px)',
    smToMd: '(min-width: 320px) and (max-width: 761px)',
    mdToLg: '(min-width: 768px) and (max-width: 1279px)',
  },
});
