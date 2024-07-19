import { createSlice } from '@reduxjs/toolkit'
import { getNodeById, getPageById } from '../../../core/utilFunctions'

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

const initialState = {
  id: crypto.randomUUID(),
  projectName: 'My project',
  activePageId: '',
  pages: [
    {
      id: crypto.randomUUID(),
      pageDetails: {
        pageTitle: '',
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

const applyNodeChanges = (changes, nodes) => {
  changes.forEach((change) => {
    const { id, type } = change
    nodes.forEach((node) => {
      if (id === node.id) {
        if (type === 'select') {
          if (change.selected === false) delete node.selected
          if (change.selected === true) node.selected = true
        }
        if (type === 'position') {
          node.position = change.position
        }
        if (type === 'resize') {
          node.width += change.width
          node.height += change.height
        }
      }
    })
  })
  return nodes
}

const chatbotFlowBuilderSlice = createSlice({
  name: 'websiteBuilder',
  initialState,
  reducers: {
    /**
     * Adds a new node to the state.
     * @param {Object} action.payload - The payload containing the new node to add.
     * @param {Object} payload.newNode - a valid new node
     */
    addNode: (state, { payload }) => {
      const [page] = getPageById(state.activePageId, state.pages)
      page.nodes.push(payload.newNode)
    },
    removeNode: (state, { payload }) => {
      state.nodes = state.nodes.filter((v) => v.id !== payload.id)
    },
    addPage: (state, { payload }) => {
      state.pages.push(payload.newPage)
    },
    changeActivePage: (state, { payload }) => {
      state.activePageId = payload.pageId
    },
    /* reactFlow prop */
    /* upon selecting a node and pressing backspace deletes that node
    If onNodeChange is not there changes won't be applied, unless we are using uncontrolled reactFlow component */
    onNodesChange: (state, { payload }) => {
      const [activePage] = getPageById(state.activePageId, state.pages)
      activePage.nodes = applyNodeChanges(payload.changes, activePage.nodes)
    },
    /**
     * Edits the data of a node in the state based on the provided node ID.
     * Logs an error if the node ID does not exist in the current state.
     * @param {Object} action.payload - The payload containing the node ID and new data.
     * @param {String} payload.id - a valid nodeId
     * @param {Object} payload.newData - newData object to replace the old data object
     */
    editNodeData: (state, { payload }) => {
      const [activePage] = getPageById(state.activePageId, state.pages)
      const [node, nodeIndex] = getNodeById(payload.nodeId, activePage.nodes)
      if (nodeIndex === -1) {
        console.error('Attempt to edit a node which does not exist')
      } else {
        node.data = payload.newData
      }
    },
  },
})

export const chatbotFlowBuilderSliceActions = chatbotFlowBuilderSlice.actions
const chatbotFlowBuilderSliceReducer = chatbotFlowBuilderSlice.reducer
export default chatbotFlowBuilderSliceReducer
