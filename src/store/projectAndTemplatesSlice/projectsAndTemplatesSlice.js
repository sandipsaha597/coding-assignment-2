import { createSlice } from '@reduxjs/toolkit'
import { getPageById, getProjectById } from '../../core/utilFunctions'
import { getItemById, getValueFromLocalStorage } from '../../utils/functions'
import { LOCAL_STORAGE_KEYS } from '../../constants'

debugger

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

export const COLOR_TYPES = {
  CUSTOM: 'CUSTOM',
  ID: 'ID',
  INHERIT: 'INHERIT',
}

export const getColorStructure = ({
  type = COLOR_TYPES.CUSTOM,
  value = '#000',
  temp = '',
}) => {
  return {
    type,
    value,
    temp,
  }
}

export const generateBlankTemplate = (id) => {
  return {
    id: id ?? crypto.randomUUID(),
    projectName: 'Blank template',
    themeAndGlobalStyles: {
      theme: [
        {
          id: 'd8d93770-7100-4cb4-a0e0-7f5e9a51db6a',
          name: 'Primary',
          color: '#2ecc71',
        },
        {
          id: '29f315ac-8e87-43c6-82b2-4d62dce0c335',
          name: 'Secondary',
          color: '#f1c40f',
        },
      ],
    },
    navbar: {
      styles: {
        width: '100%',
        height: 'auto',
        backgroundColor: getColorStructure({
          type: COLOR_TYPES.CUSTOM,
          customColor: '#2ecc71',
        }),
        itemColor: getColorStructure({
          type: COLOR_TYPES.CUSTOM,
          customColor: '#fff',
        }),
        activeItemColor: getColorStructure({
          type: COLOR_TYPES.CUSTOM,
          customColor: '#f1c40f',
        }),
        gap: '10px',
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
  id: 'fb4fa508-a68c-4904-a614-dad4e840de74',
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
        id: 'b367a7f0-a19b-4821-9ac4-c6e721f73a32',
        title: 'Home',
        to: 'homePageId',
      },
      {
        id: '6823e590-f8f7-4074-be9a-c522ac62764f',
        title: '2nd',
        to: 'c6c960a3-933b-4393-add5-83fd86368631',
      },
    ],
  },
  pages: [
    {
      id: 'homePageId',
      pageDetails: {
        title: 'Home page',
        description: '',
        slug: '',
      },
      nodes: [
        {
          id: '5b77f4df-b826-4954-9612-de0253b7b07f',
          position: {
            x: 363,
            y: 28,
          },
          type: 'textNode',
          data: {
            textMessage:
              "hello I'm Sandip Saha\nA frontend developer, chasing excellence.\nfiw",
          },
          width: 316,
          height: 'auto-24',
          selected: false,
        },
      ],
      isActive: true,
    },
    {
      id: 'c6c960a3-933b-4393-add5-83fd86368631',
      pageDetails: {
        title: '2nd',
        description: '',
        slug: '2nd',
      },
      nodes: [
        {
          id: '29caa762-359f-48ea-813e-605e503b3c8d',
          position: {
            x: 434,
            y: 30,
          },
          type: 'textNode',
          data: {
            textMessage: '2nd',
          },
          width: 300,
          height: 'auto',
          selected: false,
        },
      ],
      isActive: false,
    },
  ],
}

// const template2 = {
//   id: 'a17315c9-234a-44d1-8993-2939a30aa1c1',
//   projectName: 'Blank template',
//   navbar: {
//     styles: {
//       width: '100%',
//       height: 'auto',
//       background: 'red',
//       itemColor: 'white',
//       activeItemColor: 'green',
//       gap: '10px',
//       margin: 'auto',
//     },
//     items: [
//       {
//         id: 'd915a53b-24db-477f-baa1-67a2189c217e',
//         title: 'Home',
//         to: 'homePageId',
//       },
//       {
//         id: 'f2a0c2f3-e5d4-4814-a888-044505fa3874',
//         title: 'About us',
//         to: '979666e7-e1cd-4178-a92c-f179598b7b2c',
//       },
//     ],
//   },
//   pages: [
//     {
//       id: 'homePageId',
//       pageDetails: {
//         title: 'Home page',
//         description: '',
//         slug: '',
//       },
//       nodes: [
//         {
//           id: '116ce9c6-d473-45bf-b548-913772dc2026',
//           position: {
//             x: 389.4000473022461,
//             y: 32.80000305175781,
//           },
//           type: 'textNode',
//           data: {
//             textMessage: 'Text message',
//           },
//           width: 300,
//           height: 'auto',
//           selected: false,
//         },
//         {
//           id: '21668679-1c96-4e3a-b670-2bd5da147676',
//           position: {
//             x: 513.4000473022461,
//             y: 3.8000030517578125,
//           },
//           type: 'imageNode',
//           data: {
//             src: 'https://placehold.co/300x300',
//             alt: 'dummy image',
//           },
//           width: 300,
//           height: 300,
//           selected: false,
//         },
//       ],
//       isActive: false,
//     },
//     {
//       id: '979666e7-e1cd-4178-a92c-f179598b7b2c',
//       pageDetails: {
//         title: '979666e7-e1cd-4178-a92c-f179598b7b2c',
//         description: '',
//         slug: 'about-us',
//       },
//       nodes: [
//         {
//           id: '96ac854a-2bf2-4c56-b29e-c1378d1d8ca9',
//           position: {
//             x: 255.4000473022461,
//             y: 19,
//           },
//           type: 'videoNode',
//           data: {
//             src: 'https://videos.pexels.com/video-files/17127360/17127360-uhd_2560_1440_30fps.mp4',
//             title: 'Dummy video',
//           },
//           width: 259,
//           height: 139,
//           selected: false,
//         },
//         {
//           id: '07f6713e-a155-45fe-aafe-a6d24db5d090',
//           position: {
//             x: 536.4000473022461,
//             y: 129,
//           },
//           type: 'buttonNode',
//           data: {
//             buttonText: 'Click',
//           },
//           width: 100,
//           height: 30,
//           selected: false,
//         },
//       ],
//       isActive: true,
//     },
//   ],
// }

const initialState =
  savedProjectsAndTemplates === null
    ? {
        projects: [],
        templates: [template1],
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
