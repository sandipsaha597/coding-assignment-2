import { configureStore } from '@reduxjs/toolkit'
import websiteBuilderSliceReducer from '../features/WebsiteBuilder/redux/websiteBuilderSlice'
import projectsAndTemplatesSliceReducer from './projectAndTemplatesSlice/projectsAndTemplatesSlice'

/**
 * Redux store configuration using @reduxjs/toolkit, the officially recommended way to use Redux.
 */

export const store = configureStore({
  reducer: {
    websiteBuilder: websiteBuilderSliceReducer,
    projectsAndTemplates: projectsAndTemplatesSliceReducer,
  },
})
