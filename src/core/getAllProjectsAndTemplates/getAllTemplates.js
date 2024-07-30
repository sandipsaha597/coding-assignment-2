import { getAllInBuiltTemplates } from '../inBuiltTemplates/templates/functions/getAllInbuiltTemplates'

export const getAllTemplates = (userAddedTemplates) => {
  /* In-build templates should not be stored in the state or localStorage
  User can't mutate in-built templates. If we want to add a new in-built template or 
  modify one, we should be able to without breaking anything */
  return getAllInBuiltTemplates().concat(userAddedTemplates)
}
