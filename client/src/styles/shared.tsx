import styled from "@emotion/styled";
import { imagePath, colors, typography } from './constants';

// Constants
const headerHeight = 60;

const Header = styled('header')(() => ({
  height: headerHeight,
  padding: '0 85px 0 12.5%',
  position: 'relative',
  background: `${colors.dark}90`,
  borderBottom: `2px solid ${colors.border}80`,

  '.header-body': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    '.logo-wrap': {
      display: 'flex',
      justifyContent: 'center',
      width: '15%',
      maxWidth: 400,
      padding: '2.9px 0 4.5px 0',
      height: `calc(${headerHeight}px - 2.9px * 2)`,
      backgroundColor: colors.light,
      borderRadius: '5px 5px 0 0',
      
      '.logo': {
        width: '100%',
        height: '100%',
        backgroundImage: `url(${imagePath}/logo.png)`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      },
    },

    nav: {
      display: 'flex',
      justifyContent: 'space-around',
      flexBasis: '45%',

      'a, #settings-btn': {
        fontFamily: typography.font.second,
        textDecoration: 'none',
        color: colors.light,
        fontSize: typography.size,
        textShadow: `calc(${-typography.size}px * 0.07) calc(${typography.size}px * 0.075) 0 rgb(184, 82, 27)`,
        margin: '0 5px',

        '.icon': {
          opacity: 0.9,
          transform: 'rotate(12.5deg)',
          position: 'relative',
          // right: '$fontSizeMobile * 0.25',
        },

        // '&.disabled': {
        //   color: 'rgb(176, 171, 171)',
        //   cursor: 'default',
        //   pointerEvents: 'none',
        //   userSelect: 'none',

        //   '&:hover': {
        //     color: 'rgb(176, 171, 171)',
        //   }
        // }

        '&[aria-current="page"]': {
          textShadow: '0 0.25vh 2vw #FFFFFF',
        },

        '&:hover': {
          color: colors.buttonSecond,
          textShadow: `0 0.25vh 2vw ${colors.light}`,
        }
      },

      '#settings-btn': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        cursor: 'pointer',
        background: 'none',
        border: 'none',
        position: 'relative',

        '.fa-chevron-down': {
          position: 'absolute',
          bottom: -typography.size * 0.45,
          width: '100%',
          fontSize: typography.size * 0.6,
        },
      },
    },
  },

  '.background': {
    background: `url(${imagePath}/croissant.png)`,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
  },
}));

const s = {
  Header,
};

export default s;
