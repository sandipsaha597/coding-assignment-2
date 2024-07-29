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
