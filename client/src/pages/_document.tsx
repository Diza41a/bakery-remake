import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
        <link href="https://fonts.googleapis.com/css2?family=Antic&family
        =Dosis:wght@200&family=Montserrat:wght@300&family=Neucha&family=
        Poiret+One&display=swap" rel="stylesheet" />
        <script src="https://kit.fontawesome.com/4d1f2bd158.js" crossOrigin='anonymous' />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
