import { useEffect, useState } from 'react'
import { createGoogleFontsLinkElement } from '../../core/createGoogleFontsLinkElement'

const GoogleFontLoader = ({ fonts, subsets, display = null }) => {
  const [link, setLink] = useState(() =>
    createGoogleFontsLinkElement(fonts, subsets, display)
  )

  useEffect(() => {
    document.head.appendChild(link)

    return () => document.head.removeChild(link)
  }, [link])

  useEffect(() => {
    setLink(createGoogleFontsLinkElement(fonts, subsets, display))
  }, [fonts, subsets, display])

  return null
}

export default GoogleFontLoader

// const fonts = [
//   {
//     font: 'Roboto',
//     weights: [400, '400i', 700],
//   },
//   {
//     font: 'Open Sans',
//     weights: [400, 600, 700],
//   },
//   {
//     font: 'Lato',
//     weights: [400, '400i', 700],
//   },
//   {
//     font: 'Montserrat',
//     weights: [400, 500, 700],
//   },
//   {
//     font: 'Raleway',
//     weights: [400, 500, 700],
//   },
//   {
//     font: 'Poppins',
//     weights: [400, 600, 700],
//   },
//   {
//     font: 'Merriweather',
//     weights: [400, 700],
//   },
//   {
//     font: 'Nunito',
//     weights: [400, 600, 700],
//   },
//   {
//     font: 'Oswald',
//     weights: [400, 500, 700],
//   },
//   {
//     font: 'Roboto Mono',
//     weights: [400, 700],
//   },
// ]
// <GoogleFontLoader fonts={fonts} />
// {
//   fonts.map((v, i) => {
//     return (
//       <div key={i} style={{ fontFamily: v.font }}>
//         {v.font}
//       </div>
//     )
//   })
// }
