import { createSlice } from '@reduxjs/toolkit'
import { LOCAL_STORAGE_KEYS } from '../../constants'
import { getPageById, getProjectById } from '../../core/utilFunctions'
import { getItemById, getValueFromLocalStorage } from '../../utils/functions'

const savedProjectsAndTemplates = getValueFromLocalStorage(
  LOCAL_STORAGE_KEYS.SAVED_PROJECTS_AND_TEMPLATES_STATE
)
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

export const homePageId = 'homePageId'
export const generateBlankTemplate = (id) => {
  return {
    id: id ?? crypto.randomUUID(),
    projectName: 'Blank template',
    navbar: {
      styles: {
        width: '100%',
        height: 'auto',
        background: 'red',
        itemColor: 'white',
        activeItemColor: 'green',
        gap: '10px',
        margin: 'auto',
      },
      items: [
        {
          id: crypto.randomUUID(),
          title: 'Home',
          to: homePageId,
        },
      ],
    },
    pages: [
      {
        id: homePageId,
        pageDetails: {
          title: 'Home page',
          description: '',
          slug: '',
        },
        nodes: [],
      },
    ],
  }
}

const template1 = {
  id: crypto.randomUUID(),
  projectName: 'In built template',
  navbar: {
    styles: {
      width: '100%',
      height: 'auto',
      background: 'red',
      itemColor: 'white',
      activeItemColor: 'green',
      gap: '10px',
      margin: 'auto',
    },
    items: [
      {
        id: crypto.randomUUID(),
        title: 'Home',
        to: '',
      },
      {
        id: crypto.randomUUID(),
        title: 'Portfolio',
        to: 'portfolio',
      },
    ],
  },
  pages: [
    {
      id: crypto.randomUUID(),
      isActive: true,
      pageDetails: {
        title: 'Home page',
        description: '',
        slug: '',
      },
      nodes: [
        {
          id: crypto.randomUUID(),
          type: 'textNode',
          data: {
            textMessage: 'This is template 1',
          },
          position: {
            x: 0,
            y: 0,
          },
          width: 300,
          height: 'auto',
        },
        {
          id: crypto.randomUUID(),
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
    {
      id: crypto.randomUUID(),
      pageDetails: {
        title: 'Portfolio',
        description: '',
        slug: 'portfolio',
      },
      nodes: [
        {
          id: crypto.randomUUID(),
          type: 'textNode',
          data: {
            textMessage: 'My Portfolio',
          },
          position: {
            x: 10,
            y: 100,
          },
          width: 300,
          height: 'auto',
        },
        {
          id: crypto.randomUUID(),
          type: 'textNode',
          data: {
            textMessage: 'Skilled in Figma & Adobe XD',
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
      id: crypto.randomUUID(),
      pageDetails: {
        title: 'Home page',
        description: '',
        slug: '/',
      },
      nodes: [
        {
          id: crypto.randomUUID(),
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
          id: crypto.randomUUID(),
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
        {
          id: crypto.randomUUID(),
          type: 'textNode',
          data: {
            textMessage: 'lorem ipsum',
          },
          position: {
            x: 100,
            y: 400,
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
