import { AppContext } from './AppContext'
/* 
  The AppProvider is not intended for storing states that continuously change, 
  are serializable, or trigger re-renders upon change. Those states should be 
  managed by the Redux store.
  
  The AppProvider is meant to store:
  - Static values
  - Non-serializable values
  - References
  - Other similar values
 */

const AppProvider = ({ children }) => {
  // all the values and methods available in AppContext
  const value = {}

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export default AppProvider
