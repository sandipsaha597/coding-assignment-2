import { createSlice } from '@reduxjs/toolkit'
import {
  getPageById,
  getSavedProjectsAndTemplates,
} from '../../core/utilFunctions'

const savedProjectsAndTemplates = getSavedProjectsAndTemplates()
/*
  This state contains the nodes and edges for the chatbotFlowBuilder.
  It should only include values that:
  - Continuously change,
  - Are serializable,
  - Trigger re-renders upon change.
  
  References to ReactFlow, reactFlowInstance, and all other non-serializable values are stored in the AppContext.
  This separation ensures that the Redux state remains serializable and suitable for debugging and testing, 
  while non-serializable values are managed within the application context.

  Initially, I was cautious about whether to use Context API and Redux together in the same application.
  After consulting ChatGPT, I learned that it is not only okay to use them together but also considered a very good practice 
  since they serve different purposes. The react-redux library itself uses Context API under the hood.
*/

const template1 = {
  id: crypto.randomUUID(),
  projectName: 'In built template',
  pages: [
    {
      id: '6ad8fb18-2e59-42b1-934b-8610cdbca809',
      pageDetails: {
        pageTitle: 'Home page',
        pageDescription: '',
        pageSlug: '/',
      },
      nodes: [
        {
          id: '1',
          type: 'textNode',
          data: {
            textMessage: 'hello world',
          },
          position: {
            x: 10,
            y: 100,
          },
          width: 300,
          height: 'auto',
        },
        {
          id: '2',
          type: 'textNode',
          data: {
            textMessage: 'hello world 2',
          },
          position: {
            x: 100,
            y: 200,
          },
          width: 300,
          height: 'auto',
        },
      ],
    },
  ],
}
const template2 = {
  id: crypto.randomUUID(),
  projectName: 'Portfolio',
  pages: [
    {
      id: '6ad8fb18-2e59-42b1-934b-8610cdbca809',
      pageDetails: {
        pageTitle: 'Home page',
        pageDescription: '',
        pageSlug: '/',
      },
      nodes: [
        {
          id: '1',
          type: 'textNode',
          data: {
            textMessage: 'hello world',
          },
          position: {
            x: 10,
            y: 100,
          },
          width: 300,
          height: 'auto',
        },
        {
          id: '2',
          type: 'textNode',
          data: {
            textMessage: 'hello world 2',
          },
          position: {
            x: 100,
            y: 200,
          },
          width: 300,
          height: 'auto',
        },
      ],
    },
  ],
}

const initialState =
  savedProjectsAndTemplates === null
    ? {
        projects: [],
        templates: [template1, template2],
      }
    : savedProjectsAndTemplates

const projectsAndTemplatesSlice = createSlice({
  name: 'projectsAndTemplates',
  initialState,
  reducers: {
    /**
     * Adds a new node to the state.
     * @param {Object} action.payload - The payload containing the new node to add.
     * @param {Object} payload.newNode - a valid new node
     */
    saveAsTemplate: (state, { payload }) => {
      const [page] = getPageById(state.activePageId, state.pages)
      page.nodes.push(payload.newNode)
    },
    saveAndUpdateProject: (state, { payload }) => {
      state.nodes = state.nodes.filter((v) => v.id !== payload.id)
    },
  },
})

export const projectsAndTemplatesSliceActions =
  projectsAndTemplatesSlice.actions
const projectsAndTemplatesSliceReducer = projectsAndTemplatesSlice.reducer
export default projectsAndTemplatesSliceReducer
