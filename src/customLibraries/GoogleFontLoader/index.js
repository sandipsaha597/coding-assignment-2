/* 
  This library is a copy-paste of https://github.com/jakewtaylor/react-google-font-loader.

  The original react-google-font-loader library is unmanaged, and the author made certain changes to the code. 
  Therefore, I decided to copy and paste the code into this project. The code includes a simple function and a simple component.

  Usage:
  Pass the font props to the GoogleFontLoader component. The font props should be an array of font objects, 
  where each object represents a font and its weights.

  Example font props array:
  const fonts = [
    {
      id: '1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p',
      font: 'Roboto',
      weights: [400],
    },
    {
      id: '1b2c3d4e-5f6g-7h8i-9j0k-1l2m3n4o5p6q',
      font: 'Open Sans',
      weights: [400],
    },
    {
      id: '1c2d3e4f-5g6h-7i8j-9k0l-1m2n3o4p5q6r',
      font: 'Lato',
      weights: [400],
    },
    // ...
  ];

  Usage in a React component:
  <GoogleFontLoader fonts={YOUR_FONTS_ARRAY} />
  
  This will load the specified Google Fonts with the given weights into your project.
*/

// Export the GoogleFontLoader component
export { default as GoogleFontLoader } from './components/GoogleFontLoader/GoogleFontLoader.jsx'
