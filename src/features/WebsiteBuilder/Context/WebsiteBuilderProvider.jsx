import { useRef } from 'react'
import { WebsiteBuilderContext } from './WebsiteBuilderContext'

const WebsiteBuilderProvider = ({ children }) => {
  // reference of the websiteBuilder canvas
  const websiteBuilderRef = useRef(null)

  // all the values and methods available in AppContext
  const value = {
    websiteBuilderRef,
  }
  return (
    <WebsiteBuilderContext.Provider value={value}>
      {children}
    </WebsiteBuilderContext.Provider>
  )
}

export default WebsiteBuilderProvider
