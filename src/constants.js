/**
 * Naming conventions:
 * - Screaming Snake Case (e.g., NODE_TYPE_FORM_COMPONENT_MAP) indicates that the values
 *   are linked with values saved in backend, localStorage, sessionStorage, etc. These should be
 *   changed with high caution.
 * - camelCase names (e.g., defaultEdgeOptions) indicate that names are used only in the frontend
 *   codebase and can be changed more easily.
 */

// Types of nodes available in the chatbot flow.

// Keys used for storing data in localStorage
export const LOCAL_STORAGE_KEYS = {
  SAVED_PROJECTS_AND_TEMPLATES_STATE: 'savedProjectsAndTemplatesState',
}
