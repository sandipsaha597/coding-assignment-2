import { useRef } from 'react'
import { WebsiteBuilderContext } from './WebsiteBuilderContext'

const WebsiteBuilderProvider = ({ children }) => {
  /* chatbotFlowBuilder - start */
  // reference of the chatbotFlowBuilder reactFlow component
  const websiteBuilderRef = useRef(null)

  /* chatbotFlowBuilder - end */

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
