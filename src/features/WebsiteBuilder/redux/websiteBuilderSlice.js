import { createSlice } from '@reduxjs/toolkit'
import { generateBlankTemplate } from '../schemaGenerator/schemaGetters/generateBlankTemplate'
import { getNodeInProjectById, getPageById } from '../../../core/utilFunctions'
import { getItemById } from '../../../utils/functions'

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

const unSelectAllNodes = (pages) => {
  pages.forEach((page) => page.nodes.forEach((v) => (v.selected = false)))
}

const initialState = generateBlankTemplate()

const websiteBuilderSlice = createSlice({
  name: 'websiteBuilder',
  initialState,
  reducers: {
    setProject: (state, { payload }) => {
      return payload.project
    },
    editProjectName: (state, { payload }) => {
      state.projectName = payload.name
    },
    /**
     * Adds a new node to the state.
     * @param {Object} action.payload - The payload containing the new node to add.
     * @param {Object} payload.newNode - a valid new node
     */
    addNode: (state, { payload }) => {
      unSelectAllNodes(state.pages)
      const [page] = getPageById(payload.pageId, state.pages)
      page.nodes.push({ ...payload.newNode, selected: true })
    },
    deleteNode: (state, { payload }) => {
      const { page, pagesIndex } = getNodeInProjectById(payload.id, state)

      if (pagesIndex !== -1) {
        page.nodes = page.nodes.filter((v) => v.id !== payload.id)
      }
    },
    addPage: (state, { payload }) => {
      state.pages.push(payload.newPage)
    },
    changeActivePage: (state, { payload }) => {
      state.pages.forEach((page) => (page.isActive = false))
      const [page] = getPageById(payload.pageId, state.pages)
      page.isActive = true
    },
    updatePageDetails: (state, { payload }) => {
      const [page] = getPageById(payload.pageId, state.pages)
      page.pageDetails = payload.details
    },
    /* reactFlow prop */
    /* upon selecting a node and pressing backspace deletes that node
    If onNodeChange is not there changes won't be applied, unless we are using uncontrolled reactFlow component */
    onNodeSelect: (state, { payload }) => {
      unSelectAllNodes(state.pages)
      const nodeId = payload.id
      if (nodeId !== false) {
        const { node } = getNodeInProjectById(payload.id, state)
        node.selected = true
      }
    },
    updateNodeSize: (state, { payload }) => {
      const { node } = getNodeInProjectById(payload.id, state)
      const { changedWidth, changedHeight, position } = payload
      if (changedWidth) node.width += changedWidth
      if (changedHeight) node.height += changedHeight

      node.position = position
    },
    updateNodePosition: (state, { payload }) => {
      const { node } = getNodeInProjectById(payload.id, state)
      node.position = payload.position
    },
    /**
     * Edits the data of a node in the state based on the provided node ID.
     * Logs an error if the node ID does not exist in the current state.
     * @param {Object} action.payload - The payload containing the node ID and new data.
     * @param {String} payload.id - a valid nodeId
     * @param {Object} payload.newData - newData object to replace the old data object
     */
    editNodeData: (state, { payload }) => {
      const { node, nodeIndex } = getNodeInProjectById(payload.nodeId, state)
      if (nodeIndex !== -1) {
        node.data = payload.newData
      }
    },
    addItemInNavbar: (state, { payload }) => {
      state.navbar.items.push(payload.newItem)
      // return {
      //   ...state,
      //   navbar: {
      //     ...state.navbar,
      //     items: [...state.navbar.items, payload.newItem],
      //   },
      // }
    },
    updateItemInNavbar: (state, { payload }) => {
      const itemId = payload.itemId
      const updatedData = payload.updatedData
      const [, index] = getItemById(itemId, state.navbar.items)
      if (index !== -1) {
        state.navbar.items[index] = updatedData
      }
    },
    updateNavbarStyles: (state, { payload }) => {
      const { styleProperty, value } = payload
      state.navbar.styles[styleProperty] = value
    },

    changeThemeColor: (state, { payload }) => {
      const [themeItem] = getItemById(
        payload.id,
        state.themeAndGlobalStyles.theme
      )
      themeItem.color = payload.color
    },

    changeGlobalStyle: (state, { payload }) => {
      const { styleProperty, value } = payload
      state.themeAndGlobalStyles.globalStyles[styleProperty] = value
    },
  },
})

const websiteBuilderSliceReducer = websiteBuilderSlice.reducer
export const websiteBuilderSliceActions = websiteBuilderSlice.actions

export const websiteBuilderSelector = (state) => state.websiteBuilder
export const websiteBuilderPagesSelector = (state) => state.websiteBuilder.pages
export const websiteBuilderNavbarSelector = (state) =>
  state.websiteBuilder.navbar
export const websiteBuilderThemeAndGlobalStyleSelector = (state) =>
  state.websiteBuilder.themeAndGlobalStyles

export default websiteBuilderSliceReducer
