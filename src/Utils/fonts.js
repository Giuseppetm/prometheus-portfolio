import localFont from '@next/font/local';

const fonts = localFont({
  src: [
    /* Futura */
    {
      path: '../Fonts/Futura/FuturaPT-Bold.woff2',
      weight: "600",
      style: 'normal',
      display: 'swap',
      preload: true,
      variable: '--FuturaPT-Bold'
    },
    /* General Sans */
    {
      path: '../Fonts/GeneralSans/GeneralSans-Regular.woff2',
      weight: "400",
      style: 'normal',
      display: 'swap',
      preload: true,
      variable: '--GeneralSans-Regular'
    },
    {
      path: '../Fonts/GeneralSans/GeneralSans-Medium.woff2',
      weight: "500",
      style: 'normal',
      display: 'swap',
      preload: true,
      variable: '--GeneralSans-Medium'
    },
    {
      path: '../Fonts/GeneralSans/GeneralSans-Semibold.woff2',
      weight: "700",
      style: 'normal',
      display: 'swap',
      preload: true,
      variable: '--GeneralSans-Semibold'
    }
  ]
});

export default fonts;