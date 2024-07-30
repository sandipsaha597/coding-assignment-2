import { createSlice } from '@reduxjs/toolkit'
import { getAllTemplates } from '../../core/getAllProjectsAndTemplates/getAllTemplates'
import {
  getProjectById,
  getSavedProjectsAndTemplates,
} from '../../core/utilFunctions'
import { generateBlankTemplate } from '../../features/WebsiteBuilder/schemaGenerator/schemaGetters/generateBlankTemplate'
import { getItemById } from '../../utils/functions'

const savedProjectsAndTemplates = getSavedProjectsAndTemplates()
/*
  This state contains all the available projects and templates.
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
      const { newTemplateId, entireTemplateObject } = payload
      const templateName = entireTemplateObject.projectName + ' - template'
      state.templates.push({
        ...entireTemplateObject,
        id: newTemplateId,
        projectName: templateName,
      })
    },
    updateProject: (state, { payload }) => {
      const projectId = payload.updatedProject.id
      const [, projectIndex] = getProjectById(projectId, state.projects)

      state.projects[projectIndex] = payload.updatedProject
    },

    /* If a valid template id is provided it creates a new project using that template
    If not provided it creates new project using a blank template */
    initializeProject: (state, { payload }) => {
      let [template, index] = getItemById(
        payload.templateId,
        getAllTemplates(state.templates)
      )
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
