// I heard you give brownie points to candidates who knows redux..... so here you go... 🚀🚀🚀
import { configureStore } from '@reduxjs/toolkit'
import chatbotFlowBuilderSliceReducer from '../features/WebsiteBuilder/redux/chatbotFlowBuilderSlice'
import projectsAndTemplatesSliceReducer from './projectAndTemplatesSlice/projectsAndTemplatesSlice'

/**
 * Redux store configuration using @reduxjs/toolkit, the officially recommended way to use Redux.
 */

export const store = configureStore({
  reducer: {
    chatbotFlowBuilder: chatbotFlowBuilderSliceReducer,
    projectsAndTemplates: projectsAndTemplatesSliceReducer,
  },
})
