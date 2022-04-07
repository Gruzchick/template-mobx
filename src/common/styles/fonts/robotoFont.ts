import { css } from '@emotion/react';

import robotoBlack from '../../../assets/fonts/roboto/Roboto-Black.ttf';
import robotoBlackItalic from '../../../assets/fonts/roboto/Roboto-BlackItalic.ttf';
import robotoBold from '../../../assets/fonts/roboto/Roboto-Bold.ttf';
import robotoBoldItalic from '../../../assets/fonts/roboto/Roboto-BoldItalic.ttf';
import robotoRegularItalic from '../../../assets/fonts/roboto/Roboto-Italic.ttf';
import robotoLight from '../../../assets/fonts/roboto/Roboto-Light.ttf';
import robotoLightItalic from '../../../assets/fonts/roboto/Roboto-LightItalic.ttf';
import robotoMedium from '../../../assets/fonts/roboto/Roboto-Medium.ttf';
import robotoMediumItalic from '../../../assets/fonts/roboto/Roboto-MediumItalic.ttf';
import robotoRegular from '../../../assets/fonts/roboto/Roboto-Regular.ttf';
import robotoThin from '../../../assets/fonts/roboto/Roboto-Thin.ttf';
import robotoThinItalic from '../../../assets/fonts/roboto/Roboto-ThinItalic.ttf';

export const robotoFont = css`
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 100;
    src: url(${robotoThin}) format('truetype');
  }
  @font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 100;
    src: url(${robotoThinItalic}) format('truetype');
  }

  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    src: url(${robotoLight}) format('truetype');
  }
  @font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 300;
    src: url(${robotoLightItalic}) format('truetype');
  }

  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: normal;
    src: url(${robotoRegular}) format('truetype');
  }
  @font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: normal;
    src: url(${robotoRegularItalic}) format('truetype');
  }

  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    src: url(${robotoMedium}) format('truetype');
  }
  @font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 500;
    src: url(${robotoMediumItalic}) format('truetype');
  }

  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: bold;
    src: url(${robotoBold}) format('truetype');
  }
  @font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: bold;
    src: url(${robotoBoldItalic}) format('truetype');
  }

  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 900;
    src: url(${robotoBlack}) format('truetype');
  }
  @font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 900;
    src: url(${robotoBlackItalic}) format('truetype');
  }
`;
