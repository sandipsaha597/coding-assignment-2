import { createSlice } from '@reduxjs/toolkit'
import {
  getPageById,
  getProjectById,
  getSavedProjectsAndTemplates,
} from '../../core/utilFunctions'
import { getItemById } from '../../utils/functions'
import { generateBlankTemplate } from '../../features/WebsiteBuilder/schemaGenerator/schemaGetters/generateBlankTemplate'

const savedProjectsAndTemplates = getSavedProjectsAndTemplates()
/*
  This state contains the nodes and edges for the websiteBuilder.
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

const initialState =
  savedProjectsAndTemplates === null
    ? {
        projects: [],
        templates: [],
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
    updateProject: (state, { payload }) => {
      const projectId = payload.updatedProject.id
      const [, projectIndex] = getProjectById(projectId, state.projects)

      state.projects[projectIndex] = payload.updatedProject
    },
    initializeProject: (state, { payload }) => {
      let [template, index] = getItemById(payload.templateId, state.templates)
      if (index === -1) template = generateBlankTemplate(payload.newProjectId)
      state.projects.push({ ...template, id: payload.newProjectId })
    },
  },
})

const projectsAndTemplatesSliceReducer = projectsAndTemplatesSlice.reducer
export const projectsAndTemplatesSliceActions =
  projectsAndTemplatesSlice.actions

export const projectAndTemplatesSelector = (state) => state.projectsAndTemplates
export const projectsSelector = (state) => state.projectsAndTemplates.projects
export const templatesSelector = (state) => state.projectsAndTemplates.templates

export default projectsAndTemplatesSliceReducer
