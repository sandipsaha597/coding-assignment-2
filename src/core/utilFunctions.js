import { LOCAL_STORAGE_KEYS } from '../constants'
import { getItemById, getValueFromLocalStorage } from '../utils/functions'

/**
 * Core utility functions.
 *
 * These functions are tightly coupled with the application and can be used anywhere within it.
 *
 * Many of the functions below use store.getState(), which comes with both benefits and tradeoffs.
 *
 * Benefits:
 * - Eliminates the need to pass down the latest values available in the store.
 * - Results in cleaner code with fewer function arguments, making the functions easier to use and less prone to bugs.
 * - Reduces re-renders and enhances memoization by not requiring updated state in various dependency arrays, leading to improved performance.
 *
 * Tradeoffs:
 * - Introduces tight coupling and impurity making the functions harder to test and less predictable.
 * - Functions that use store.getState() become impure, which makes them unsuitable for use in pure functions.
 * - Parameter order (nodes, id) is better than (id, nodes)
 *
 * Workaround:
 * - When using these functions in pure contexts, pass the necessary values as parameters.
 */

/**
 * Retrieves a node by its ID from a given array of nodes.
 * @param {string} id - The ID of the node to be retrieved.
 * @param {Array} [nodes] - An optional array of nodes to search within. If not provided, it defaults to the nodes
 * from the Redux store's websiteBuilder slice.
 * @returns {Array} - An array where the first element is the found node (or undefined if not found)
 * and the second element is the index of the found node (or -1 if not found).
 * I'm using getNodeById in a reducer slice. Can't use store.getState() there because reducer is pure function.
 * For that case nodes parameter is provided. Please Provide the nodes argument when using this function in a pure function.
 */
export const getNodeById = (id, nodes) => {
  const nodeIndex = nodes.findIndex((node) => id === node.id)
  return [nodes[nodeIndex], nodeIndex]
}

export const getNodeInProjectById = (id, project) => {
  const pages = project.pages
  for (let i = 0; i < pages.length; i++) {
    const page = pages[i]
    const nodes = page.nodes
    const [node, index] = getNodeById(id, nodes)
    if (index === -1) continue
    return { node, nodeIndex: index, page, pagesIndex: i }
  }
  return { node: null, nodeIndex: -1, page: null, pagesIndex: -1 }
}

export const getActivePage = (pages) => {
  const index = pages.findIndex((page) => page.isActive === true)
  if (index === -1) return [pages[0], 0]
  return [pages[index], index]
}

export const getPageById = (id, pages) => {
  const pageIndex = pages.findIndex((page) => id === page.id)
  if (pageIndex === -1) return [pages[0], 0]
  return [pages[pageIndex], pageIndex]
}

export const findPageBySlug = (slug, pages) => {
  const index = pages.findIndex((page) => page.pageDetails.slug === slug)
  if (index === -1) return [null, -1]
  return [pages[index], index]
}

export const detectDuplicateSlug = (slug, pageId, pages) => {
  for (let i = 0; i < pages.length; i++) {
    const page = pages[i]
    if (page.id === pageId) continue
    if (slug === page.pageDetails.slug) return [page, i]
  }
  return [null, -1]
}

export const getTemplateById = (id, templates) => {
  return getItemById(id, templates)
}
export const getProjectById = (id, projects) => {
  return getItemById(id, projects)
}
export const getProjectOrTemplateById = (id, projects, templates) => {
  const [project, projectIndex] = getProjectById(id, projects)
  if (projectIndex !== -1) return [project, projectIndex]
  const [template, templateIndex] = getTemplateById(id, templates)
  if (templateIndex !== -1) return [template, templateIndex]
  return [null, -1]
}

/**
 * Retrieves the saved state of the chatbot flow builder from local storage.
 *
 * This function uses the getValueFromLocalStorage utility function to access
 * the saved state from local storage using the predefined key
 * LOCAL_STORAGE_KEYS.SAVED_CHATBOT_FLOW_BUILDER_STATE.
 *
 * @returns {Object|null} The saved state of the chatbot flow builder if it exists in local storage,
 * or null if not found or if the key does not exist.
 */

export const getSavedProjectsAndTemplates = () =>
  getValueFromLocalStorage(
    LOCAL_STORAGE_KEYS.SAVED_PROJECTS_AND_TEMPLATES_STATE
  )

// saves the current websiteBuilder state to local storage
export const saveProjectsAndTemplatesToLocalStorage = (
  projectsAndTemplates
) => {
  /* in case the store.getState().websiteBuilder contains non-serializable values or/and bigInt
  numbers or/and circular object the JSON.stringify will fail that's why wrapped the whole thing in
  a try catch block */
  // projectsAndTemplates = produce(projectsAndTemplates, (draft) => {
  //   draft.projects.forEach((v) => delete v.activePageId)
  //   draft.templates.forEach((v) => delete v.activePageId)
  // })
  try {
    localStorage.setItem(
      LOCAL_STORAGE_KEYS.SAVED_PROJECTS_AND_TEMPLATES_STATE,
      JSON.stringify(projectsAndTemplates)
    )
    return [true, 'Flow saved']
  } catch (err) {
    console.error(err)
    return [false, err.message]
  }
}
